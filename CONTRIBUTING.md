# 贡献指南 / Contributing Guide

感谢你对 TSC AI Prompt Studio 的关注！欢迎任何形式的贡献。

## 快速开始

1. Fork 本仓库
2. 克隆到本地：`git clone https://github.com/<your-username>/tsc.git`
3. 创建功能分支：`git checkout -b feature/your-feature`
4. 浏览器打开 `index.html` 进行开发调试
5. 提交更改并推送
6. 提交 Pull Request

## 如何贡献

### 报告问题

- 使用 [Bug Report 模板](https://github.com/pkokwho/tsc/issues/new?template=bug_report.md) 提交 Issue
- 请描述问题的复现步骤、预期行为和实际行为
- 附上浏览器版本、操作系统和设备信息
- 如有可能，请附上截图

### 提出功能建议

- 使用 [Feature Request 模板](https://github.com/pkokwho/tsc/issues/new?template=feature_request.md) 提交建议
- 描述你希望解决的问题
- 描述你建议的解决方案
- 列出你考虑过的替代方案

### 提交代码

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 进行修改并测试
4. 提交更改：`git commit -m "feat: add your feature"`
5. 推送分支：`git push origin feature/your-feature`
6. 提交 Pull Request，请填写 PR 模板中的所有必要信息

## 代码规范

### 通用规则

- 保持单文件架构（`index.html`）
- 所有新增文本必须同时添加中英文到 `LOCALES` 对象
- CSS 使用已有的 CSS 变量体系，不要硬编码颜色值
- JavaScript 添加中文注释
- 确保移动端和桌面端均可正常使用
- 确保深色和浅色主题下均可正常使用

### 新增艺术风格

如需新增艺术风格，需要修改以下位置：

1. **`STYLE_MAP`** — 添加 `mj`、`flux`、`video`、`universal` 四种格式描述
2. **`LOCALES.zh.styleOptions`** — 添加中文选项
3. **`LOCALES.en.styleOptions`** — 添加英文选项

### 提交信息格式

请使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

- `feat:` 新功能
- `fix:` 修复问题
- `docs:` 文档更新
- `style:` 样式调整（不影响功能）
- `refactor:` 代码重构
- `i18n:` 国际化相关
- `chore:` 构建/工具变更

示例：
```
feat: add steampunk art style
fix: resolve textarea focus on mobile Safari
docs: update README with deployment guide
i18n: add Japanese locale support
```

### 测试清单

提交 PR 前，请确保：

- [ ] 桌面端 Chrome / Firefox / Safari 正常显示
- [ ] 移动端 iOS Safari / Android Chrome 正常显示
- [ ] 深色主题和浅色主题均正常
- [ ] 中文和英文界面均正常
- [ ] 一键复制功能正常
- [ ] 所有 select 下拉选项正确显示
- [ ] 无控制台报错

## 行为准则

参与本项目即表示你同意遵守我们的 [行为准则](CODE_OF_CONDUCT.md)。

## 许可证

贡献的代码将遵循 [MIT License](LICENSE)。
