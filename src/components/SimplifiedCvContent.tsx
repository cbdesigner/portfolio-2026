"use client";

export default function SimplifiedCvContent() {
  return (
    <div
      data-simplified-cv-pdf
      style={{
        width: "210mm",
        height: "297mm",
        padding: "12mm 12mm 10mm 12mm",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "9.5pt",
        lineHeight: "1.4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "8pt", paddingBottom: "6pt", borderBottom: "1pt solid #000000" }}>
        <h1
          style={{
            margin: "0 0 2pt 0",
            fontSize: "16pt",
            fontWeight: "700",
            color: "#000000",
            letterSpacing: "-0.5pt",
          }}
        >
          Carlos Baeza
        </h1>
        <div style={{ fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
          <p style={{ margin: "2pt 0" }}>
            📧 carlos@snapflowlabs.com · 📞 +569 6685 2551 · 🌐 carlosbaeza.design · 🔗 linkedin.com/in/carlos-baeza-design
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "flex", gap: "12mm", flex: 1, marginBottom: "6pt" }}>
        {/* Left Column - Experience */}
        <section style={{ flex: 1 }}>
          <h2
            style={{
              margin: "6pt 0 4pt 0",
              fontSize: "9.5pt",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1pt",
              borderBottom: "1pt solid #000000",
              paddingBottom: "2pt",
              color: "#000000",
            }}
          >
            Experience
          </h2>

          {/* Job 1 */}
          <div style={{ marginBottom: "5pt" }}>
            <p style={{ margin: "0 0 1pt 0", fontSize: "9.5pt", fontWeight: "700", color: "#000000" }}>
              CEO & Design System Architect
            </p>
            <p style={{ margin: "0 0 2pt 0", fontSize: "8pt", color: "#555555", fontWeight: "600" }}>
              Snapflow Labs • Oct 2023 – Present
            </p>
            <p style={{ margin: "0 0 2pt 0", fontSize: "9pt", color: "#333333", lineHeight: "1.35" }}>
              Leading development of AI-ready design system infrastructure enabling enterprises to reduce UI development cycles by 40% through deterministic, spec-driven workflows. Building seamless Figma-to-code integration with multi-framework support (React, Angular, Vue, Web Components).
            </p>
          </div>

          {/* Job 2 */}
          <div style={{ marginBottom: "5pt" }}>
            <p style={{ margin: "0 0 1pt 0", fontSize: "9.5pt", fontWeight: "700", color: "#000000" }}>
              Design System Architect
            </p>
            <p style={{ margin: "0 0 2pt 0", fontSize: "8pt", color: "#555555", fontWeight: "600" }}>
              ShipBob (via Flylance) • Jul 2025 – Present
            </p>
            <p style={{ margin: "0 0 2pt 0", fontSize: "9pt", color: "#333333", lineHeight: "1.35" }}>
              Architected comprehensive 3-tier token system (Primitive, Semantic, Component-specific). Integrated design tokens into PrimeVue for Vue.js development. Implemented multi-theme support enabling Dark Mode and accessibility standards across fulfillment platform.
            </p>
          </div>

          {/* Job 3 */}
          <div style={{ marginBottom: "5pt" }}>
            <p style={{ margin: "0 0 1pt 0", fontSize: "9.5pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design & Design System Manager
            </p>
            <p style={{ margin: "0 0 2pt 0", fontSize: "8pt", color: "#555555", fontWeight: "600" }}>
              Siamese Digital • Oct 2023 – Present
            </p>
            <p style={{ margin: "0 0 2pt 0", fontSize: "9pt", color: "#333333", lineHeight: "1.35" }}>
              Leading cross-functional team of 10+ designers and engineers. Develop multi-brand design system in Figma with implementation across React, Angular, Vue.js, and Web Components. Deploy interactive documentation in Storybook. Define OKRs to enhance team capabilities in design systems adoption.
            </p>
          </div>

          {/* Job 4 */}
          <div style={{ marginBottom: "5pt" }}>
            <p style={{ margin: "0 0 1pt 0", fontSize: "9.5pt", fontWeight: "700", color: "#000000" }}>
              UX Manager
            </p>
            <p style={{ margin: "0 0 2pt 0", fontSize: "8pt", color: "#555555", fontWeight: "600" }}>
              Banco Ripley Chile & Peru • May 2021 – Sep 2023
            </p>
            <p style={{ margin: "0", fontSize: "9pt", color: "#333333", lineHeight: "1.35" }}>
              Led transformative UX initiatives implementing holistic strategy across banking products. Managed team of 8+ UX professionals. Established design system in Figma, conducted user research, and fostered culture of design excellence driving 2.5x faster delivery velocity.
            </p>
          </div>
        </section>

        {/* Right Column - Education, Certifications, etc */}
        <section style={{ flex: "0 0 auto", width: "48mm" }}>
          {/* Education */}
          <div style={{ marginBottom: "5pt" }}>
            <h3
              style={{
                margin: "6pt 0 3pt 0",
                fontSize: "9.5pt",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1pt",
                borderBottom: "1pt solid #000000",
                paddingBottom: "2pt",
                color: "#000000",
              }}
            >
              Education
            </h3>
            <div style={{ fontSize: "8.5pt", color: "#333333" }}>
              <p style={{ margin: "0 0 1.5pt 0", fontWeight: "600" }}>
                Full Stack Development
              </p>
              <p style={{ margin: "0 0 3pt 0", fontSize: "8pt", color: "#666666" }}>
                Universidad del Desarrollo • 2024
              </p>
              <p style={{ margin: "0 0 1.5pt 0", fontWeight: "600" }}>
                Diseño Gráfico
              </p>
              <p style={{ margin: "0", fontSize: "8pt", color: "#666666" }}>
                Duoc UC • 2002 – 2004
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: "5pt" }}>
            <h3
              style={{
                margin: "6pt 0 3pt 0",
                fontSize: "9.5pt",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1pt",
                borderBottom: "1pt solid #000000",
                paddingBottom: "2pt",
                color: "#000000",
              }}
            >
              Certifications
            </h3>
            <ul style={{ margin: "0", paddingLeft: "10pt", fontSize: "8.5pt", color: "#333333" }}>
              <li style={{ marginBottom: "1pt" }}>SAFe 5 Product Owner (Scaled Agile, Inc.)</li>
              <li style={{ marginBottom: "1pt" }}>Product Strategy (Product School)</li>
              <li style={{ marginBottom: "1pt" }}>Design Sprint Innovation (UDD)</li>
              <li>Google Tag Manager Fundamentals (Google)</li>
            </ul>
          </div>

          {/* Tools */}
          <div style={{ marginBottom: "5pt" }}>
            <h3
              style={{
                margin: "6pt 0 3pt 0",
                fontSize: "9.5pt",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1pt",
                borderBottom: "1pt solid #000000",
                paddingBottom: "2pt",
                color: "#000000",
              }}
            >
              Tools
            </h3>
            <div style={{ fontSize: "8pt", color: "#333333", lineHeight: "1.3" }}>
              <p style={{ margin: "0 0 1.5pt 0" }}>
                <strong>Design:</strong> Figma, FigJam, Webflow, Maze
              </p>
              <p style={{ margin: "0 0 1.5pt 0" }}>
                <strong>Dev:</strong> React, Vue.js, Angular, Storybook
              </p>
              <p style={{ margin: "0 0 1.5pt 0" }}>
                <strong>Collab:</strong> Jira, Confluence, Slack, Miro
              </p>
              <p style={{ margin: "0" }}>
                <strong>Analytics:</strong> GA, Hotjar, Smartlook
              </p>
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "5pt" }}>
            <h3
              style={{
                margin: "6pt 0 3pt 0",
                fontSize: "9.5pt",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1pt",
                borderBottom: "1pt solid #000000",
                paddingBottom: "2pt",
                color: "#000000",
              }}
            >
              Skills
            </h3>
            <ul style={{ margin: "0", paddingLeft: "10pt", fontSize: "8.5pt", color: "#333333" }}>
              <li style={{ marginBottom: "1pt" }}>Design Systems Architecture</li>
              <li style={{ marginBottom: "1pt" }}>Design Tokens & Variables</li>
              <li style={{ marginBottom: "1pt" }}>UX Strategy</li>
              <li style={{ marginBottom: "1pt" }}>Team Leadership</li>
              <li>Product Design</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3
              style={{
                margin: "6pt 0 3pt 0",
                fontSize: "9.5pt",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "1pt",
                borderBottom: "1pt solid #000000",
                paddingBottom: "2pt",
                color: "#000000",
              }}
            >
              Languages
            </h3>
            <div style={{ fontSize: "8.5pt", color: "#333333" }}>
              <p style={{ margin: "0" }}>
                <strong>Spanish</strong> (Native) · <strong>English</strong> (Fluent)
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1pt solid #000000", paddingTop: "4pt", fontSize: "8pt", color: "#666666", textAlign: "center" }}>
        <p style={{ margin: "0" }}>carlosbaeza.design • June 2026</p>
      </div>
    </div>
  );
}
