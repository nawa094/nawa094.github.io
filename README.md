# 🚀 Nawa Mumbwe's Tech Blog

> A modern blog built with Docusaurus, sharing insights from the South African tech landscape

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-2e8555?style=flat-square&logo=facebook)](https://docusaurus.io/)
[![Deploy to GitHub Pages](https://github.com/nawa094/nawa094.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/nawa094/nawa094.github.io/actions/workflows/deploy.yml)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=flat-square&logo=github)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

## 🌟 About

Welcome to my personal tech blog where I share:

- **💻 Technical Content** - Real-world lessons from .NET and React development
- **🎯 Career Development** - Navigating the South African tech industry
- **🏢 Industry Insights** - Working in fintech, banking, and startups
- **🤖 AI & Innovation** - Exploring cutting-edge technologies like MCP servers

## ✨ Features

- 📱 **Responsive Design** - Optimized for mobile and desktop
- 🌙 **Dark Mode Support** - Easy on the eyes, day or night
- 🔍 **Advanced Search** - Find content quickly with built-in search
- 📊 **Reading Progress** - Track your progress through articles
- 📄 **CV Download Widget** - Persistent download button for my CV
- 🏷️ **Smart Tagging** - Organized content by topic and category
- ⚡ **Fast Performance** - Optimized static site generation

## 🛠️ Tech Stack

- **Framework**: [Docusaurus 3.x](https://docusaurus.io/)
- **Language**: TypeScript
- **Styling**: CSS Modules + Custom CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Content**: MDX (Markdown + JSX)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nawa094/nawa094.github.io.git
cd my-blog-site

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm start
# or
yarn start
```

This opens `http://localhost:3000` in your browser. Most changes are reflected live without restarting the server.

### Build

```bash
# Generate static files
npm run build
# or
yarn build
```

Static files are generated in the `build` directory.

### Deployment

#### Using GitHub Pages (Recommended)

```bash
# Deploy to gh-pages branch
npm run deploy
# or
yarn deploy
```

#### Using SSH

```bash
USE_SSH=true npm run deploy
```

#### Manual Deployment

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## 📁 Project Structure

```
my-blog-site/
├── blog/                          # Blog posts
│   ├── 2025-07-12-mcp-servers.md
│   ├── 2025-06-21-money-talks.md
│   ├── authors.yml                # Author configurations
│   └── tags.yml                   # Tag definitions
├── docs/                          # Documentation pages
├── src/
│   ├── components/                # React components
│   │   ├── CVDownloadWidget/      # Persistent CV download
│   │   ├── HomepageFeatures/      # Homepage sections
│   │   ├── ReadingProgress/       # Reading progress bar
│   │   └── SEO/                   # SEO components
│   ├── css/                       # Global styles
│   ├── pages/                     # Static pages
│   │   ├── about.md              # About page
│   │   └── index.tsx             # Homepage
│   └── theme/                     # Theme overrides
├── static/                        # Static assets
│   ├── img/                      # Images
│   └── Nawa_Mumbwe_CV.md         # Downloadable CV
├── docusaurus.config.ts          # Site configuration
├── sidebars.ts                   # Sidebar configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

### Adding a New Blog Post

```bash
# Use the built-in script
node scripts/new-post.js "Your Post Title"
```

Or manually create a file in the `blog/` directory:

```markdown
---
title: 'Your Post Title'
authors: nawam
date: 2025-07-12
description: 'Post description'
tags: ['tag1', 'tag2']
---

# Your Post Title

Your content here...

<!-- truncate -->

More content after the excerpt...
```

### Customizing Themes

- Edit `src/css/custom.css` for global styles
- Modify `docusaurus.config.ts` for site configuration
- Override theme components in `src/theme/`

### Adding Components

Create reusable components in `src/components/` and import them in your posts:

```jsx
import CustomComponent from '@site/src/components/CustomComponent';

<CustomComponent />;
```

## 📊 Analytics & Performance

The site includes:

- **Reading Progress Indicators** - Visual progress bars for long articles
- **SEO Optimization** - Meta tags, Open Graph, and Twitter Cards
- **Performance Monitoring** - Core Web Vitals tracking
- **Responsive Images** - Optimized image loading

## 🤝 Contributing

Found a typo or want to suggest improvements?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Writing Guidelines

- **Use clear, accessible language** - Explain technical concepts simply
- **Include South African context** - Relate content to local challenges and opportunities
- **Add practical examples** - Show real-world applications
- **Tag appropriately** - Help readers find related content
- **Include code samples** - When relevant, provide working examples

## 🔧 Maintenance

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update dependencies
npm update
```

### Performance Monitoring

```bash
# Analyze bundle size
npm run build
npm run analyze
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Connect

- **Blog**: [nawa094.github.io](https://nawa094.github.io)
- **LinkedIn**: [linkedin.com/in/nawam](https://linkedin.com/in/nawam)
- **GitHub**: [github.com/nawa094](https://github.com/nawa094)
- **Email**: mumbwe94@gmail.com

---

<div align="center">

**Built with ❤️ in Johannesburg, South Africa**

_Sharing knowledge, building community, creating opportunities_

</div>
