# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please report it responsibly.

**Do NOT report security vulnerabilities through public GitHub issues.**

### How to Report

1. **Email**: Send a detailed report to the repository maintainer via [GitHub's private vulnerability reporting](https://github.com/pkokwho/tsc/security/advisories/new)
2. **Include the following information**:
   - Type of vulnerability (XSS, CSRF, etc.)
   - Full path of the affected file(s)
   - Steps to reproduce the issue
   - Potential impact of the vulnerability
   - Any possible mitigations you've identified

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Resolution**: Depends on severity, critical issues will be prioritized

### Disclosure Policy

- Please do not disclose the vulnerability publicly until a fix has been released
- We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices

Since TSC AI Prompt Studio is a client-side only application:

- No user data is sent to any server
- All prompt generation happens locally in the browser
- Language and theme preferences are stored in `localStorage` only
- No cookies, no tracking, no analytics
