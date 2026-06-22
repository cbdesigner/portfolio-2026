"use client";

export default function SimplifiedCvContent() {
  return (
    <div
      data-simplified-cv-pdf
      style={{
        width: "210mm",
        height: "297mm",
        padding: "15mm",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "10pt",
        lineHeight: "1.5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "10pt" }}>
        <h1
          style={{
            margin: "0 0 4pt 0",
            fontSize: "18pt",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          Carlos Baeza
        </h1>
        <div style={{ margin: "4pt 0 6pt 0", fontSize: "9pt", color: "#333333" }}>
          <p style={{ margin: "0" }}>
            📧 carlos@snapflowlabs.com · 📞 +569 6685 2551 · 🔗 carlosbaeza.design · linkedin.com/in/carlos-baeza-design
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <section style={{ marginBottom: "8pt" }}>
        <h2
          style={{
            margin: "0 0 6pt 0",
            fontSize: "10pt",
            fontWeight: "bold",
            textTransform: "uppercase",
            borderBottom: "1pt solid #000000",
            paddingBottom: "3pt",
            color: "#000000",
          }}
        >
          Experience
        </h2>

        {/* Job 1 */}
        <div style={{ marginBottom: "6pt" }}>
          <p
            style={{
              margin: "0",
              fontSize: "10pt",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            CEO & Design System Architect at Snapflow Labs
          </p>
          <p style={{ margin: "0 0 3pt 0", fontSize: "9pt", color: "#555555" }}>
            Oct 2023 – Present · Santiago, Chile
          </p>
          <p style={{ margin: "0 0 3pt 0", fontSize: "10pt", color: "#333333" }}>
            Building AI-ready design system infrastructure. 40% reduction in design-to-implementation cycles.
          </p>
          <ul style={{ margin: "0", paddingLeft: "15pt", fontSize: "9pt", color: "#333333" }}>
            <li style={{ marginBottom: "2pt" }}>Deterministic design-to-code automation</li>
            <li style={{ marginBottom: "2pt" }}>Enterprise-scale design governance</li>
            <li>Multi-framework support: React, Angular, Vue, Web Components</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div style={{ marginBottom: "6pt" }}>
          <p
            style={{
              margin: "0",
              fontSize: "10pt",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Design System Architect at ShipBob (via Flylance)
          </p>
          <p style={{ margin: "0 0 3pt 0", fontSize: "9pt", color: "#555555" }}>
            Jul 2025 – Present · Santiago, Chile
          </p>
          <p style={{ margin: "0 0 3pt 0", fontSize: "10pt", color: "#333333" }}>
            Architected 3-tier token system, PrimeVue integration, multi-theme support for logistics platform.
          </p>
        </div>

        {/* Job 3 */}
        <div style={{ marginBottom: "6pt" }}>
          <p
            style={{
              margin: "0",
              fontSize: "10pt",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Head of Product Design & Design System Manager at Siamese Digital
          </p>
          <p style={{ margin: "0 0 3pt 0", fontSize: "9pt", color: "#555555" }}>
            Oct 2023 – Present · Santiago, Chile
          </p>
          <p style={{ margin: "0 0 3pt 0", fontSize: "10pt", color: "#333333" }}>
            Leading 10+ cross-functional team. Multi-brand design system in Figma deployed across React, Angular, Vue JS, Web Components.
          </p>
        </div>

        {/* Job 4 */}
        <div>
          <p
            style={{
              margin: "0",
              fontSize: "10pt",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            UX Manager at Banco Ripley Chile & Peru
          </p>
          <p style={{ margin: "0 0 3pt 0", fontSize: "9pt", color: "#555555" }}>
            May 2021 – Sep 2023 · Santiago, Chile
          </p>
          <p style={{ margin: "0", fontSize: "10pt", color: "#333333" }}>
            Led UX strategy, managed 8+ team members, established design system, conducted user research.
          </p>
        </div>
      </section>

      {/* Education & Certifications */}
      <div style={{ display: "flex", gap: "20pt", marginBottom: "8pt" }}>
        <section style={{ flex: 1 }}>
          <h2
            style={{
              margin: "0 0 6pt 0",
              fontSize: "10pt",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderBottom: "1pt solid #000000",
              paddingBottom: "3pt",
              color: "#000000",
            }}
          >
            Education
          </h2>
          <ul
            style={{
              margin: "0",
              paddingLeft: "15pt",
              fontSize: "9pt",
              color: "#333333",
            }}
          >
            <li style={{ marginBottom: "2pt" }}>
              <strong>Full Stack Development</strong> • Universidad del Desarrollo (2024)
            </li>
            <li>
              <strong>Diseño Gráfico</strong> • Duoc UC (2002–2004)
            </li>
          </ul>
        </section>

        <section style={{ flex: 1 }}>
          <h2
            style={{
              margin: "0 0 6pt 0",
              fontSize: "10pt",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderBottom: "1pt solid #000000",
              paddingBottom: "3pt",
              color: "#000000",
            }}
          >
            Certifications
          </h2>
          <ul
            style={{
              margin: "0",
              paddingLeft: "15pt",
              fontSize: "9pt",
              color: "#333333",
            }}
          >
            <li style={{ marginBottom: "2pt" }}>SAFe 5 Product Owner (Scaled Agile)</li>
            <li style={{ marginBottom: "2pt" }}>Product Strategy (Product School)</li>
            <li>Design Sprint Innovation (UDD)</li>
          </ul>
        </section>
      </div>

      {/* Tools & Skills */}
      <div style={{ display: "flex", gap: "20pt", marginBottom: "8pt" }}>
        <section style={{ flex: 1 }}>
          <h2
            style={{
              margin: "0 0 6pt 0",
              fontSize: "10pt",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderBottom: "1pt solid #000000",
              paddingBottom: "3pt",
              color: "#000000",
            }}
          >
            Tools & Technologies
          </h2>
          <p style={{ margin: "0 0 2pt 0", fontSize: "9pt", color: "#333333" }}>
            <strong>Design:</strong> Figma, FigJam, Webflow, Maze, Typeform
          </p>
          <p style={{ margin: "0 0 2pt 0", fontSize: "9pt", color: "#333333" }}>
            <strong>Development:</strong> React, Vue.js, Angular, Storybook, Web Components
          </p>
          <p style={{ margin: "0 0 2pt 0", fontSize: "9pt", color: "#333333" }}>
            <strong>Collaboration:</strong> Jira, Confluence, Slack, Miro
          </p>
          <p style={{ margin: "0", fontSize: "9pt", color: "#333333" }}>
            <strong>Analytics:</strong> Google Analytics, Hotjar, Smartlook
          </p>
        </section>

        <section style={{ flex: 1 }}>
          <h2
            style={{
              margin: "0 0 6pt 0",
              fontSize: "10pt",
              fontWeight: "bold",
              textTransform: "uppercase",
              borderBottom: "1pt solid #000000",
              paddingBottom: "3pt",
              color: "#000000",
            }}
          >
            Core Skills
          </h2>
          <ul
            style={{
              margin: "0",
              paddingLeft: "15pt",
              fontSize: "9pt",
              color: "#333333",
            }}
          >
            <li style={{ marginBottom: "2pt" }}>Design Systems Architecture</li>
            <li style={{ marginBottom: "2pt" }}>Design Tokens & Variables</li>
            <li style={{ marginBottom: "2pt" }}>UX Strategy & Product Design</li>
            <li style={{ marginBottom: "2pt" }}>Team Leadership (27+ people)</li>
            <li>Design Governance & Scalability</li>
          </ul>
        </section>
      </div>

      {/* Languages - Footer */}
      <div style={{ marginTop: "auto", borderTop: "1pt solid #000000", paddingTop: "6pt" }}>
        <p style={{ margin: "0", fontSize: "9pt", color: "#333333" }}>
          <strong>Languages:</strong> Spanish (Native) · English (Fluent)
        </p>
        <p style={{ margin: "3pt 0 0 0", fontSize: "8pt", color: "#666666", textAlign: "center" }}>
          carlosbaeza.design • June 2026
        </p>
      </div>
    </div>
  );
}
