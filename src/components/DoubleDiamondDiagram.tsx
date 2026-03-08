"use client";

export default function DoubleDiamondDiagram() {
  // Step data
  const steps = [
    { n: 1, x: 185, lines: ["Point of", "departure"] },
    { n: 2, x: 305, lines: ["Discover"] },
    { n: 3, x: 425, lines: ["Insights", "acquisition"] },
    { n: 4, x: 555, lines: ["Define"] },
    { n: 5, x: 700, lines: ["Ideate"] },
    { n: 6, x: 845, lines: ["Validate"] },
    { n: 7, x: 975, lines: ["Prototype"] },
    { n: 8, x: 1095, lines: ["Build"] },
    { n: 9, x: 1215, lines: ["Deliver"] },
  ];

  const leftTeam = [
    { label: "PM", x: 255 },
    { label: "MRKT", x: 325 },
    { label: "UX", x: 395 },
    { label: "ARCH", x: 465 },
  ];

  const rightTeam = [
    { label: "PO", x: 855 },
    { label: "UX", x: 925 },
    { label: "DEV", x: 995 },
    { label: "QA", x: 1065 },
    { label: "OPS", x: 1135 },
  ];

  return (
    <div className="w-full my-4" role="img" aria-label="Double Diamond Design Process — Product Strategy and Product Development methodology showing Discover, Define, Develop and Deliver phases">
      <svg
        viewBox="0 0 1400 780"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        <defs>
          <linearGradient id="dd-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="dd-grad-green" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <filter id="dd-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="dd-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#818cf8" />
          </marker>
          <marker id="dd-arrow-white" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="rgba(255,255,255,0.4)" />
          </marker>
        </defs>

        {/* ===== TITLE AREA ===== */}
        <text x="350" y="42" textAnchor="middle" fill="white" fontSize="30" fontWeight="700" letterSpacing="-0.5">
          Product Strategy
        </text>
        {/* Lean tag */}
        <rect x="535" y="22" width="52" height="26" rx="13" fill="url(#dd-grad-green)" opacity="0.85" />
        <text x="561" y="40" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Lean</text>

        <text x="1050" y="42" textAnchor="middle" fill="white" fontSize="30" fontWeight="700" letterSpacing="-0.5">
          Product Development
        </text>
        {/* Agile tag */}
        <rect x="1235" y="22" width="52" height="26" rx="13" fill="url(#dd-grad)" opacity="0.85" />
        <text x="1261" y="40" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Agile</text>

        {/* Subtitles */}
        <text x="350" y="68" textAnchor="middle" fill="#818cf8" fontSize="15">
          Understand Why and Define How
        </text>
        <text x="1050" y="68" textAnchor="middle" fill="#818cf8" fontSize="15">
          Find the right solution and build it
        </text>

        {/* ===== DIAMONDS ===== */}

        {/* Left Diamond outline */}
        <polygon
          points="110,325 350,85 590,325 350,565"
          fill="rgba(99,102,241,0.04)"
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Right Diamond outline */}
        <polygon
          points="810,325 1050,85 1290,325 1050,565"
          fill="rgba(99,102,241,0.04)"
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Diamond inner content */}
        <text x="350" y="295" textAnchor="middle" fill="white" fontSize="38" fontWeight="700" letterSpacing="-0.5">
          Research
        </text>
        <text x="350" y="330" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="15">
          Design the right thing
        </text>

        <text x="1050" y="295" textAnchor="middle" fill="white" fontSize="38" fontWeight="700" letterSpacing="-0.5">
          Design
        </text>
        <text x="1050" y="330" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="15">
          Design things right
        </text>

        {/* Edge labels — rotated along diamond edges */}
        <text
          x="205" y="188"
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="12"
          transform="rotate(-45, 205, 188)"
        >
          Diverge → Research &amp; Ideation
        </text>
        <text
          x="497" y="188"
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="12"
          transform="rotate(45, 497, 188)"
        >
          Converge → Requirements
        </text>
        <text
          x="905" y="188"
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="12"
          transform="rotate(-45, 905, 188)"
        >
          Diverge → Iterative Design
        </text>
        <text
          x="1197" y="188"
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="12"
          transform="rotate(45, 1197, 188)"
        >
          Converge → Implementation
        </text>

        {/* ===== CENTER ELEMENT ===== */}
        <text x="700" y="175" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="14" fontWeight="500">
          Specific problems →
        </text>

        {/* Center diamond */}
        <polygon
          points="675,325 700,300 725,325 700,350"
          fill="rgba(129,140,248,0.12)"
          stroke="#818cf8"
          strokeWidth="2"
        />
        <text x="700" y="380" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">
          Problem Statement
        </text>
        <text x="700" y="395" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">
          Revised
        </text>

        {/* ===== CHALLENGE CIRCLE ===== */}
        <circle cx="50" cy="385" r="42" fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1.5" />
        <text x="50" y="375" textAnchor="middle" fill="#818cf8" fontSize="13" fontWeight="700">
          Challenge
        </text>
        <text x="50" y="392" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9">
          Hypothesis, Initial
        </text>
        <text x="50" y="404" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9">
          Problem Statement,
        </text>
        <text x="50" y="416" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9">
          Assumptions
        </text>

        {/* Dashed line from challenge to first diamond */}
        <line x1="92" y1="385" x2="108" y2="360" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* ===== TIME CONTINUUM CIRCLE ===== */}
        <circle cx="1355" cy="385" r="42" fill="#6366f1" />
        <text x="1355" y="381" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
          Time
        </text>
        <text x="1355" y="398" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
          continuum
        </text>

        {/* Dashed line from second diamond to time continuum */}
        <line x1="1292" y1="360" x2="1313" y2="385" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* ===== PHASE LABELS ===== */}
        <text x="230" y="435" textAnchor="middle" fill="#818cf8" fontSize="20" fontWeight="700">
          Discover
        </text>
        <text x="230" y="455" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">
          Understanding the problem
        </text>

        <text x="470" y="435" textAnchor="middle" fill="#818cf8" fontSize="20" fontWeight="700">
          Define
        </text>
        <text x="470" y="455" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">
          The area to focus upon
        </text>

        <text x="930" y="435" textAnchor="middle" fill="#818cf8" fontSize="20" fontWeight="700">
          Develop
        </text>
        <text x="930" y="455" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">
          Potential solutions
        </text>

        {/* Iterate circle */}
        <circle cx="1070" cy="430" r="20" fill="none" stroke="#818cf8" strokeWidth="1.5" />
        <text x="1070" y="434" textAnchor="middle" fill="#818cf8" fontSize="11" fontWeight="700">
          Iterate
        </text>
        {/* Circular arrow */}
        <path
          d="M 1090 430 A 20 20 0 1 1 1070 410"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.5"
          markerEnd="url(#dd-arrow)"
        />

        <text x="1170" y="435" textAnchor="middle" fill="#818cf8" fontSize="20" fontWeight="700">
          Deliver
        </text>
        <text x="1170" y="455" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">
          Solutions that work
        </text>

        {/* ===== UNDERSTAND / EMPATIZE ===== */}
        <text x="350" y="485" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="14" fontWeight="500">
          Understand your user
        </text>
        <text x="1050" y="485" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="14" fontWeight="500">
          Empatize with your user
        </text>

        {/* ===== DELIVERABLE TAGS ===== */}
        {/* Row 1 */}
        <rect x="210" y="505" width="115" height="24" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="267" y="521" textAnchor="middle" fill="#a5b4fc" fontSize="11">Research Data</text>

        <rect x="410" y="505" width="75" height="24" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="447" y="521" textAnchor="middle" fill="#a5b4fc" fontSize="11">Epics</text>

        <rect x="855" y="505" width="90" height="24" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="900" y="521" textAnchor="middle" fill="#a5b4fc" fontSize="11">Features</text>

        <rect x="1085" y="505" width="90" height="24" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="1130" y="521" textAnchor="middle" fill="#a5b4fc" fontSize="11">Releases</text>

        {/* Row 2 */}
        <rect x="260" y="535" width="90" height="24" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="305" y="551" textAnchor="middle" fill="#a5b4fc" fontSize="11">Insights</text>

        <rect x="395" y="535" width="130" height="24" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="460" y="551" textAnchor="middle" fill="#a5b4fc" fontSize="11">Strategy Themes</text>

        <rect x="855" y="535" width="105" height="24" rx="4" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
        <text x="907" y="551" textAnchor="middle" fill="#a5b4fc" fontSize="11">User Stories</text>

        {/* Center — Roadmap & Backlog */}
        <rect x="638" y="518" width="124" height="30" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text x="700" y="538" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">
          Roadmap &amp; Backlog
        </text>

        {/* ===== TEAM ROLE BADGES ===== */}
        {leftTeam.map((role) => (
          <g key={`l-${role.label}`}>
            <rect x={role.x - 27} y="572" width="54" height="24" rx="4" fill="#6366f1" />
            <text x={role.x} y="588" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
              {role.label}
            </text>
          </g>
        ))}
        {rightTeam.map((role) => (
          <g key={`r-${role.label}`}>
            <rect x={role.x - 27} y="572" width="54" height="24" rx="4" fill="#6366f1" />
            <text x={role.x} y="588" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
              {role.label}
            </text>
          </g>
        ))}

        {/* Iterative label */}
        <text x="700" y="618" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="14" fontWeight="500">
          ← Iterative
        </text>

        {/* ===== STEPS ===== */}
        <text x="115" y="680" textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize="13">
          Steps
        </text>

        {/* Dotted connecting line */}
        <line
          x1="140" y1="675"
          x2="1280" y2="675"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Step circles + labels */}
        {steps.map((step) => (
          <g key={step.n}>
            <circle cx={step.x} cy={675} r={18} fill="#6366f1" />
            <text x={step.x} y={680} textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
              {step.n}
            </text>
            {step.lines.map((line, i) => (
              <text
                key={i}
                x={step.x}
                y={710 + i * 15}
                textAnchor="middle"
                fill="rgba(255,255,255,0.55)"
                fontSize="12"
              >
                {line}
              </text>
            ))}
          </g>
        ))}

        {/* Small arrow connectors between step circles */}
        {steps.slice(0, -1).map((step, i) => (
          <line
            key={`conn-${i}`}
            x1={step.x + 20}
            y1={675}
            x2={steps[i + 1].x - 20}
            y2={675}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="4 3"
            markerEnd="url(#dd-arrow-white)"
          />
        ))}
      </svg>
    </div>
  );
}
