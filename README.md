<div align="center">

<img src="assets/logo.svg" alt="TSC Logo" width="120" />

# TSC AI Prompt Studio

**现代 AI 提示词生成器 · 优化器 · 模板库 · 本地提示词库**

输入你的创意描述，一键生成适配通用图像模型、Midjourney、Flux、视频 AI 和 SeaDance 2.0 的专业 Prompt。

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

### 专业界面与动效

- 单文件内置 Canvas 背景动画，呈现低干扰的 AI 工作台氛围。
- 动效遵循性能优先原则，主要使用 Canvas、透明度和轻量绘制，不引入运行时依赖。
- 支持 `prefers-reduced-motion`，系统减少动效时自动降级为静态背景。
- 深色/浅色主题下分别调校背景色、卡片层级和焦点状态。

### Prompt 生成器

- 支持通用模型、Midjourney、Flux、Video AI、SeaDance 2.0 五类输出。
- 提供 24 种艺术风格，包括写实摄影、产品广告、电影海报、建筑可视化、黏土模型、剪纸艺术、高级时装等。
- 支持画面比例、质量、风格化强度，以及用途场景、镜头语言、构图、光线、色彩、情绪、细节密度和负面提示词。
- 多模型输出共享同一套结构化上下文，减少随机拼接导致的不稳定结果。
- 每条结果支持复制、TXT 下载、Markdown 下载和保存到本地提示词库。

### Prompt 优化器

- 将简单描述扩展为更专业、更具体的提示词。
- 输出 ChatGPT、Midjourney、Flux、Video AI、SeaDance 2.0 的优化版本。
- 根据输入自动推断人物、产品、视频、建筑等常见意图，并补全镜头、光线、构图和负面提示词。
- 展示原始输入与增强描述对比。
- 优化历史保存在浏览器本地，可回填和清空。

### 模板库

- 9 个分类：SEO、博客写作、YouTube 脚本、编程助手、学习助手、营销文案、Midjourney、Flux、SeaDance。
- 每个模板提供中文和英文版本。
- 支持全部模板、单分类和收藏模板搜索。
- 自动识别 `[占位符]` 并生成填写表单，填写后可预览、复制或插入生成器。
- 模板可本地收藏，常用模板可以快速复用。
- 支持复制模板链接，通过 URL hash 打开指定模板。

### 本地提示词库

- 保存生成结果中的高价值提示词。
- 支持复制、恢复到生成器、删除、清空。
- 支持 JSON 导出和导入，方便备份与迁移。
- 数据仅保存在浏览器本地，不需要账号、后端或数据库。

### 质量评分

- 从清晰度、上下文、具体性、结构性四个维度评分。
- 生成后自动给出 0-100 总分。
- 提供有针对性的改进建议。

## 0 成本产品原则

当前阶段不接入付费 API、数据库、登录系统、云同步或付费分析服务。项目保持：

- 单文件入口：`index.html`
- 零依赖：无构建工具、无包管理器、无运行时依赖
- 本地优先：用户输入、历史记录、提示词库都留在浏览器本地
- 可直接部署：GitHub Pages、Cloudflare Pages、Netlify、Vercel 或任意静态服务器

运行时唯一外部请求是 GitHub 仓库 Star 数，用于展示项目受欢迎程度；用户输入和保存的 Prompt 不会上传。

## 快速开始

```bash
git clone https://github.com/pkokwho/tsc.git
cd tsc
```

然后用浏览器打开 `index.html` 即可使用。无需安装依赖，无需构建。

## 部署

### GitHub Pages

1. Fork 或推送本仓库到 GitHub。
2. 进入仓库 **Settings > Pages**。
3. Source 选择 `master` 分支和根目录。
4. 访问 `https://<username>.github.io/tsc/`。

### 其他静态平台

`index.html` 是完整应用，可以直接部署到：

- Cloudflare Pages
- Netlify
- Vercel
- 任意 Web 静态服务器
- 本地文件系统

## 技术栈

- 原生 HTML / CSS / JavaScript
- CSS 自定义属性实现主题切换
- `localStorage` 保存语言、主题、优化历史和本地提示词库
- Blob + FileReader 实现 TXT、Markdown、JSON 导出导入
- 无框架、无构建、无后端

## 项目结构

```text
tsc/
├── .github/                         # Issue 和 PR 模板
├── .trae/documents/                 # 产品规划和技术架构文档
├── assets/
│   ├── logo.svg                     # Logo
│   ├── dark-theme.png               # 深色主题截图
│   ├── light-theme.png              # 浅色主题截图
│   └── demo.gif                     # 演示动图，README 默认折叠
├── docs/superpowers/plans/          # 本轮实现计划记录
├── tests/                           # 零依赖回归检查脚本
├── index.html                       # 完整单文件应用
├── README.md                        # 中文说明
├── README_EN.md                     # 英文说明
├── CHANGELOG.md                     # 更新日志
├── SECURITY.md                      # 安全策略
├── SUPPORT.md                       # 支持渠道
├── CONTRIBUTING.md                  # 贡献指南
└── LICENSE                          # MIT License
```

## 路线图

### 当前 0 成本阶段

- [x] 多模型 Prompt 生成
- [x] Prompt 优化器
- [x] 模板库
- [x] 质量评分
- [x] 本地提示词库
- [x] JSON 备份与恢复
- [x] 专业参数面板和结构化 Prompt 上下文
- [ ] 自定义模板（本地保存）
- [ ] Prompt 版本对比
- [ ] PWA 离线缓存

### 后续预算阶段

- [ ] 账号系统和云同步
- [ ] 团队空间
- [ ] 高级模板市场
- [ ] 付费功能和订阅
- [ ] 真实 AI API 辅助生成
- [ ] 隐私合规和产品分析体系

## 发布历史

| 版本 | 日期 | 说明 |
|------|------|------|
| [v3.5.0] | 2026-06-19 | 专业参数面板、24 种风格、结构化多模型生成、优化器意图推断、移动端滚动性能优化 |
| [v3.4.0] | 2026-06-16 | 专业动态背景、高级工作台视觉层级、动效可访问性增强 |
| [v3.3.0] | 2026-06-14 | 模板占位符填写、模板收藏、全局搜索、模板分享链接 |
| [v3.2.0] | 2026-06-14 | 本地提示词库、JSON 备份恢复、模板搜索、文档编码修复 |
| [v3.1.1] | 2026-06-13 | 稳态优化、文档同步、安全渲染、可访问性增强 |
| [v3.1.0] | 2026-06-05 | SeaDance 2.0 支持 |
| [v3.0.0] | 2026-06-05 | 模板库、质量评分、导出功能 |
| [v2.0.0] | 2026-06-03 | 双语系统、主题切换、SEO、开源规范 |
| [v1.0.0] | 2026-06-03 | 初始发布 |

详见 [CHANGELOG.md](CHANGELOG.md)。

## 贡献

欢迎贡献。请先阅读 [贡献指南](CONTRIBUTING.md)。

## 行为准则

本项目采用 [Contributor Covenant](CODE_OF_CONDUCT.md) 作为行为准则。

## 许可证

[MIT](LICENSE) © TSC AI Prompt Studio
