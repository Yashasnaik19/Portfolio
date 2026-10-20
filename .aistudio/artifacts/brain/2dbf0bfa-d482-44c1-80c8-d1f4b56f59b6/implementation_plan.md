# Yashas B Naik — Interactive 3D Developer Portfolio & Deployment Guide

Build and compile a production-ready, interactive 3D developer portfolio for Yashas B Naik directly inside this AI Studio workspace, paired with an integrated deployment and Git push workflow to publish the repository to GitHub and Vercel.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed building and compiling the full 3D interactive portfolio inside this workspace first, followed by pushing to GitHub (`Yashasnaik19/portfolio`) and deploying to Vercel.

- **Confirmed Decision 1**: Build the full application in this workspace with Three.js 3D network globe, particle background, project modals, skills matrix, and interactive contact drawer.
- **Confirmed Decision 2**: Provide clear, copyable, tested Git commands and a deployment drawer/modal in the app for pushing the project to `https://github.com/Yashasnaik19/portfolio` and deploying on Vercel.
- **Design Alignment**: Enforce clean typography (Space Grotesk + Inter + JetBrains Mono), cyber-dark aesthetic (`#070B14`, cyan `#00E5FF`, electric blue `#4187FF`), zero-pill metadata discipline, and WCAG AA contrast.

---

### 1. Overview & Core Concept

- **What It Does**: A high-impact portfolio showcasing Yashas B Naik—a Computer Science and Engineering (Cybersecurity) student at Dayananda Sagar College of Engineering (B.E. 2029, 8.75 CGPA). It features an interactive 3D cyber-network globe, dynamic particle constellation, deep-dive modal showcases for projects like PulseGate, verifiable achievements, skills breakdown, and direct contact dispatch.
- **Target Audience / Persona**: Recruiters, engineering hiring managers, hackathon partners, and open-source collaborators seeking software engineers and cybersecurity specialists.
- **Key Value**: Combines cutting-edge 3D interactive graphics with authentic technical achievements, zero fabricated metrics, and complete deployment automation.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Hero & 3D Immersion**: Visitor lands on a dark cyber interface with an animated role headline cycle ("Cybersecurity Enthusiast", "Software Developer", "AI Application Builder"), a canvas particle grid, and an interactive Three.js digital globe that responds to mouse tilt and drag with WebGL fallback.
2. **Project Deep Dive**: Visitors can examine PulseGate (AI healthcare triage & referral platform), Smart Water Security, and CTF Challenge Practice. Clicking any card launches an accessible modal with architecture highlights, multilingual triage specs, and verified repository links.
3. **Exploration & Filtering**: Technical skills (Languages, Web & App Dev, AI Tools, Databases, Geospatial, Cybersecurity) can be filtered dynamically using clean segmented controls.
4. **Communication & Copy**: One-click copy for email (`yashasbabunaik19@gmail.com`) and phone (`+91 63604 06415`), plus a direct contact form that composes clean `mailto` links.
5. **Push to GitHub & Vercel Helper**: A dedicated "Deploy & Push" modal/guide providing step-by-step terminal commands, `.gitignore` sanity checks, and Vercel connection steps.

#### Visual Identity & Theme
- **Color Distribution (60-30-10)**:
  - *60% Neutral Canvas*: Jet dark cyber background (`#070B14`) and secondary deep navy slate (`#0B1220`).
  - *30% Structural Surfaces*: Subtle translucent glass cards (`#101A2B`), hairline cyber borders (`rgba(120, 180, 220, 0.18)`), and muted slate body copy (`#9BAAC0`).
  - *10% Focal Accents*: Electric cyan (`#00E5FF`) and tech blue (`#4187FF`) used strictly for primary CTAs, 3D nodes, and active state highlights.
- **Typography**:
  - Headings: `Space Grotesk` / `Plus Jakarta Sans` with tight tracking.
  - Body: `Inter` (15px–16px, 1.6 line height).
  - Code & Telemetry: `JetBrains Mono` for tags, coursework, and technical specs.
