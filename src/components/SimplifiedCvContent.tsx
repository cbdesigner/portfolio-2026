"use client";

export default function SimplifiedCvContent() {
  return (
    <div
      data-simplified-cv-pdf
      style={{
        width: "210mm",
        height: "297mm",
        padding: "10mm 10mm 8mm 10mm",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "8.5pt",
        lineHeight: "1.35",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "6pt", paddingBottom: "4pt", borderBottom: "1pt solid #000000" }}>
        <h1
          style={{
            margin: "0 0 1pt 0",
            fontSize: "14pt",
            fontWeight: "700",
            color: "#000000",
            letterSpacing: "-0.5pt",
          }}
        >
          Carlos Baeza
        </h1>
        <div style={{ fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
          <p style={{ margin: "1pt 0" }}>
            📧 carlos@snapflowlabs.com · 📞 +569 6685 2551 · 🌐 carlosbaeza.design · 🔗 linkedin.com/in/carlos-baeza-designer
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "flex", gap: "10mm", flex: 1, marginBottom: "4pt", overflow: "hidden" }}>
        {/* Left Column - Experience */}
        <section style={{ flex: 1, minWidth: 0 }}>
          <h2
            style={{
              margin: "4pt 0 2.5pt 0",
              fontSize: "8.5pt",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.8pt",
              borderBottom: "1pt solid #000000",
              paddingBottom: "1.5pt",
              color: "#000000",
            }}
          >
            Experience
          </h2>

          {/* Jobs */}
          <div style={{ marginBottom: "3pt" }}>
            <p style={{ margin: "0 0 0.5pt 0", fontSize: "8.5pt", fontWeight: "700", color: "#000000" }}>
              CEO & Design System Architect • Snapflow Labs (Oct 2023 – Present)
            </p>
            <p style={{ margin: "0 0 1.5pt 0", fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              AI-ready design system infrastructure. 40% reduction in design-to-implementation cycles. Figma-to-code integration, multi-framework support.
            </p>
          </div>

          <div style={{ marginBottom: "3pt" }}>
            <p style={{ margin: "0 0 0.5pt 0", fontSize: "8.5pt", fontWeight: "700", color: "#000000" }}>
              Design System Architect • ShipBob/Flylance (Jul 2025 – Present)
            </p>
            <p style={{ margin: "0 0 1.5pt 0", fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              3-tier token architecture. PrimeVue integration for Vue.js. Multi-theme & Dark Mode support for fulfillment platform.
            </p>
          </div>

          <div style={{ marginBottom: "3pt" }}>
            <p style={{ margin: "0 0 0.5pt 0", fontSize: "8.5pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design & Design System Manager • Siamese Digital (Oct 2023 – Present)
            </p>
            <p style={{ margin: "0 0 1.5pt 0", fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              Leading 10+ team. Multi-brand design system in Figma. React, Angular, Vue.js, Web Components implementation. Storybook documentation.
            </p>
          </div>

          <div style={{ marginBottom: "3pt" }}>
            <p style={{ margin: "0 0 0.5pt 0", fontSize: "8.5pt", fontWeight: "700", color: "#000000" }}>
              UX Manager • Banco Ripley Chile & Peru (May 2021 – Sep 2023)
            </p>
            <p style={{ margin: "0 0 1.5pt 0", fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              Holistic UX strategy. Managed 8+ UX professionals. Design system, user research. 2.5x faster delivery velocity.
            </p>
          </div>

          <div style={{ marginBottom: "3pt" }}>
            <p style={{ margin: "0 0 0.5pt 0", fontSize: "8.5pt", fontWeight: "700", color: "#000000" }}>
              Lead UX • Banco Ripley (Aug 2019 – Oct 2021)
            </p>
            <p style={{ margin: "0 0 1.5pt 0", fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              Design system for Chek (100% digital account). Managed cross-functional team. End-to-end design process.
            </p>
          </div>

          <div style={{ marginBottom: "3pt" }}>
            <p style={{ margin: "0 0 0.5pt 0", fontSize: "8.5pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design • Autonomus (Oct 2023 – Jan 2024)
            </p>
            <p style={{ margin: "0 0 1.5pt 0", fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              Platform for seniors' transportation & companionship. Service blueprints, sitemaps, information architecture.
            </p>
          </div>

          <div>
            <p style={{ margin: "0 0 0.5pt 0", fontSize: "8.5pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer • Imille (Enel) (Feb 2018 – Jan 2019)
            </p>
            <p style={{ margin: "0", fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              Digital transformation across 5 Latin American countries. Stakeholder management, metrics analysis, design system.
            </p>
          </div>
        </section>

        {/* Right Column */}
        <section style={{ flex: "0 0 45mm", overflow: "hidden" }}>
          {/* Education */}
          <div style={{ marginBottom: "3pt" }}>
            <h3 style={{ margin: "4pt 0 2pt 0", fontSize: "8.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8pt", borderBottom: "1pt solid #000000", paddingBottom: "1pt", color: "#000000" }}>
              Education
            </h3>
            <div style={{ fontSize: "8pt", color: "#333333" }}>
              <p style={{ margin: "0 0 0.5pt 0", fontWeight: "600" }}>Full Stack Development</p>
              <p style={{ margin: "0 0 2pt 0", fontSize: "7.5pt", color: "#666666" }}>Universidad del Desarrollo • 2024</p>
              <p style={{ margin: "0 0 0.5pt 0", fontWeight: "600" }}>Diseño Gráfico</p>
              <p style={{ margin: "0", fontSize: "7.5pt", color: "#666666" }}>Duoc UC • 2002 – 2004</p>
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: "3pt" }}>
            <h3 style={{ margin: "4pt 0 2pt 0", fontSize: "8.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8pt", borderBottom: "1pt solid #000000", paddingBottom: "1pt", color: "#000000" }}>
              Certifications
            </h3>
            <ul style={{ margin: "0", paddingLeft: "8pt", fontSize: "7.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li style={{ marginBottom: "0.5pt" }}>SAFe 5 Product Owner</li>
              <li style={{ marginBottom: "0.5pt" }}>Product Strategy (Product School)</li>
              <li style={{ marginBottom: "0.5pt" }}>Design Sprint Innovation</li>
              <li>Google Tag Manager Fundamentals</li>
            </ul>
          </div>

          {/* Methodologies */}
          <div style={{ marginBottom: "3pt" }}>
            <h3 style={{ margin: "4pt 0 2pt 0", fontSize: "8.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8pt", borderBottom: "1pt solid #000000", paddingBottom: "1pt", color: "#000000" }}>
              Methodologies
            </h3>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333", lineHeight: "1.25" }}>
              Design Thinking, Lean, Agile, Design Sprint, UX Research, Atomic Design, Design Systems, Design Tokens, Double Diamond, Data-Driven Design
            </p>
          </div>

          {/* Tools */}
          <div style={{ marginBottom: "3pt" }}>
            <h3 style={{ margin: "4pt 0 2pt 0", fontSize: "8.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8pt", borderBottom: "1pt solid #000000", paddingBottom: "1pt", color: "#000000" }}>
              Tools & Tech
            </h3>
            <div style={{ fontSize: "7.5pt", color: "#333333", lineHeight: "1.2" }}>
              <p style={{ margin: "0 0 0.5pt 0" }}><strong>Design:</strong> Figma, FigJam, Webflow, Maze, Typeform</p>
              <p style={{ margin: "0 0 0.5pt 0" }}><strong>Dev:</strong> React, Vue.js, Angular, Storybook, Web Components</p>
              <p style={{ margin: "0 0 0.5pt 0" }}><strong>Collab:</strong> Jira, Confluence, Slack, Miro</p>
              <p style={{ margin: "0" }}><strong>Other:</strong> HTML5, SASS, Github, Learning JavaScript & React</p>
            </div>
          </div>

          {/* Awards */}
          <div style={{ marginBottom: "3pt" }}>
            <h3 style={{ margin: "4pt 0 2pt 0", fontSize: "8.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8pt", borderBottom: "1pt solid #000000", paddingBottom: "1pt", color: "#000000" }}>
              Awards
            </h3>
            <ul style={{ margin: "0", paddingLeft: "8pt", fontSize: "7.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li style={{ marginBottom: "0.5pt" }}>Laboratoria Talent Fest (1st place • 2021)</li>
              <li style={{ marginBottom: "0.5pt" }}>Young Forest Entrepreneur (1st place • 2016)</li>
              <li>Developing Latin America (2013 – 2014)</li>
            </ul>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "3pt" }}>
            <h3 style={{ margin: "4pt 0 2pt 0", fontSize: "8.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8pt", borderBottom: "1pt solid #000000", paddingBottom: "1pt", color: "#000000" }}>
              Core Skills
            </h3>
            <ul style={{ margin: "0", paddingLeft: "8pt", fontSize: "7.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li style={{ marginBottom: "0.5pt" }}>Design Systems Architecture</li>
              <li style={{ marginBottom: "0.5pt" }}>Design Tokens & Variables</li>
              <li style={{ marginBottom: "0.5pt" }}>UX Strategy & Product Design</li>
              <li style={{ marginBottom: "0.5pt" }}>Team Leadership (27+ people)</li>
              <li style={{ marginBottom: "0.5pt" }}>Design Governance</li>
              <li>User Research & Testing</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 style={{ margin: "4pt 0 2pt 0", fontSize: "8.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8pt", borderBottom: "1pt solid #000000", paddingBottom: "1pt", color: "#000000" }}>
              Languages
            </h3>
            <p style={{ margin: "0", fontSize: "7.5pt", color: "#333333" }}>
              <strong>Spanish</strong> (Native) • <strong>English</strong> (Fluent)
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1pt solid #000000", paddingTop: "2pt", fontSize: "7pt", color: "#666666", textAlign: "center" }}>
        <p style={{ margin: "0" }}>carlosbaeza.design • June 2026</p>
      </div>
    </div>
  );
}
