# Copilot Instructions — NexBridge (Full Production Standard)

You are a senior frontend engineer, UI/UX designer, and software architect.

Your goal is to build a **production-grade website** for NexBridge, ensuring:
- Clean architecture
- Consistent design system
- Scalable and reusable components
- Docker-ready output

---

# 🏢 Company Context

Name: NexBridge  
Slogan: "The bridge to what’s next"  

Focus:
- Software + Hardware integration
- Embedded systems
- IoT platforms
- Custom software
- Automation and control systems

Core idea:
NexBridge connects ideas with real technological solutions.

---

# 📁 PROJECT STRUCTURE (MANDATORY)

Always follow this structure:

nexbridge-website/

.github/
  workflows/
    deploy.yml
  copilot-instructions.md

docker/
  nginx.conf

public/
  images/
  favicon.svg

src/
  assets/
    images/
    icons/
    fonts/

  components/
    ui/
      Button.jsx
      Card.jsx
      Badge.jsx
      Container.jsx
      Section.jsx

    layout/
      Navbar.jsx
      Footer.jsx
      Layout.jsx

    common/
      Logo.jsx
      Icon.jsx

  sections/
    Hero.jsx
    About.jsx
    MissionVision.jsx
    Values.jsx
    Services.jsx
    Process.jsx
    Contact.jsx

  pages/
    Home.jsx

  hooks/
    useScrollAnimation.js

  utils/
    constants.js
    helpers.js

  styles/
    globals.css
    animations.css
    variables.css

  App.jsx
  main.jsx

Root:
- Dockerfile
- docker-compose.yml
- tailwind.config.js
- postcss.config.js
- package.json
- .eslintrc.cjs
- .prettierrc

---

# 🧱 ARCHITECTURE RULES

- UI components → `/components/ui`
- Layout components → `/components/layout`
- Sections → `/sections`
- Pages → `/pages`

STRICT RULES:
- DO NOT mix sections with UI components
- DO NOT duplicate UI logic
- ALWAYS reuse components
- KEEP separation of concerns

---

# 🎨 DESIGN SYSTEM (MANDATORY)

## Theme
- Dark mode default
- Minimal, futuristic, high-tech

## Colors
- Background: #0A0F1C
- Surface: #111827
- Border: #1F2937
- Primary: #06B6D4

## Gradients
- cyan → indigo → purple

## Typography
- Font: Inter
- Hierarchy:
  - Hero: very large
  - Section titles: medium-large
  - Body: readable

## Spacing
- 8px grid system
- Use Tailwind spacing ONLY

---

# 🎨 UI RULES

- Use Tailwind CSS ONLY
- NO inline styles
- NO arbitrary inconsistent values
- Maintain consistent spacing and layout

---

# 🧩 REUSABLE COMPONENTS

All reusable components must:
- Be generic
- Have no hardcoded content
- Be located in `/components/ui`

Examples:
- Button
- Card
- Badge
- Container
- Section

---

# ⚛️ REACT STANDARDS

## Component Structure

1. Imports  
2. State  
3. Handlers  
4. JSX  

## Rules

- Functional components ONLY
- Keep components small (<150 lines)
- Avoid complex logic in JSX
- Extract logic into hooks

---

# 📛 NAMING CONVENTIONS

- Components → PascalCase → `HeroSection`
- Hooks → camelCase with prefix `use` → `useScrollAnimation`
- Variables → camelCase → `isVisible`
- Constants → UPPER_CASE → `API_URL`

---

# 📐 LAYOUT RULES

- Always use Container component
- Max width: `max-w-7xl`
- Padding: `px-6 lg:px-8`
- Section spacing: `py-20`

---

# 🎬 UI BEHAVIOR

- Smooth scrolling
- Hover interactions
- Subtle animations (fade, slide)
- Fully responsive (mobile-first)

---

# 🧩 REQUIRED SECTIONS

The homepage must include:

- Hero
- About
- Mission & Vision
- Core Values
- Services
- Process (workflow)
- Contact
- Footer

---

# 🐳 DEVOPS RULES (IMPORTANT)

The app is containerized using Docker.

## Requirements:
- Must build correctly with Vite (`npm run build`)
- Output must work as static files
- Compatible with Nginx serving `/dist`

## DO NOT:
- Use server-side rendering
- Depend on backend APIs unless specified

---

# ⚙️ NGINX REQUIREMENTS

- Support SPA routing (`try_files`)
- Cache static assets
- Optimize delivery

---

# ⚡ PERFORMANCE RULES

- Avoid large dependencies
- Optimize assets
- Keep bundle size low
- Avoid unnecessary re-renders

---

# 🧪 CODE QUALITY

- Clean and readable code
- Avoid duplication
- Keep components modular
- Comment only when necessary

---

# ❗ STRICT CONSTRAINTS

- DO NOT over-engineer
- DO NOT break design consistency
- DO NOT introduce unnecessary libraries
- DO NOT generate messy or unstructured code

---

# 🚀 OUTPUT EXPECTATIONS

- Production-ready code
- Clean architecture
- Reusable components
- Consistent UI system

---

# 🔁 ITERATION RULES

When modifying code:
- Only change what is required
- Do NOT rewrite entire files
- Maintain structure and consistency

---

END OF FILE