- **Anti-Slop Discipline**:
  - Zero static pill badges; metadata rendered with clean typographic separators (`·`, `/`).
  - No fake version numbers or arbitrary percentage progress bars.
  - No broken external images; procedural fallback avatars and portrait display.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Three.js WebGL with Graceful Fallback**:
  - *Approach*: Implement custom Three.js `BufferGeometry` for the constellation sphere, nodes, and latitude lines directly in React via `useRef` lifecycle.
  - *Why*: Eliminates heavy wrapper bundle overhead, provides 60 FPS performance, and includes a CSS simulated defense node fallback if WebGL is disabled or blocked.
- **Decision 2: Zero-Dependency Contact Workflow**:
  - *Approach*: Direct mailto generation with pre-filled subject/body plus clipboard copy feedback buttons.
  - *Why*: Guarantees instant delivery without requiring third-party email backend services or exposed SMTP credentials.
- **Decision 3: Integrated Push & Deployment Terminal Guide**:
  - *Approach*: Embed an interactive "Push to GitHub" helper modal right in the portfolio with copy-to-clipboard terminal snippets for `git init`, `git remote add`, `git push`, and Vercel deployment.
  - *Why*: Directly solves the user's primary prompt ("how to push??") with zero ambiguity.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                               App.tsx                                  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                    ParticleBackground (Canvas)                   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                       Navbar (Top Bar Contract)                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  Hero Section                                                    │  │
│  │  ├── Headline & Bio                                              │  │
│  │  ├── 4 Action CTAs (Projects, About, GitHub, Resume)             │  │
│  │  └── DigitalGlobe (Three.js WebGL Mesh & Constellation)          │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────┐ ┌──────────────────┐ ┌────────────────────────┐  │
│  │   About Section  │ │ Education Section│ │  Skills (Filter Tabs)  │  │
│  └──────────────────┘ └──────────────────┘ └────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  Projects Section (Bento Grid + 3D Tilt + ProjectModal)          │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────┐ ┌──────────────────┐ ┌────────────────────────┐  │
│  │   Achievements   │ │  Contact Drawer  │ │  Git & Vercel Helper   │  │
│  └──────────────────┘ └──────────────────┘ └────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                       Footer (Copyright & Back to Top)           │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

#### Component & File Structure to Implement
- `src/types.ts`: TypeScript contracts for projects, skills, and milestones.
- `src/data/portfolioData.ts`: Verified data for Yashas B Naik (PulseGate, education, DSCE, CGPA 8.75, contacts).
- `src/components/DigitalGlobe.tsx`: Three.js interactive sphere with network nodes and mouse drag/tilt.
- `src/components/ParticleBackground.tsx`: Lightweight 2D canvas particle grid with `prefers-reduced-motion` check.
- `src/components/Navbar.tsx`: Fixed top bar with 3-zone contract, mobile drawer, and resume link.
- `src/components/Hero.tsx`: Dynamic typewriter headline, primary CTAs, and globe lockup.
- `src/components/About.tsx`: Personal background, interests in cybersecurity and AI, spoken languages.
- `src/components/Education.tsx`: DSCE B.E. CSE (Cybersecurity), 8.75 CGPA, coursework.
- `src/components/Skills.tsx`: Segmented category filter tabs and skill tag grid.
- `src/components/Projects.tsx`: PulseGate featured hero card with simulated live triage feed, plus secondary project cards.
- `src/components/ProjectModal.tsx`: Accessible dialog with ESC listener and backdrop blur.
- `src/components/Achievements.tsx`: SIH hackathon round qualification, Aegis CTF, and milestones.
- `src/components/Contact.tsx`: Email/phone clipboard copy cards and dispatcher form.
- `src/components/GitPushModal.tsx`: Step-by-step interactive terminal guide for pushing to GitHub and deploying to Vercel.
- `src/components/Footer.tsx`: Minimal footer with back-to-top button.
- `src/index.css`: Tailwind configuration with dark styling and custom cyber scrollbars.

---

### 5. Verification Plan
1. Install `three` and `@types/three` dependencies.
2. Compile the application via `compile_applet` and verify zero TypeScript or bundler errors.
3. Test all interactive controls: 3D globe mouse rotation, modal open/close via keyboard Escape and backdrop click, skill filtering, contact copying, and Git push guide.
