# 贡献指南 / Contributing Guide

感谢你对 TSC AI Prompt Studio 的关注！欢迎任何形式的贡献。

## 如何贡献

### 报告问题

- 在 [Issues](https://github.com/pkokwho/tsc/issues) 页面提交新 Issue
- 请描述问题的复现步骤、预期行为和实际行为
- 附上浏览器版本和操作系统信息

### 提交代码

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m "feat: add your feature"`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

### 代码规范

- 保持单文件架构（`index.html`）
- 所有新增文本必须同时添加中英文到 `LOCALES` 对象
- CSS 使用已有的 CSS 变量体系
- JavaScript 添加中文注释
- 确保移动端和桌面端均可正常使用

### 新增风格

如需新增艺术风格，请在 `STYLE_MAP` 中添加对应的 `mj`、`flux`、`video`、`universal` 描述，同时在 `LOCALES.zh.styleOptions` 和 `LOCALES.en.styleOptions` 中添加选项。

### 提交信息格式

- `feat:` 新功能
- `fix:` 修复问题
- `docs:` 文档更新
- `style:` 样式调整
- `refactor:` 代码重构
- `i18n:` 国际化相关

## 许可证

贡献的代码将遵循 [MIT License](LICENSE)。
