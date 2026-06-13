<div align="center">

<img src="assets/logo.svg" alt="TSC Logo" width="120" />

# TSC AI Prompt Studio

**现代化 AI 提示词生成器 · 优化器 · 模板库**

输入中文描述，一键生成适配 Midjourney、Flux、视频 AI 及通用模型的专业 Prompt

[在线演示](https://pkokwho.github.io/tsc/) · [报告问题](https://github.com/pkokwho/tsc/issues) · [功能建议](https://github.com/pkokwho/tsc/issues/new?template=feature_request.md) · [English](README_EN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen.svg)](https://pkokwho.github.io/tsc/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

## 演示

<p align="center">
  <img src="assets/dark-theme.png" alt="TSC AI Prompt Studio 深色主题截图" width="48%" />
  <img src="assets/light-theme.png" alt="TSC AI Prompt Studio 浅色主题截图" width="48%" />
</p>

<details>
<summary>查看演示动图（约 45MB）</summary>

<p align="center">
  <img src="assets/demo.gif" alt="TSC AI Prompt Studio Demo" width="100%" />
</p>

</details>

## 功能特性

<table>
<tr>
<td width="50%">

### 🎨 Prompt 生成器
- 多模型支持 — 通用 / Midjourney / Flux / 视频 AI / SeaDance 2.0
- 12 种艺术风格 — 写实、赛博朋克、动漫、油画等
- 可调参数 — 比例、质量、风格化强度
- 导出功能 — 复制 / TXT / Markdown

</td>
<td width="50%">

### ⚡ Prompt 优化器
- 智能增强 — 简单描述 → 专业 Prompt
- 多模型适配 — ChatGPT / MJ / Flux / Video / SeaDance 2.0
- 原文对比 — 直观展示优化效果
- 历史记录 — 自动保存，支持回填

</td>
</tr>
<tr>
<td width="50%">

### 📚 模板库
- 9 大分类 — SEO / 博客 / YouTube / 编程 / 学习 / 营销 / MJ / Flux / SeaDance
- 一键插入 — 点击即用，自动填入生成器
- 中英双语 — 每个模板均有中英文版本
- 持续扩展 — 更多模板持续更新

</td>
<td width="50%">

### 📊 质量评分
- 四维评估 — 清晰度 / 上下文 / 具体性 / 结构性
- 0-100 评分 — 量化提示词质量
- 改进建议 — 针对性优化方向
- 实时反馈 — 生成即评分

</td>
</tr>
</table>

### 通用特性
- **中英双语** — 自动检测浏览器语言，一键切换
- **深色/浅色主题** — 点击切换，偏好本地保存
- **响应式设计** — 适配桌面、平板、手机
- **单文件部署** — 零依赖，随处部署
- **SEO & 社交** — Open Graph、Twitter Card、JSON-LD 结构化数据
- **本地优先** — 用户输入不上传服务器，仅请求 GitHub Star 数

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
├── assets/                # Logo、截图等静态资源
│   ├── logo.svg           # SVG Logo
│   ├── demo.gif           # 演示动画
│   ├── dark-theme.png     # 深色主题截图
│   └── light-theme.png    # 浅色主题截图
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

## 路线图

- [ ] AI 驱动的提示词自动补全
- [ ] 提示词收藏夹 / 书签系统
- [ ] 更多模板分类（DALL-E、Stable Diffusion、Sora）
- [ ] 提示词版本对比 (Diff View)
- [ ] 用户自定义模板
- [ ] PWA 离线支持
- [ ] 多语言扩展（日语、韩语）

## 发布历史

| 版本 | 日期 | 说明 |
|------|------|------|
| [v3.1.1] | 2026-06-13 | 稳态优化、文档同步、安全渲染 |
| [v3.1.0] | 2026-06-05 | SeaDance 2.0 支持 |
| [v3.0.0] | 2026-06-05 | 模板库、质量评分、导出功能 |
| [v2.0.0] | 2026-06-03 | 双语系统、主题切换、SEO、开源规范 |
| [v1.0.0] | 2026-06-03 | 初始发布 — 生成器、优化器 |

详见 [CHANGELOG.md](CHANGELOG.md)。

## 贡献

欢迎贡献！请阅读 [贡献指南](CONTRIBUTING.md) 了解详情。

## 行为准则

本项目采用 [贡献者公约](CODE_OF_CONDUCT.md) 作为行为准则，参与本项目即表示你同意遵守其条款。

## 许可证

[MIT](LICENSE) © TSC AI Prompt Studio
