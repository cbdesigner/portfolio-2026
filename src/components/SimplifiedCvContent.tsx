"use client";

export default function SimplifiedCvContent() {
  return (
    <div
      data-simplified-cv-pdf
      style={{
        width: "210mm",
        height: "297mm",
        padding: "8mm 8mm 6mm 8mm",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "7.5pt",
        lineHeight: "1.28",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "4pt", paddingBottom: "2pt" }}>
        <h1
          style={{
            margin: "0 0 0.3pt 0",
            fontSize: "12pt",
            fontWeight: "700",
            color: "#000000",
            letterSpacing: "-0.5pt",
          }}
        >
          Carlos Baeza
        </h1>
        <div style={{ fontSize: "6.5pt", color: "#333333", lineHeight: "1.15" }}>
          <p style={{ margin: "0.3pt 0" }}>
            📧 carlos@snapflowlabs.com · 📞 +569 6685 2551 · 🌐 portfolio-2026-3cva.onrender.com · 🔗 linkedin.com/in/carlos-baeza-designer
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "flex", gap: "6mm", flex: 1, marginBottom: "2pt", overflow: "hidden" }}>
        {/* Left Column - Experience */}
        <section style={{ flex: "0 0 65%", minWidth: 0 }}>
          <h2
            style={{
              margin: "2.5pt 0 1.5pt 0",
              fontSize: "7.5pt",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.6pt",
              color: "#000000",
            }}
          >
            Experience
          </h2>

          {/* CEO Snapflow */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              CEO & Design System Architect • Snapflow Labs
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Oct 2023 – Present
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Founded AI-native company to solve design-engineering gap at infrastructure level. Building next-generation AI-ready design system infrastructure enabling enterprises to reduce UI development cycles by 40% and eliminate technical debt through deterministic, spec-driven workflows. Developing Figma-to-code integration connecting design assets in unified flow, transforming design into governed components ready for AI agents to generate production-ready interfaces at scale. Established $2M+ annual technical debt savings track record across partner organizations. Responsible for deterministic design-to-code automation, enterprise-scale design governance, multi-framework support (React, Angular, Vue, Web Components), and specification-driven design workflows.
            </p>
          </div>

          {/* Design System Architect ShipBob */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Design System Architect • ShipBob
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Jul 2025 – Mar 2026
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Led strategic conceptualization and execution of design system for ShipBob's global logistics ecosystem. Built robust Figma component library with documented components, significantly reducing friction between design and development teams. Designed and implemented 3-tier hierarchical token architecture (Primitive, Semantic, Component-specific) ensuring full maintainability and system scalability. Collaborated closely with engineering team to integrate design tokens into PrimeVue for Vue.js development, translating design tokens into injectable variables streamlining custom component development. Laid groundwork for multi-theme support including Dark Mode and accessibility standards.
            </p>
          </div>

          {/* Head of Product Design Siamese */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design & Design System Manager • Siamese Digital
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Oct 2023 – Present
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Leading strategy and execution of design projects across multiple client industries, balancing user experience with business goals. Managing 10+ cross-functional teams to create scalable design systems driving consistency and optimizing processes. Developed and maintained multi-branding design system in Figma with design tokens utilizing latest features for scalability, implemented across React, Angular, Vue.js, Web Components. Deployed interactive documentation in Storybook. Defined OKRs to help internal teams improve skills with delivered design systems. Acting as liaison between stakeholders and design teams ensuring seamless communication.
            </p>
          </div>

          {/* Head of Product Design Autonomus */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design • Autonomus (Backed by Güil Venture Studio)
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Oct 2023 – Jan 2024
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Led development of digital platform providing comprehensive transportation and companionship services for seniors, facilitating daily activities from medical appointments to social meetings. Organized collaborative workshops to define service blueprints and develop flowcharts ensuring clear understanding of service structure. Developed sitemaps for Autonomers app, back office, and public website creating coherent information architecture. Established robust design system in Figma ensuring consistency and scalability across all digital touchpoints. Built user flows in Figma to streamline navigation paths enhancing overall user experience. Facilitated daily meetings and Agile ceremonies ensuring team alignment and progress.
            </p>
          </div>

          {/* UX Manager Banco Ripley */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              UX Manager • Banco Ripley Chile & Peru
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              May 2021 – Sep 2023
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Led transformative UX initiatives implementing holistic strategy aligned with organizational goals ensuring exceptional user experiences. Championed innovation through human-centered approach driving creative design decisions. Optimized organizational structures and processes improving design workflow and team well-being. Managed 8+ UX professionals fostering team innovation and continuous improvement. Established design system in Figma with design tokens. Fostered strategic partnerships aligning design teams with business functions promoting design-driven culture across banking operations.
            </p>
          </div>

          {/* Lead UX Banco Ripley */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Lead UX • Banco Ripley Chile (Chek — 100% Digital Account)
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Aug 2019 – May 2021
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Spearheaded design process and managed cross-functional team for Banco Ripley's 100% digital account, Chek. Established robust design system in Figma ensuring consistency and scalability across digital platform. Managed business initiatives aligning UX goals with organizational objectives. Led diverse team of UX professionals including writers, researchers, and designers. Collaborated effectively with agile team implementing Scrum methodologies for efficient project delivery. Oversaw end-to-end design process from conceptualization to implementation. Conducted user research and usability testing informing design decisions. Implemented design thinking principles driving innovation in digital banking solutions.
            </p>
          </div>

          {/* Senior UX Designer Imille */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer • Imille (Enel Transformation Project)
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Feb 2018 – Jan 2019
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Led design and implementation of Enel's major digital transformation project across South America (Chile, Argentina, Peru, Colombia, Brazil), crucial for one of world's largest energy companies. Involved remote collaboration with Board of Directors in Rome. Defined comprehensive functionalities and user flows ensuring seamless digital experience across multiple countries and user bases. Cultivated and maintained strong relationships with Enel stakeholders in Latin America and Italy as well as local development teams and technology providers. Conducted in-depth metrics analysis using Google Analytics and Hotjar complemented by user research and prototyping informing design decisions. Developed design system for private area enhancing consistency and user experience across platforms.
            </p>
          </div>

          {/* Senior UX Designer Modyo */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer & Frontend Developer • Modyo
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Sep 2016 – Jan 2018
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Full-stack design and frontend development combining UX/UI design expertise with responsive implementation and component architecture development for digital products.
            </p>
          </div>

          {/* Falabella Financiero */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer Consultant & Frontend Developer • Falabella Financiero
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              2016 – 2017
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              UX design and frontend development consulting optimizing digital products and user experience for financial services division.
            </p>
          </div>

          {/* Insaciables Labs */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              UX Designer, Frontend Developer & Co-Founder • Insaciables Labs
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              2013 – 2015
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Founded digital agency providing UX/UI design, web development, and product strategy services for startup clients across multiple industries.
            </p>
          </div>

          {/* Multicaja */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              UX Designer & Frontend Developer • Multicaja S.A.
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              2012 – 2013
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Digital payment platform development combining UX design and frontend implementation optimizing user experience.
            </p>
          </div>

          {/* People&Chess */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Lead Frontend Developer • People&Chess
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              2009 – 2012
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Frontend development leadership managing web architecture, component development, and team coordination across projects.
            </p>
          </div>

          {/* La Familia */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Web & Multimedia Chief • La Familia
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              2009
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Web and multimedia operations management establishing digital strategy and technical infrastructure.
            </p>
          </div>

          {/* Grupo Eva */}
          <div>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Producer Graphic Designer • Grupo Eva
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              2008
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Graphic design and visual content production supporting branding and creative initiatives.
            </p>
          </div>
        </section>

        {/* Right Column */}
        <section style={{ flex: 1, overflow: "hidden" }}>
          <h2 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", color: "#000000" }}>
            Education
          </h2>
          <div style={{ fontSize: "7pt", color: "#333333", marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontWeight: "600" }}>Full Stack Development</p>
            <p style={{ margin: "0 0 1.2pt 0", fontSize: "6.5pt", color: "#666666" }}>Universidad del Desarrollo • 2024</p>
            <p style={{ margin: "0 0 0.2pt 0", fontWeight: "600" }}>Diseño Gráfico</p>
            <p style={{ margin: "0", fontSize: "6.5pt", color: "#666666" }}>Duoc UC • 2002 – 2004</p>
          </div>

          <h2 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", color: "#000000" }}>
            Certifications
          </h2>
          <ul style={{ margin: "0 0 2pt 0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.1" }}>
            <li style={{ marginBottom: "0.2pt" }}>SAFe 5 Product Owner (Scaled Agile)</li>
            <li style={{ marginBottom: "0.2pt" }}>Product Strategy (Product School)</li>
            <li style={{ marginBottom: "0.2pt" }}>Design Sprint Innovation (UDD)</li>
            <li>Google Tag Manager Fundamentals</li>
          </ul>

          <h2 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", color: "#000000" }}>
            Methodologies
          </h2>
          <p style={{ margin: "0 0 2pt 0", fontSize: "6.5pt", color: "#333333", lineHeight: "1.15" }}>
            Design Thinking, Lean, Agile, Design Sprint, UX Research, Atomic Design, Design Systems, Design Tokens, Double Diamond, Data-Driven Design, OKRs, DesignOps
          </p>

          <h2 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", color: "#000000" }}>
            Tools & Tech
          </h2>
          <div style={{ fontSize: "6.5pt", color: "#333333", lineHeight: "1.1", marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.2pt 0" }}><strong>Design:</strong> Figma, FigJam, Webflow, Maze, Typeform, Zeroheight</p>
            <p style={{ margin: "0 0 0.2pt 0" }}><strong>Dev:</strong> React, Vue.js, Angular, Storybook, Web Components, HTML5, SASS</p>
            <p style={{ margin: "0 0 0.2pt 0" }}><strong>Collab:</strong> Jira, Confluence, Slack, Miro, Teams</p>
            <p style={{ margin: "0" }}><strong>Other:</strong> Github, Google Analytics, Hotjar, ChatGPT, Claude</p>
          </div>

          <h2 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", color: "#000000" }}>
            Awards
          </h2>
          <ul style={{ margin: "0 0 2pt 0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.1" }}>
            <li style={{ marginBottom: "0.2pt" }}>Laboratoria Talent Fest (1st • 2021)</li>
            <li style={{ marginBottom: "0.2pt" }}>Young Forest Entrepreneur (1st • 2016)</li>
            <li>Developing Latin America (2013–2014)</li>
          </ul>

          <h2 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", color: "#000000" }}>
            Core Skills
          </h2>
          <ul style={{ margin: "0 0 2pt 0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.1" }}>
            <li style={{ marginBottom: "0.2pt" }}>Design Systems Architecture</li>
            <li style={{ marginBottom: "0.2pt" }}>Design Tokens & Variables</li>
            <li style={{ marginBottom: "0.2pt" }}>UX Strategy & Product Design</li>
            <li style={{ marginBottom: "0.2pt" }}>Team Leadership (27+ people)</li>
            <li style={{ marginBottom: "0.2pt" }}>Design Governance & Scalability</li>
            <li>User Research & Testing</li>
          </ul>

          <h2 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", color: "#000000" }}>
            Languages
          </h2>
          <p style={{ margin: "0", fontSize: "6.5pt", color: "#333333" }}>
            <strong>Spanish</strong> (Native) • <strong>English</strong> (Fluent)
          </p>
        </section>
      </div>

      {/* Footer */}
      <div style={{ paddingTop: "1.5pt", fontSize: "6pt", color: "#666666", textAlign: "center", marginTop: "auto" }}>
        <p style={{ margin: "0" }}>portfolio-2026-3cva.onrender.com • June 2026 • Full professional history and design systems expertise</p>
      </div>
    </div>
  );
}
