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
      <div style={{ marginBottom: "4pt", paddingBottom: "2.5pt", borderBottom: "1pt solid #000000" }}>
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
            📧 carlos@snapflowlabs.com · 📞 +569 6685 2551 · 🌐 carlosbaeza.design · 🔗 linkedin.com/in/carlos-baeza-designer
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div style={{ display: "flex", gap: "7mm", flex: 1, marginBottom: "2pt", overflow: "hidden" }}>
        {/* Left Column - Experience */}
        <section style={{ flex: 1, minWidth: 0 }}>
          <h2
            style={{
              margin: "2.5pt 0 1.5pt 0",
              fontSize: "7.5pt",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.6pt",
              borderBottom: "1pt solid #000000",
              paddingBottom: "0.5pt",
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
              Founded AI-native company solving design-engineering gap. Building deterministic design-to-code automation enabling 40% reduction in UI development cycles. Seamless Figma-to-code integration, multi-framework support (React, Angular, Vue, Web Components). Track record: $2M+ annual technical debt savings.
            </p>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li>• AI-powered design-to-code automation & enterprise governance</li>
              <li>• Specification-driven workflows eliminating technical debt</li>
            </ul>
          </div>

          {/* Design System Architect ShipBob */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Design System Architect • ShipBob (via Flylance)
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Jul 2025 – Present
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Strategic conceptualization & execution of design system for global logistics ecosystem. Built robust Figma component library reducing design-dev friction. Implemented 3-tier token architecture (Primitive, Semantic, Component-specific) with PrimeVue integration.
            </p>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li>• Hierarchical token structure ensuring maintainability & scalability</li>
              <li>• Multi-theme support (Dark Mode) & accessibility standards</li>
            </ul>
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
              Leading cross-functional teams balancing UX with business goals. Developed multi-branding design system in Figma with tokens, implemented across React, Angular, Vue.js, Web Components. Deployed interactive documentation in Storybook. Defined OKRs enhancing team design systems skills.
            </p>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li>• Strategic vision, style guides, component libraries & scalability</li>
              <li>• Cross-functional alignment, workshops & stakeholder liaison</li>
            </ul>
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
              Led transformative UX initiatives implementing holistic strategy. Managed 8+ UX professionals. Optimized organizational structures improving design workflow & team well-being. Fostered strategic partnerships aligning design with business functions.
            </p>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li>• Human-centered innovation driving creative design decisions</li>
              <li>• Design excellence culture fostering continuous improvement</li>
            </ul>
          </div>

          {/* Lead UX Banco Ripley */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Lead UX • Banco Ripley Chile
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Aug 2019 – May 2021
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Spearheaded design for Chek (100% digital account). Established design system in Figma ensuring consistency & scalability. Led diverse UX team. Collaborated with Agile teams implementing Scrum. Conducted user research & usability testing informing design decisions.
            </p>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li>• End-to-end design process from conceptualization to implementation</li>
              <li>• Design thinking driving digital banking innovation</li>
            </ul>
          </div>

          {/* Head of Product Design Autonomus */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Head of Product Design • Autonomus
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Oct 2023 – Jan 2024
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Led development of transportation & companionship platform for seniors. Organized workshops defining service blueprints. Developed sitemaps & information architecture. Established design system in Figma. Built user flows & facilitated Agile ceremonies.
            </p>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li>• Service design & collaborative workshop facilitation</li>
              <li>• Scalable design system & seamless stakeholder alignment</li>
            </ul>
          </div>

          {/* Senior UX Designer Imille */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer • Imille (Enel)
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Feb 2018 – Jan 2019
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Led major digital transformation for Enel across South America (Chile, Argentina, Peru, Colombia, Brazil). Remote collaboration with Board of Directors in Rome. Defined comprehensive functionalities & user flows. Developed design system for private area.
            </p>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.2" }}>
              <li>• Cross-country stakeholder management & metrics analysis</li>
              <li>• Seamless experience design across multiple countries</li>
            </ul>
          </div>

          {/* Senior UX Designer Modyo */}
          <div style={{ marginBottom: "1.8pt" }}>
            <p style={{ margin: "0 0 0.2pt 0", fontSize: "7.5pt", fontWeight: "700", color: "#000000" }}>
              Senior UX Designer & Frontend Developer • Modyo
            </p>
            <p style={{ margin: "0 0 0.8pt 0", fontSize: "6.5pt", color: "#555555", fontWeight: "600" }}>
              Sep 2016 – Jan 2018
            </p>
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Full-stack design & frontend development. UX/UI design, responsive implementation, component architecture for digital products.
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
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              UX design & frontend development consulting. Digital product optimization, user experience enhancement.
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
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Founded digital agency. UX/UI design, web development, product strategy for startup clients.
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
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Digital payment platform. UX design, frontend implementation, user experience optimization.
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
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Frontend development leadership. Web architecture, component development, team coordination.
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
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Web & multimedia operations management, digital strategy.
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
            <p style={{ margin: "0", fontSize: "7pt", color: "#333333", lineHeight: "1.25" }}>
              Graphic design, visual content production, branding.
            </p>
          </div>
        </section>

        {/* Right Column */}
        <section style={{ flex: "0 0 40mm", overflow: "hidden" }}>
          {/* Education */}
          <div style={{ marginBottom: "2pt" }}>
            <h3 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", borderBottom: "1pt solid #000000", paddingBottom: "0.3pt", color: "#000000" }}>
              Education
            </h3>
            <div style={{ fontSize: "7pt", color: "#333333" }}>
              <p style={{ margin: "0 0 0.2pt 0", fontWeight: "600" }}>Full Stack Development</p>
              <p style={{ margin: "0 0 1.2pt 0", fontSize: "6.5pt", color: "#666666" }}>Universidad del Desarrollo • 2024</p>
              <p style={{ margin: "0 0 0.2pt 0", fontWeight: "600" }}>Diseño Gráfico</p>
              <p style={{ margin: "0", fontSize: "6.5pt", color: "#666666" }}>Duoc UC • 2002 – 2004</p>
            </div>
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: "2pt" }}>
            <h3 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", borderBottom: "1pt solid #000000", paddingBottom: "0.3pt", color: "#000000" }}>
              Certifications
            </h3>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.1" }}>
              <li style={{ marginBottom: "0.2pt" }}>SAFe 5 Product Owner (Scaled Agile)</li>
              <li style={{ marginBottom: "0.2pt" }}>Product Strategy (Product School)</li>
              <li style={{ marginBottom: "0.2pt" }}>Design Sprint Innovation (UDD)</li>
              <li>Google Tag Manager Fundamentals</li>
            </ul>
          </div>

          {/* Methodologies */}
          <div style={{ marginBottom: "2pt" }}>
            <h3 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", borderBottom: "1pt solid #000000", paddingBottom: "0.3pt", color: "#000000" }}>
              Methodologies
            </h3>
            <p style={{ margin: "0", fontSize: "6.5pt", color: "#333333", lineHeight: "1.15" }}>
              Design Thinking, Lean, Agile, Design Sprint, UX Research, Atomic Design, Design Systems, Design Tokens, Double Diamond, Data-Driven Design, OKRs, DesignOps
            </p>
          </div>

          {/* Tools */}
          <div style={{ marginBottom: "2pt" }}>
            <h3 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", borderBottom: "1pt solid #000000", paddingBottom: "0.3pt", color: "#000000" }}>
              Tools & Tech
            </h3>
            <div style={{ fontSize: "6.5pt", color: "#333333", lineHeight: "1.1" }}>
              <p style={{ margin: "0 0 0.2pt 0" }}><strong>Design:</strong> Figma, FigJam, Webflow, Maze, Typeform, Zeroheight</p>
              <p style={{ margin: "0 0 0.2pt 0" }}><strong>Dev:</strong> React, Vue.js, Angular, Storybook, Web Components, HTML5, SASS</p>
              <p style={{ margin: "0 0 0.2pt 0" }}><strong>Collab:</strong> Jira, Confluence, Slack, Miro, Teams</p>
              <p style={{ margin: "0" }}><strong>Other:</strong> Github, Google Analytics, Hotjar, ChatGPT, Claude</p>
            </div>
          </div>

          {/* Awards */}
          <div style={{ marginBottom: "2pt" }}>
            <h3 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", borderBottom: "1pt solid #000000", paddingBottom: "0.3pt", color: "#000000" }}>
              Awards
            </h3>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.1" }}>
              <li style={{ marginBottom: "0.2pt" }}>Laboratoria Talent Fest (1st • 2021)</li>
              <li style={{ marginBottom: "0.2pt" }}>Young Forest Entrepreneur (1st • 2016)</li>
              <li>Developing Latin America (2013–2014)</li>
            </ul>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2pt" }}>
            <h3 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", borderBottom: "1pt solid #000000", paddingBottom: "0.3pt", color: "#000000" }}>
              Core Skills
            </h3>
            <ul style={{ margin: "0", paddingLeft: "6pt", fontSize: "6.5pt", color: "#333333", lineHeight: "1.1" }}>
              <li style={{ marginBottom: "0.2pt" }}>Design Systems Architecture</li>
              <li style={{ marginBottom: "0.2pt" }}>Design Tokens & Variables</li>
              <li style={{ marginBottom: "0.2pt" }}>UX Strategy & Product Design</li>
              <li style={{ marginBottom: "0.2pt" }}>Team Leadership (27+ people)</li>
              <li style={{ marginBottom: "0.2pt" }}>Design Governance & Scalability</li>
              <li>User Research & Testing</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 style={{ margin: "2.5pt 0 1pt 0", fontSize: "7.5pt", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.6pt", borderBottom: "1pt solid #000000", paddingBottom: "0.3pt", color: "#000000" }}>
              Languages
            </h3>
            <p style={{ margin: "0", fontSize: "6.5pt", color: "#333333" }}>
              <strong>Spanish</strong> (Native) • <strong>English</strong> (Fluent)
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1pt solid #000000", paddingTop: "1.5pt", fontSize: "6pt", color: "#666666", textAlign: "center", marginTop: "auto" }}>
        <p style={{ margin: "0" }}>carlosbaeza.design • June 2026 • Full professional history and design systems expertise</p>
      </div>
    </div>
  );
}
