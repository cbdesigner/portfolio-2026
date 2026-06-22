"use client";

export default function SimplifiedCvContent() {
  return (
    <div
      data-simplified-cv-pdf
      style={{
        width: "210mm",
        height: "297mm",
        padding: "9mm 9mm 7mm 9mm",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "8pt",
        lineHeight: "1.3",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "5pt", paddingBottom: "3pt", borderBottom: "1pt solid #000000" }}>
        <h1
          style={{
            margin: "0 0 0.5pt 0",
            fontSize: "13pt",
            fontWeight: "700",
            color: "#000000",
            letterSpacing: "-0.5pt",
          }}
        >
          Carlos Baeza
        </h1>
        <div style={{ fontSize: "7pt", color: "#333333", lineHeight: "1.2" }}>
          <p style={{ margin: "0.5pt 0" }}>
            📧 carlos@snapflowlabs.com · 📞 +569 6685 2551 · 🌐 carlosbaeza.design · 🔗 linkedin.com/in/carlos-baeza-designer
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "flex", gap: "8mm", flex: 1, marginBottom: "3pt", overflow: "hidden" }}>
        {/* Left Column - Experience */}
        <section style={{ flex: 1, minWidth: 0 }}>
          <h2
            style={{
              margin: "3pt 0 2pt 0",
              fontSize: "8pt",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.7pt",
              borderBottom: "1pt solid #000000",
              paddingBottom: "1pt",
              color: "#000000",
            }}
          >
            Experience
          </h2>

          {/* CEO */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              CEO & Design System Architect
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Snapflow Labs • Oct 2023 – Present
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Founded AI-native company. Building deterministic design-to-code automation enabling 40% reduction in UI development cycles. Seamless Figma-to-code integration with multi-framework support (React, Angular, Vue, Web Components).
            </p>
          </div>

          {/* Design System Architect ShipBob */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Design System Architect
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              ShipBob (via Flylance) • Jul 2025 – Present
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Architected 3-tier token system. PrimeVue Vue.js component integration. Multi-theme & Dark Mode support. Enterprise-scale design governance for logistics platform.
            </p>
          </div>

          {/* Head of Product Design Siamese */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design & Design System Manager
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Siamese Digital • Oct 2023 – Present
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Leading 10+ cross-functional team. Multi-brand design system. React, Angular, Vue.js, Web Components. Storybook deployment. Define OKRs for team skill enhancement.
            </p>
          </div>

          {/* UX Manager Banco Ripley */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              UX Manager
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Banco Ripley Chile & Peru • May 2021 – Sep 2023
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Led transformative UX initiatives. Holistic strategy implementation. Managed 8+ UX professionals. Design system governance. 2.5x faster delivery velocity.
            </p>
          </div>

          {/* Lead UX Banco Ripley */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Lead UX
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Banco Ripley Chile • Aug 2019 – May 2021
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              100% digital account (Chek). Design system. Cross-functional team management. End-to-end design process. User research & usability testing.
            </p>
          </div>

          {/* Head of Product Design Autonomus */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Autonomus • Oct 2023 – Jan 2024
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Senior transportation & companionship platform. Service blueprints, sitemaps, information architecture, design system, user flows.
            </p>
          </div>

          {/* Senior UX Designer Imille */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Imille (Enel) • Feb 2018 – Jan 2019
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Digital transformation across 5 Latin American countries. Board-level stakeholder management (Rome). Design system, metrics analysis, user flows.
            </p>
          </div>

          {/* Senior UX Designer Modyo */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer & Frontend Developer
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Modyo • Sep 2016 – Jan 2018
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Full-stack design & frontend development. UX/UI design, responsive implementation, component architecture.
            </p>
          </div>

          {/* Falabella Financiero */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer Consultant
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Falabella Financiero • 2016 – 2017
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              UX design & frontend development consulting. Digital products, user experience optimization.
            </p>
          </div>

          {/* Insaciables Labs */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              UX Designer, Frontend Developer & Co-Founder
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Insaciables Labs • 2013 – 2015
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Founded digital agency. UX/UI design, web development, product strategy for startup clients.
            </p>
          </div>

          {/* Multicaja */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              UX Designer & Frontend Developer
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Multicaja S.A. • 2012 – 2013
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Digital payment platform. UX design, frontend implementation, user experience.
            </p>
          </div>

          {/* People&Chess */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Lead Frontend Developer
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              People&Chess • 2009 – 2012
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Frontend development leadership. Web architecture, component development, team coordination.
            </p>
          </div>

          {/* La Familia */}
          <div style={{ marginBottom: "2pt" }}>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Web & Multimedia Chief
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              La Familia • 2009
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Web & multimedia operations management, digital strategy.
            </p>
          </div>

          {/* Grupo Eva */}
          <div>
            <p style={{ margin: "0 0 0.3pt 0", fontSize: "8pt", fontWeight: "700", color: "#000000" }}>
              Producer Graphic Designer
            </p>
            <p style={{ margin: "0 0 1pt 0", fontSize: "7pt", color: "#555555", fontWeight: "600" }}>
              Grupo Eva • 2008
            </p>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Graphic design, visual content production, branding.
            </p>
          </div>
        </section>

        {/* Right Column */}
        <section style={{ flex: "0 0 42mm", overflow: "hidden" }}>
          {/* Education */}
          <div style={{ marginBottom: "2.5pt" }}>
            <h3 style={{ margin: "3pt 0 1.5pt 0", fontSize: "8pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7pt", borderBottom: "1pt solid #000000", paddingBottom: "0.5pt", color: "#000000" }}>
              Education
            </h3>
            <div style={{ fontSize: "7.5pt", color: "#333333" }}>
              <p style={{ margin: "0 0 0.3pt 0", fontWeight: "600" }}>Full Stack Development</p>
              <p style={{ margin: "0 0 1.5pt 0", fontSize: "7pt", color: "#666666" }}>Universidad del Desarrollo • 2024</p>
              <p style={{ margin: "0 0 0.3pt 0", fontWeight: "600" }}>Diseño Gráfico</p>
              <p style={{ margin: "0", fontSize: "7pt", color: "#666666" }}>Duoc UC • 2002 – 2004</p>
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: "2.5pt" }}>
            <h3 style={{ margin: "3pt 0 1.5pt 0", fontSize: "8pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7pt", borderBottom: "1pt solid #000000", paddingBottom: "0.5pt", color: "#000000" }}>
              Certifications
            </h3>
            <ul style={{ margin: "0", paddingLeft: "7pt", fontSize: "7pt", color: "#333333", lineHeight: "1.15" }}>
              <li style={{ marginBottom: "0.3pt" }}>SAFe 5 Product Owner (Scaled Agile)</li>
              <li style={{ marginBottom: "0.3pt" }}>Product Strategy (Product School)</li>
              <li style={{ marginBottom: "0.3pt" }}>Design Sprint Innovation (UDD)</li>
              <li>Google Tag Manager Fundamentals</li>
            </ul>
          </div>

          {/* Methodologies */}
          <div style={{ marginBottom: "2.5pt" }}>
            <h3 style={{ margin: "3pt 0 1.5pt 0", fontSize: "8pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7pt", borderBottom: "1pt solid #000000", paddingBottom: "0.5pt", color: "#000000" }}>
              Methodologies
            </h3>
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.2" }}>
              Design Thinking, Lean, Agile, Design Sprint, UX Research, Atomic Design, Design Systems, Design Tokens, Double Diamond, Data-Driven Design, OKRs, DesignOps
            </p>
          </div>

          {/* Tools */}
          <div style={{ marginBottom: "2.5pt" }}>
            <h3 style={{ margin: "3pt 0 1.5pt 0", fontSize: "8pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7pt", borderBottom: "1pt solid #000000", paddingBottom: "0.5pt", color: "#000000" }}>
              Tools & Tech
            </h3>
            <div style={{ fontSize: "7pt", color: "#333333", lineHeight: "1.15" }}>
              <p style={{ margin: "0 0 0.3pt 0" }}><strong>Design:</strong> Figma, FigJam, Webflow, Maze, Typeform, Zeroheight</p>
              <p style={{ margin: "0 0 0.3pt 0" }}><strong>Dev:</strong> React, Vue.js, Angular, Storybook, Web Components, HTML5, SASS</p>
              <p style={{ margin: "0 0 0.3pt 0" }}><strong>Collab:</strong> Jira, Confluence, Slack, Miro, Teams</p>
              <p style={{ margin: "0" }}><strong>Other:</strong> Github, Google Analytics, Hotjar, ChatGPT, Claude</p>
            </div>
          </div>

          {/* Awards */}
          <div style={{ marginBottom: "2.5pt" }}>
            <h3 style={{ margin: "3pt 0 1.5pt 0", fontSize: "8pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7pt", borderBottom: "1pt solid #000000", paddingBottom: "0.5pt", color: "#000000" }}>
              Awards
            </h3>
            <ul style={{ margin: "0", paddingLeft: "7pt", fontSize: "7pt", color: "#333333", lineHeight: "1.15" }}>
              <li style={{ marginBottom: "0.3pt" }}>Laboratoria Talent Fest (1st • 2021)</li>
              <li style={{ marginBottom: "0.3pt" }}>Young Forest Entrepreneur (1st • 2016)</li>
              <li>Developing Latin America (2013–2014)</li>
            </ul>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2.5pt" }}>
            <h3 style={{ margin: "3pt 0 1.5pt 0", fontSize: "8pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7pt", borderBottom: "1pt solid #000000", paddingBottom: "0.5pt", color: "#000000" }}>
              Core Skills
            </h3>
            <ul style={{ margin: "0", paddingLeft: "7pt", fontSize: "7pt", color: "#333333", lineHeight: "1.15" }}>
              <li style={{ marginBottom: "0.3pt" }}>Design Systems Architecture</li>
              <li style={{ marginBottom: "0.3pt" }}>Design Tokens & Variables</li>
              <li style={{ marginBottom: "0.3pt" }}>UX Strategy & Product Design</li>
              <li style={{ marginBottom: "0.3pt" }}>Team Leadership (27+ people)</li>
              <li style={{ marginBottom: "0.3pt" }}>Design Governance & Scalability</li>
              <li>User Research & Testing</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 style={{ margin: "3pt 0 1.5pt 0", fontSize: "8pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.7pt", borderBottom: "1pt solid #000000", paddingBottom: "0.5pt", color: "#000000" }}>
              Languages
            </h3>
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333" }}>
              <strong>Spanish</strong> (Native) • <strong>English</strong> (Fluent)
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1pt solid #000000", paddingTop: "1.5pt", fontSize: "6.5pt", color: "#666666", textAlign: "center" }}>
        <p style={{ margin: "0" }}>carlosbaeza.design • June 2026</p>
      </div>
    </div>
  );
}
