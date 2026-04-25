---
name: portfolio-website-conventions
description: "Use when: updating components, styling, or content in the portfolio website (Docusaurus+React). Ensures consistent file locations, naming conventions, recent design patterns, and best practices for components, docs, and styles."
---

# Portfolio Website Project Conventions

Portfolio is a Docusaurus-based static site showcasing professional work, certifications, and technical expertise. Built with React and Markdown documentation.

## Project Architecture

### Directory Structure
```
/website
├── .github/                    # Config, skills, instructions
├── src/
│   ├── components/            # React components (reusable UI)
│   │   ├── TechSkillsShowcase/ # Skills grid with categories
│   │   ├── Certification/     # Cert display
│   │   ├── ExperienceTimeline/
│   │   └── [others]/
│   ├── pages/                 # Page-level components
│   │   ├── index.js          # Homepage
│   │   ├── index.module.css   # Page styles
│   │   └── case-studies/
│   ├── css/                   # Global styles
│   │   └── custom.css
│   ├── data/                  # Static data exports
│   │   └── _SocialLinks.js
│   └── utils/
├── docs/                      # MDX documentation files
│   ├── intro.mdx             # "About Me" / Professional Summary
│   ├── educationdetails.mdx  # Education & Qualifications
│   ├── technicalSkills.mdx
│   ├── workExperience.mdx
│   └── hireMe.mdx
├── blog/                      # Blog posts with metadata
│   ├── authors.yml
│   ├── 2021-08-26-welcome/
│   └── 2025-03-28-bdd-best-practices/
├── static/                    # Static assets (robots.txt, favicons)
├── build/                     # Production build output
├── docusaurus.config.js       # Main Docusaurus config
├── sidebars.js               # Nav sidebar structure
├── package.json              # Dependencies & scripts
└── README.md
```

### Core Technologies
- **Framework**: Docusaurus 3.x (static site generation)
- **UI Library**: React 18+
- **Styling**: CSS Modules (component-scoped styles)
- **Content**: Markdown (.md) + MDX (.mdx with JSX)
- **Dev Server**: `yarn start` (localhost:3000/website)
- **Build**: `yarn build` → outputs to `/build`
- **Deploy**: GitHub Pages (Yarn script `yarn deploy`)

---

## Recent Changes & Current Standards (2026)

### TechSkillsShowcase Component
**Last Updated**: March 2026

#### Changes Applied
- ✅ **Removed progress bars** – cleaner visual hierarchy
- ✅ **Removed "% Proficiency" text** – redundant with level badges
- ✅ **Compact card design**:
  - Padding: 0.8rem (was 1.8rem)
  - Grid min-width: 200px (was 280px)
  - Grid gap: 1rem (was 2rem)
  - Skill name font: 0.9rem (was 1.1rem)
  - Level badge: 0.65rem (was 0.75rem)

#### File Locations
```
src/components/TechSkillsShowcase/
├── index.js          # Main component, exports default
└── styles.module.css # Component styles (no progress bar styles)
```

#### Key Implementation Details
- **Props**: None – all data from hardcoded `skills` array
- **State**: `activeCategory` – filters skills by category
- **Categories**: Testing, Automation, Languages, DevOps, Databases, AI/ML
- **Removed CSS Classes**: `.progressBar`, `.progressFill`, `.proficiency`
- **Active Classes**: `.skillCard`, `.skillHeader`, `.skillName`, `.skillLevel`, `.skillName`, `.categoryFilter`, `.filterBtn`, `.skillsGrid`, `.skillsTitle`, `.skillsSection`

---

## Component Naming & CSS Conventions

### CSS Module Class Names
Generated class names follow Docusaurus format: `[classNameInModule]_src-components-[ComponentName]-styles-module`

**Example**: 
- CSS: `.skillCard` in `TechSkillsShowcase/styles.module.css`
- Browser: `skillCard_src-components-TechSkillsShowcase-styles-module`

### When Making Component Changes
1. **Edit `.module.css` only** – no inline styles in JSX
2. **Use className** for conditional styles:
   ```js
   className={`${styles.skillCard} ${active ? styles.active : ''}`}
   ```
3. **Responsive design**: Use `@media (max-width: 768px)` and `@media (max-width: 480px)`
4. **Color palette**: Defined via props or inline (e.g., `style={{ backgroundColor: getLevelColor(...) }}`)

### CSS Classes to Avoid or Remove
- ❌ `.progressBar`, `.progressFill` – removed cleanup (skills UI)
- ❌ Inline `<style>` tags – use modules
- ❌ Global class names – always use scoped modules

---

## Documentation Files

### MDX/Markdown Locations
| Page | File | Route |
|------|------|-------|
| Professional Summary | `docs/intro.mdx` | `/website/docs/intro` |
| Education | `docs/educationdetails.mdx` | `/website/docs/educationdetails` |
| Technical Skills | `docs/technicalSkills.mdx` | `/website/docs/technicalSkills` |
| Work Experience | `docs/workExperience.mdx` | `/website/docs/workExperience` |
| Hire Me | `docs/hireMe.mdx` | `/website/docs/hireMe` |
| Certifications | `src/pages/Certifications/` | `/website/Certifications` |
| Blog | `blog/` (subdirs) | `/website/blog` |

### MDX Writing Tips
- Use emojis for visual hierarchy (📚, ✅, 🏆, etc.)
- Links: `[text](https://url)` or `[text](../docs/intro)`
- Heading anchors auto-generated from ## text (kebab-case)
- Code blocks: ```js, ```json, etc.

---

## Common Tasks & Patterns

### Adding a New Skill to TechSkillsShowcase
1. Edit `src/components/TechSkillsShowcase/index.js` → `skills` array
2. Add object with: `category`, `label`, `level`, `proficiency`
3. Auto-categorizes, no styling changes needed

### Updating Global Styles
- Edit `src/css/custom.css` for site-wide changes
- Edit component `.module.css` for scoped changes
- Use CSS variables (defined in Docusaurus config or custom.css)

### Modifying Navigation
- Edit `sidebars.js` for left sidebar order
- Edit `docusaurus.config.js` navbar for top menu

### Deploying
```bash
yarn build      # Create /build
yarn deploy     # Push to gh-pages branch
```

---

## Quick Reference: When to Update This Skill

Update this file when:
- ✅ Component layout/styling changes
- ✅ New components added (document structure, naming)
- ✅ Naming conventions shift
- ✅ New documentation patterns established
- ✅ Build/deploy process changes
- ✅ Major dependency updates affect structure

Do NOT update for: content tweaks (just edit the .mdx file directly)

---

## Related Files
- Main config: `docusaurus.config.js`
- Sidebar nav: `sidebars.js`
- Package scripts: `package.json` (build, deploy, start)
- Global styles: `src/css/custom.css`
