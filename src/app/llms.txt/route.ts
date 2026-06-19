export function GET() {
  const content = `# Carlos Baeza — Design Systems Architect

> Design Systems Architect building AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale. 10+ years leading cross-functional teams at Banco Ripley, Enel, Bupa and more.

## About
Carlos Baeza is a Design Systems Architect, Head of Product Design, and UX Manager based in Santiago, Chile. He specializes in enterprise-grade design systems, token architecture, multi-brand theming, and AI-assisted design-to-code workflows. With over 10 years of experience, he has led cross-functional teams of up to 27 specialists across banking, energy, healthcare, and mobility industries.

## Core Expertise
- Design Systems Architecture (Token-based, Multi-brand, W3C Design Tokens)
- AI-Ready Agentic Design Infrastructure
- Figma (Variables, Design Tokens, Auto Layout, Code Connect)
- Storybook, React, Component Libraries
- UX Strategy & Design Team Leadership
- Design Governance, OKRs, and Adoption Metrics
- Design-to-Code Pipelines and Deterministic Workflows
- Double Diamond Design Process

## Case Studies — Projects

### Banco Ripley — Digital Banking Transformation
URL: https://carlosbaeza.design/banco-ripley
Full redesign of the digital banking experience at Banco Ripley. Grew from UX Lead at Chek to Corporate UX Manager for Chile and Peru, building a UX Center of Excellence with 27 specialists. Improved retention, self-service rates, and cross-platform consistency across PWA, public website, insurance, backoffice, and customer service kiosks.

### Autonomus — Mobility Platform for Seniors
URL: https://carlosbaeza.design/autonomus
Product design for a startup platform connecting seniors to transportation and companionship services. Built a multibranding design system using Figma Variables for the backoffice and an Uber-like app tailored for elderly users and their caregivers.

### Enel One Hub — Unified Design System
URL: https://carlosbaeza.design/enel-one-hub
Unified design system for Enel's digital products across Latin America. Conducted stakeholder research across Chile, Peru, Argentina, and Colombia to build a consistent design language for the energy sector.

### Bupa Design System — Healthcare Enterprise
URL: https://carlosbaeza.design/bupa-design-system
Enterprise-grade tokenized design system for Bupa healthcare. Serving 5 digital products with 50+ components, 1000+ design tokens, and Light/Dark theme support. Balancing clinical precision with human warmth.

### Design System Architect
URL: https://carlosbaeza.design/design-system-architect
AI-ready design infrastructure built for scale, governance, and deterministic design-to-code workflows. Token architecture, component systems, multi-brand theming, and MCP integration for AI-assisted design.

## Case Studies — Methodologies

### My Design Process
URL: https://carlosbaeza.design/my-design-process
Structured UX design process based on the Double Diamond framework: Discover, Define, Develop, and Deliver. Applied across enterprise and startup product environments.

### Design System Methodology
URL: https://carlosbaeza.design/ds-methodology
Scalable methodology for building and governing design systems across large organizations. Covers business value strategy, architecture planning, and AI-assisted design system workflows.

### Design Systems Services
URL: https://carlosbaeza.design/ds-services
Integrated framework of Governance, Architecture, and Metrics to transform how design systems scale and deliver measurable business value across organizations.

### UX Strategy
URL: https://carlosbaeza.design/ux-strategy
Strategic UX framework across 5 key areas: Strategy, Team, Operations, Experience, and Enterprise. Framework for building and leading high-performing design teams at organizational scale.

## Professional Profile
URL: https://carlosbaeza.design/profile
- Full name: Carlos Baeza
- Current role: Design Systems Architect (CEO & Design System Architect at Snapflow Labs, an AI-Native company)
- Headline: Design Systems Architect, Head of Product Design, and UX Manager
- Location: Santiago, Región Metropolitana, Chile (works remotely with global teams)
- Languages: Spanish (native), English (professional)
- Experience: 10+ years across banking, energy, healthcare, logistics, fintech, and mobility. Led cross-functional teams of up to 27 specialists.
- Notable organizations: Snapflow Labs, Siamese Digital (Head of Product Design & Design System Manager), Banco Ripley (UX Manager, Chile & Peru), Autonomus, Imille (Enel project), Modyo, Falabella Financiero, Multicaja.
- Education: Universidad del Desarrollo (Full Stack Development, 2024); Duoc UC (Diseño Gráfico, 2002–2004); Escuela de Creativos Brother (2012).
- Certifications: SAFe 5 Product Owner / Product Manager (Scaled Agile); Product Strategy (Product School); Google Tag Manager Fundamentals (Google); Design Sprint Innovation, React Web Application Ninja and more (Universidad del Desarrollo).
- Core skills: Information Architecture, Wireframing & Prototyping, User Research, Design System Architecture, Product Design.
- Impact: 40% reduction in design-to-implementation cycles and $2M+ in annual technical debt savings across partner organizations.

## Pages
- Profile: https://carlosbaeza.design/profile
- Contact: https://carlosbaeza.design/contact
- Interview: https://carlosbaeza.design/interview

## Contact
- Website: https://carlosbaeza.design
- LinkedIn: https://www.linkedin.com/in/carlos-baeza-design/
- Twitter: https://twitter.com/cbdesigner
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
