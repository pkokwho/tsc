<div align="center">

# TSC AI Prompt Studio

**现代化 AI 提示词生成器**

输入中文描述，一键生成适配 Midjourney、Flux、视频 AI 及通用模型的专业 Prompt

[在线演示](https://pkokwho.github.io/tsc/) · [报告问题](https://github.com/pkokwho/tsc/issues) · [功能建议](https://github.com/pkokwho/tsc/issues/new?template=feature_request.md) · [English](README_EN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen.svg)](https://pkokwho.github.io/tsc/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

## 截图预览

<p align="center">
  <img src="assets/dark-theme.png" alt="深色主题" width="48%" />
  <img src="assets/light-theme.png" alt="浅色主题" width="48%" />
</p>

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

无需安装任何依赖，无需构建步骤。

## 部署

### GitHub Pages

1. Fork 或推送本仓库到 GitHub
2. 进入 **Settings → Pages**
3. 设置源为 `master` 分支，根目录
4. 访问 `https://<username>.github.io/tsc/`

### 其他平台

`index.html` 是完整的单文件应用，可直接部署到任何静态托管服务：
- Vercel / Netlify / Cloudflare Pages
- 任意 Web 服务器
- 本地文件直接打开

## 技术栈

- 原生 HTML / CSS / JavaScript
- CSS 自定义属性实现主题切换
- 无框架、无构建工具、零依赖

## 项目结构

```
tsc/
├── .github/
│   ├── ISSUE_TEMPLATE/    # Issue 模板
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/                # 截图等静态资源
├── index.html             # 完整单文件应用
├── CHANGELOG.md           # 更新日志
├── CODE_OF_CONDUCT.md     # 行为准则
├── CONTRIBUTING.md        # 贡献指南
├── LICENSE                # MIT 许可证
├── README.md              # 中文说明
├── README_EN.md           # 英文说明
├── SECURITY.md            # 安全策略
└── SUPPORT.md             # 支持渠道
```

## 贡献

欢迎贡献！请阅读 [贡献指南](CONTRIBUTING.md) 了解详情。

## 行为准则

本项目采用 [贡献者公约](CODE_OF_CONDUCT.md) 作为行为准则，参与本项目即表示你同意遵守其条款。

## 更新日志

详见 [CHANGELOG.md](CHANGELOG.md)。

## 许可证

[MIT](LICENSE) © TSC AI Prompt Studio
