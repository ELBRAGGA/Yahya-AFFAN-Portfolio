# Yahya AFFAN — Portfolio

[![Website](https://img.shields.io/badge/Portfolio-Live-c2a878)](https://elbragga.github.io/Yahya-AFFAN-Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-ELBRAGGA-181717?logo=github)](https://github.com/ELBRAGGA)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin)](https://www.linkedin.com/in/yahya-affan-87897a249/)

A multilingual personal portfolio presenting my work in authentication, access control, and audit systems, alongside my education, professional experience, and path toward cloud security engineering.

**Live portfolio:** https://elbragga.github.io/Yahya-AFFAN-Portfolio/

Available in **English, French, and Chinese**.

---

## Contents

- [Overview](#overview)
- [Featured Projects](#featured-projects)
- [Experience](#experience)
- [Education and Certification](#education-and-certification)
- [Skills and Technologies](#skills-and-technologies)
- [Portfolio Features](#portfolio-features)
- [Project Structure](#project-structure)
- [Run Locally](#run-locally)
- [Customization](#customization)
- [Contact](#contact)
- [License](#license)

## Overview

The portfolio is built around a practical security question: **who is allowed to do what, and how can that decision be verified later?**

It presents hands-on work involving authentication, role-based access control, password security, and audit logging. It also introduces my professional experience and current learning interests, including AWS identity and access management, key management, detection engineering, and cloud security posture management.

The site uses a minimal editorial layout, with dedicated pages for each project and education entry.

## Featured Projects

### 1. THE 33RD Y

A vinyl-store application that evolved from a static frontend into a full-stack application with security controls.

**Implemented security features:**
- JWT authentication for user sessions
- Rate limiting to help protect against brute-force attempts
- HTTP security headers with Helmet.js
- Password hashing with bcrypt
- REST API design

**Technology:** Node.js, Express, JWT, bcrypt, Helmet.js

- [GitHub repository](https://github.com/ELBRAGGA/THE-33TH-Y)
- [Live demo](https://elbragga.github.io/THE-33TH-Y/)

### 2. SkyLock

A Python application that models cloud-security concepts, including AWS IAM-style permissions, KMS-style encryption, and audit logging.

**Demonstrated concepts:**
- Role-based access control (RBAC)
- JWT authentication
- Encryption at rest (KMS simulation)
- Audit-trail logging
- Account lockout after failed attempts

**Technology:** Python, Flask, JWT, RBAC

- [GitHub repository](https://github.com/ELBRAGGA/SkyLock)

### 3. Cloud Storage Security

A C++ storage simulator focused on applying security fundamentals at the system level.

**Demonstrated concepts:**
- Salted SHA-256 password hashing
- Account lockout
- Multi-factor authentication simulation
- Role-based access control
- File input/output operations

**Technology:** C++, SHA-256, file I/O, RBAC

- [GitHub repository](https://github.com/ELBRAGGA/cloud-storage-security)

## Experience

The portfolio includes a dedicated experience section covering:

- **Fusion BPO Services** — customer service operations from October 2022 to August 2024, including support for FIFA World Cup visitors and guest operations for Smartflats.
- **Trip.com Group** — a one-month volunteer English-teaching experience in Guizhou, China, in July 2026.

For the detailed descriptions, see the Experience section on the [live portfolio](https://elbragga.github.io/Yahya-AFFAN-Portfolio/#/exp).

## Education and Certification

The portfolio includes education and certification entries, with a dedicated detail page for each entry.

**Featured certification:**
- **CS260 — Cryptography & Network Security**
- Issuer: Saylor Academy
- Result: 87.50%
- Course duration: 50 hours
- Topics: cryptography, network security, encryption, and hashing
- [View certificate](https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1771610832/5647843974YA.pdf)

Some education text in the source is intentionally marked with placeholders. Replace those values with verified details before publishing them.

## Skills and Technologies

| Area | Technologies and concepts |
|---|---|
| Authentication | JWT, password hashing, bcrypt |
| Access control | RBAC, IAM concepts |
| Security | Rate limiting, secure HTTP headers, audit logging, cryptography |
| Cloud security learning | AWS IAM, AWS KMS, detection engineering, CSPM |
| Backend | Node.js, Express, Python, Flask, C++ |
| Frontend | HTML, CSS, JavaScript |
| Deployment | GitHub Pages |
| Version control | Git, GitHub |

AWS IAM and KMS are listed as learning areas; SkyLock demonstrates simulations of selected cloud-security concepts rather than a production AWS deployment.

## Portfolio Features

- **Three languages:** English, French, and Chinese, with a language selector.
- **Dedicated detail pages:** separate pages for projects and education entries.
- **Navigation:** hash-based routes, supporting browser back and forward navigation.
- **Persistent language choice:** the selected language is saved in browser local storage.
- **Contact form:** validates the required fields. Until a Formspree endpoint is configured, submitting the form opens the visitor's email application with the message prepared.
- **Responsive layout:** styles are defined in a dedicated CSS file.
- **Accessible navigation:** includes a skip-to-content link and semantic page structure.

## Project Structure

```
Yahya-AFFAN-Portfolio/
├── index.html       # HTML shell and page metadata
├── styles.css       # Portfolio styling
├── script.js        # Content, translations, routing, and page logic
├── assets/
│   └── hero.jpg     # Landing-page image
├── README.md
└── LICENSE
```

## Run Locally

No build process or package installation is required.

```bash
# Clone the repository
git clone https://github.com/ELBRAGGA/Yahya-AFFAN-Portfolio.git

# Enter the project directory
cd Yahya-AFFAN-Portfolio

# Open the site
open index.html
```

You can also open `index.html` directly in a browser.

## Customization

Most portfolio content and translations are stored in the `T` object near the top of `script.js`.

- Update the `en`, `fr`, and `zh` entries to edit text in each language.
- Update the project links and technology labels in the `PF` array.
- Replace any text in square brackets with accurate information before publishing.
- Add a Formspree endpoint to `FORM_URL` in `script.js` to enable direct form submission. If it remains empty, the form uses the visitor's default email application.

The portfolio is a static HTML, CSS, and JavaScript project. Google Fonts is used for typography.

## Deployment

The site is hosted with **GitHub Pages**.

**Live URL:** https://elbragga.github.io/Yahya-AFFAN-Portfolio/

## Contact

**Yahya AFFAN**

- **Email:** [Yahya.engineer@icloud.com](mailto:Yahya.engineer@icloud.com)
- **LinkedIn:** [linkedin.com/in/yahya-affan-87897a249](https://www.linkedin.com/in/yahya-affan-87897a249/)
- **GitHub:** [github.com/ELBRAGGA](https://github.com/ELBRAGGA)
- **Portfolio:** [elbragga.github.io/Yahya-AFFAN-Portfolio](https://elbragga.github.io/Yahya-AFFAN-Portfolio/)

## License

This project is available under the [MIT License](LICENSE).
