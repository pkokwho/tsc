# TSC AI Prompt Studio

现代化 AI 提示词生成器，Apple 风格深色 UI。输入中文描述，一键生成适配 Midjourney、Flux、视频 AI 及通用模型的专业 Prompt。

**[在线演示](https://pkokwho.github.io/tsc/)** | **[English](README_EN.md)**

## 功能特性

- **多模型支持** — 通用模型、Midjourney、Flux、视频 AI 四种格式
- **中英双语** — 自动检测浏览器语言，一键切换
- **深色/浅色主题** — 点击切换，偏好本地保存
- **12 种艺术风格** — 写实摄影、赛博朋克、动漫风格、油画质感、水彩手绘、极简主义、科幻未来、奇幻魔法、暗黑哥特、复古胶片、3D渲染、像素艺术
- **可调参数** — 画面比例、质量等级、风格化强度
- **一键复制** — 即时复制任意 Prompt 到剪贴板
- **响应式设计** — 适配桌面、平板、手机
- **单文件部署** — 零依赖，随处部署
- **SEO & 社交** — Open Graph、Twitter Card、JSON-LD 结构化数据

## 快速开始

1. 克隆仓库：
   ```bash
   git clone https://github.com/pkokwho/tsc.git
   ```
2. 浏览器打开 `index.html` 即可使用

## 部署到 GitHub Pages

1. 推送到 GitHub 仓库
2. 进入 **Settings → Pages**
3. 设置源为 `master` 分支，根目录
4. 访问 `https://<username>.github.io/tsc/`

## 技术栈

- 原生 HTML / CSS / JavaScript
- CSS 自定义属性实现主题切换
- 无框架、无构建工具、零依赖

## 项目结构

```
tsc/
├── index.html          # 完整单文件应用
├── README.md           # 中文说明
├── README_EN.md        # 英文说明
├── CONTRIBUTING.md     # 贡献指南
└── LICENSE             # MIT 许可证
```

## 许可证

[MIT](LICENSE)
