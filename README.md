# Yahya AFFAN - Cloud Security Engineer Portfolio

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://elbragga.github.io/Yahya-AFFAN-Portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/yahya-affan-87897a249/)

Cloud engineering portfolio featuring hands-on projects in AWS, IAM, JWT authentication, RBAC, and secure cloud architecture. Demonstrates my expertise in building and securing cloud infrastructure.

🔗 **Live Demo:** [https://elbragga.github.io/Yahya-AFFAN-Portfolio/](https://elbragga.github.io/Yahya-AFFAN-Portfolio/)
---
```markdown
## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Projects Showcased](#-projects-showcased)
- [Technology Stack](#-technology-stack)
- [Security Features Demonstrated](#-security-features-demonstrated)
- [Design Philosophy](#-design-philosophy)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contact](#-contact)
```
---

## 📌 Overview

This portfolio represents my professional identity as a Cloud Security Engineer. It's designed to:

- Showcase my cloud security projects with live demos and GitHub repositories
- Demonstrate my understanding of security principles through interactive UI elements
- Tell the story of my evolution from frontend development to cloud security engineering
- Provide a clean, professional platform for potential employers to evaluate my skills

The design balances aesthetics with functionality, featuring a dark/light mode toggle, interactive particle background, custom cursor, and responsive layouts that work flawlessly across all devices.

---

## ✨ Features
```markdown
### 🔐 Security-Focused Design Elements
- **Dual Cursor Concept** (original idea): Cloud icon in light mode, Shield icon in dark mode (simplified to clean circle cursor)
- **Interactive Particle Background**: Floating particles that react to mouse movement, symbolizing data flow in the cloud
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent localStorage preferences

### 🎨 UI/UX Highlights
- **Custom Animations**: Fade-in effects on scroll, gradient shifts, and hover interactions
- **Typewriter Effect**: Hero subtitle animates on page load
- **Skill Bars**: Animated progress bars that fill when scrolled into view
- **Project Cards**: 3D tilt effect on hover, smooth overlay transitions
- **Mobile Perfection**: Dedicated responsive layer ensuring perfect display on all devices

### 🧩 Interactive Components
- Live project links with GitHub repository access
- Contact form with validation and success notifications
- Smooth scrolling navigation with active section highlighting
- Loading animation with personalized "⅄" logo
```
---

## 🚀 Projects Showcased

### 1. **THE 33RD Y** - *Full-Stack Cloud Security Demo*
A vinyl store e-commerce platform evolved from a static frontend (2024) to a full-stack application with enterprise-grade security controls (2026).
```markdown
**Security Features:**
- ✅ JWT authentication for secure user sessions
- ✅ Rate limiting to prevent brute-force attacks
- ✅ Helmet.js for hardened HTTP headers
- ✅ bcrypt password hashing
- ✅ Secure RESTful API design
```
**Tech Stack:** Node.js, Express, JWT, bcrypt, Helmet.js, HTML/CSS, JavaScript  
🔗 [Live Demo](https://the-33rd-y.netlify.app) | 📂 [GitHub](https://github.com/ELBRAGGA/THE-33TH-Y)

---

### 2. **SkyLock** - *Cloud Security Platform Simulation*
A Python-based platform simulating AWS IAM, KMS encryption, and comprehensive audit logging.
```markdown
**Security Features:**
- ✅ Role-Based Access Control (RBAC)
- ✅ JWT authentication simulation
- ✅ Encryption at rest (KMS simulation)
- ✅ Complete audit trail logging
- ✅ Account lockout after failed attempts
```
**Tech Stack:** Python, Flask, JWT, bcrypt, RBAC  
📂 [GitHub](https://github.com/ELBRAGGA/SkyLock)

---

### 3. **Cloud Storage Security** - *C++ Security Fundamentals*
A C++ cloud storage simulator demonstrating core security concepts at the system level.
```markdown
**Security Features:**
- ✅ Salted SHA-256 password hashing
- ✅ Account lockout (brute force protection)
- ✅ Multi-factor authentication (MFA) simulation
- ✅ Role-based access control
- ✅ Secure file I/O operations
```
**Tech Stack:** C++, SHA-256, File I/O, RBAC  
📂 [GitHub](https://github.com/ELBRAGGA/cloud-storage-security)

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Core** | HTML5, CSS3, JavaScript (ES6) |
| **Styling** | CSS Custom Properties (Variables), Flexbox, CSS Grid, Animations |
| **Icons** | Font Awesome 6 |
| **Fonts** | Google Fonts - Inter |
| **Deployment** | GitHub Pages (current), Netlify (previous) |
| **Version Control** | Git, GitHub |

---

## 🔒 Security Features Demonstrated

This portfolio itself demonstrates security awareness through:

1. **Content Security Policy** - Implemented via meta tags and headers
2. **Secure External Resources** - All CDN links use HTTPS
3. **Input Validation** - Contact form sanitization
4. **XSS Prevention** - Proper escaping of user input
5. **LocalStorage Security** - Theme preferences stored securely
6. **Responsive Security** - No sensitive data exposed in frontend

---

## 🎯 Design Philosophy

The portfolio follows these design principles:

- **Security by Default** - Every interactive element considers security implications
- **Progressive Enhancement** - Works on all browsers, enhanced for modern ones
- **Mobile First** - Designed for mobile, scaled up for desktop
- **Accessibility** - High contrast ratios, semantic HTML, keyboard navigation
- **Performance** - Optimized assets, minimal dependencies, fast loading

### Color Palette
- **Dark Mode:** Deep burgundy (`#0f0505`) with amber (`#f59e0b`) and red (`#b91c1c`) accents
- **Light Mode:** Clean white with lavender and pink accents
- **Semantic Colors:** Success (green), Error (red), Warning (orange)

---

## 📁 Project Structure

```
yahya-portfolio/
├── index.html              # Main HTML file
├── styles.css              # All styles with CSS variables
├── script.js               # All JavaScript functionality
├── assets/
│   └── images/
│       ├── profile.jpg     # Professional profile photo
│       └── the-33rd-y-cover.jpg  # Project cover image
├── README.md               # This documentation
└── .gitignore              # Git ignore rules
```

---

## 💻 Installation & Setup

To run this portfolio locally:

```bash
# Clone the repository
git clone https://github.com/ELBRAGGA/yahya-portfolio.git

# Navigate to project directory
cd yahya-portfolio

# Open in browser
open index.html
```

No build tools or dependencies required — it's pure HTML, CSS, and JavaScript!

---

## 🌐 Deployment

### Current Hosting: GitHub Pages
This portfolio is deployed on GitHub Pages for free, reliable hosting with no usage limits.

**Deployment URL:** [https://elbragga.github.io/yahya-portfolio](https://elbragga.github.io/yahya-portfolio)

### Previous Hosting: Netlify
Previously hosted on Netlify (paused due to credit limits). The migration to GitHub Pages ensures permanent free hosting.

---

## 🔮 Future Enhancements

Planned improvements for future versions:

- [ ] **Blog Section** - Articles on cloud security topics
- [ ] **Interactive Security Demos** - Live JWT authentication simulation
- [ ] **AWS Architecture Diagrams** - Visual representations of cloud security designs
- [ ] **Downloadable Resume** - PDF version of CV
- [ ] **Analytics Integration** - Privacy-focused visitor tracking
- [ ] **Internationalization** - Multi-language support (English/French)

---

## 📬 Contact

**Yahya AFFAN**  
Cloud Security Engineer

- **Email:** Yahya.engineer@icloud.com
- **LinkedIn:** [linkedin.com/in/yahya-affan-87897a249](https://www.linkedin.com/in/yahya-affan-87897a249/)
- **GitHub:** [github.com/ELBRAGGA](https://github.com/ELBRAGGA)
- **Portfolio:** [elbragga.github.io/yahya-portfolio](https://elbragga.github.io/yahya-portfolio)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for the Inter typeface
- GitHub Pages for free hosting
- The open-source community for inspiration and resources

---

**Built with 🔐 by a Cloud Security Engineer, for the world to see.**

*Last updated: February 2026*
