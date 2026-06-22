// API Route: /api/health
// 健康检查端点 - 用于 Vercel 部署监控和未来 SaaS 架构基础
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    status: 'ok',
    service: 'ai-prompt-studio',
    timestamp: new Date().toISOString(),
    runtime: {
      node: process.version,
      region: process.env.VERCEL_REGION || 'local',
      environment: process.env.VERCEL_ENV || 'development'
    },
    features: {
      pwa: true,
      offline: true,
      apiRoutes: true,
      aiProviders: {
        mock: true,
        openai: !!process.env.OPENAI_API_KEY,
        anthropic: !!process.env.ANTHROPIC_API_KEY,
        gemini: !!process.env.GEMINI_API_KEY
      }
    }
  });
}
