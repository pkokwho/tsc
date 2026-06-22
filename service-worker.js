/* ====================================================================
 * AI Creator Workbench - Service Worker (Vercel 适配版)
 * 策略：
 *   - 静态资源：Cache First + 后台更新（stale-while-revalidate）
 *   - 页面导航：Network First，离线时回退到缓存
 *   - 字体/图片：Cache First，长期缓存
 *   - API 路由：Network First，不缓存（实时数据）
 *   - 更新：skipWaiting + controllerchange 自动激活
 * 适配：GitHub Pages（相对路径）+ Vercel（根路径）
 * ==================================================================== */

const SW_VERSION = 'v1.1.0';
const STATIC_CACHE = `acw-static-${SW_VERSION}`;
const RUNTIME_CACHE = `acw-runtime-${SW_VERSION}`;
const FONT_CACHE = `acw-fonts-${SW_VERSION}`;
const API_CACHE = `acw-api-${SW_VERSION}`;
const OFFLINE_URL = './offline.html';

/* 预缓存核心资源（安装时立即缓存） */
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

/* 字体来源 */
const FONT_ORIGINS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://fonts.font.im'
];

/* 安装：预缓存核心资源 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS).catch(err => {
        console.warn('[SW] Precache partial failure:', err.message);
      }))
      .then(() => self.skipWaiting())
  );
});

/* 激活：清理旧缓存 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => ![STATIC_CACHE, RUNTIME_CACHE, FONT_CACHE, API_CACHE].includes(key))
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* 请求拦截：根据类型路由到不同策略 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  /* 只处理 GET 请求 */
  if (request.method !== 'GET') return;

  /* 跳过 chrome-extension 和非 http(s) 请求 */
  if (!url.protocol.startsWith('http')) return;

  /* API 路由：Network First，短时缓存（5 秒） */
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(apiNetworkFirst(request));
    return;
  }

  /* 导航请求：Network First，离线回退 */
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  /* 字体请求：Cache First，长期缓存 */
  if (FONT_ORIGINS.some(origin => url.origin === origin)) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  /* 同源静态资源：Stale While Revalidate */
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  /* 图片请求：Cache First */
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request, RUNTIME_CACHE));
    return;
  }

  /* 其他跨域请求：Network First，失败回退缓存 */
  event.respondWith(networkFirst(request, RUNTIME_CACHE));
});

/* === 缓存策略实现 === */

/* Cache First：优先缓存，缓存缺失才请求 */
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    return cached || new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

/* Network First：优先网络，失败回退缓存 */
async function networkFirst(request, cacheName = RUNTIME_CACHE) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    /* 离线且无缓存：返回离线页面 */
    if (request.mode === 'navigate') {
      const offline = await cache.match(OFFLINE_URL);
      return offline || new Response('You are offline', { status: 503, headers: { 'Content-Type': 'text/html' } });
    }
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

/* API Network First：API 请求专用，Network First + 短缓存降级 */
async function apiNetworkFirst(request) {
  const cache = await caches.open(API_CACHE);
  try {
    const response = await fetch(request);
    /* 只缓存成功的响应 */
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    /* API 离线：尝试缓存 */
    const cached = await cache.match(request);
    if (cached) return cached;
    return new Response(JSON.stringify({ error: 'offline', message: 'API unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

/* Stale While Revalidate：立即返回缓存，后台更新 */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => cached);
  return cached || fetchPromise;
}

/* === 消息通信：支持手动更新 === */
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'GET_VERSION') {
    event.ports[0].postMessage({ version: SW_VERSION });
  }
});

/* === 后台同步（可选） === */
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-prompt-history') {
    event.waitUntil(syncPromptHistory());
  }
});

async function syncPromptHistory() {
  // 预留：后台同步本地历史到云端
  console.log('[SW] Background sync triggered');
}
