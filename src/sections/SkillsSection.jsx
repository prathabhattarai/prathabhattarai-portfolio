import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── SVG Brand Logos ──────────────────────────────────────────────────────────

const HtmlLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <path d="M4 3h24l-2.2 24.6L16 30l-9.8-2.4L4 3z" fill="#e34c26" />
    <path d="M16 27.4l7.9-2.2 1.9-21.2H16v23.4z" fill="#ef652a" />
    <path d="M16 13.5h-4.3l-.3-3.4H16V6.8H8.3l.8 8.7H16v-2zm0 9.4l-.1.1-3.6-1-.2-2.7H8.7l.4 4.8 6.8 1.9H16v-3.1z" fill="#fff" />
    <path d="M16 13.5v2H19.6l-.3 3.7-3.3.9v3.1l6.8-1.9.9-10.8H16v3zm0-6.7v3.3h8.3l.3-3.3H16z" fill="#ebebeb" />
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <path d="M4 3h24l-2.2 24.6L16 30l-9.8-2.4L4 3z" fill="#264de4" />
    <path d="M16 27.4l7.9-2.2 1.9-21.2H16v23.4z" fill="#2965f1" />
    <path d="M16 13.5h4.2l.3-3.5H16V6.8H23.6l-.8 8.7H16v-2zm0 9.4l-.1.1-3.6-1-.2-2.7H8.7l.4 4.8 6.8 1.9H16v-3.1z" fill="#ebebeb" />
    <path d="M16 13.5v2h3.6l-.4 3.7-3.2.9v3.1l6.8-1.9.9-10.8H16v3zm0-6.7v3.3h7.9l.3-3.3H16z" fill="#fff" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 54 33" width="46" height="26" aria-hidden="true">
    <path fill="#38bdf8" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 15.8 40.5 15.8c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C37.256 3.128 34.192 0 27 0zM13.5 15.8C6.3 15.8 1.8 19.4 0 26.6c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.47 19.808 31.6 26.5 31.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.756 18.928 20.692 15.8 13.5 15.8z" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="26" height="26" aria-hidden="true">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <path d="M16 3L3 10.5v15L16 29l13-3.5v-15L16 3z" fill="#339933" />
    <path d="M16 7l9 5v10l-9 2.5L7 22V12l9-5z" fill="#fff" opacity=".1" />
    <text x="8" y="20" fontSize="9" fill="#fff" fontFamily="sans-serif" fontWeight="700">JS</text>
  </svg>
);

const PhpLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <ellipse cx="16" cy="16" rx="14" ry="9" fill="#8993be" />
    <text x="16" y="20" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontWeight="700">php</text>
  </svg>
);

const SqlLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <path d="M16 3C8.3 3 2 5.7 2 9v14c0 3.3 6.3 6 14 6s14-2.7 14-6V9c0-3.3-6.3-6-14-6zm12 18c0 1.4-4.5 4-12 4S4 22.4 4 21v-2.7c2.5 1.7 7 2.7 12 2.7s9.5-1 12-2.7V21zm0-6c0 1.4-4.5 4-12 4S4 16.4 4 15v-2.7c2.5 1.7 7 2.7 12 2.7s9.5-1 12-2.7V15zm-12-2C8.5 13 4 10.4 4 9s4.5-4 12-4 12 2.6 12 4-4.5 4-12 4z" fill="#f97316" />
  </svg>
);

const MySqlWorkbenchLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <path d="M16 4C9.37 4 4 6.24 4 9s5.37 5 12 5 12-2.24 12-5-5.37-5-12-5z" fill="#f97316" />
    <path d="M4 12.29V16c0 2.76 5.37 5 12 5s12-2.24 12-5v-3.71C25.41 14.38 21 15.5 16 15.5S6.59 14.38 4 12.29z" fill="#ea580c" />
    <path d="M4 19.29V23c0 2.76 5.37 5 12 5s12-2.24 12-5v-3.71C25.41 21.38 21 22.5 16 22.5S6.59 21.38 4 19.29z" fill="#c2410c" />
  </svg>
);

const PhpMyAdminLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <rect x="3" y="3" width="26" height="26" rx="4" fill="#f97316" opacity="0.15" />
    <text x="16" y="21" fontSize="10" textAnchor="middle" fill="#f97316" fontFamily="sans-serif" fontWeight="700">pMA</text>
  </svg>
);

const PostmanLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <circle cx="16" cy="16" r="14" fill="#ef5b25" />
    <path d="M9 20l3-8 3 5 2-3 3 6z" fill="#fff" opacity="0.9" />
    <circle cx="22" cy="11" r="2.5" fill="#fff" />
  </svg>
);

const PowerBiLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <rect x="2" y="16" width="14" height="14" fill="#f2c80f" rx="1" />
    <rect x="18" y="16" width="12" height="14" fill="#e8a117" rx="1" />
    <rect x="18" y="2" width="12" height="12" fill="#f2c80f" rx="1" />
    <rect x="2" y="2" width="14" height="12" fill="#e8a117" rx="1" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" width="18" height="26" aria-hidden="true">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0acf83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#ff7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#ff7262" />
  </svg>
);

const CanvaLogo = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#7d2ae8" />
    <path d="M10 16a6 6 0 1 1 6 6 6 6 0 0 1-6-6zm6-4a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" fill="#fff" />
    <circle cx="22" cy="10" r="2" fill="#fff" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    category: "Frontend",
    color: "#7c3aed",
    skills: [
      { name: "HTML", logo: <HtmlLogo />, level: 60 },
      { name: "CSS", logo: <CssLogo />, level: 60 },
      { name: "Tailwind CSS", logo: <TailwindLogo />, level: 50 },
      { name: "React.js", logo: <ReactLogo />, level: 50 },
    ],
  },
  {
    category: "Backend",
    color: "#16a34a",
    skills: [
      { name: "Node.js", logo: <NodeLogo />, level: 50 },
      { name: "PHP", logo: <PhpLogo />, level: 30 },
    ],
  },
  {
    category: "Database",
    color: "#f97316",
    skills: [
      { name: "SQL", logo: <SqlLogo />, level: 70 },
      { name: "MySQL Workbench", logo: <MySqlWorkbenchLogo />, level: 60 },
      { name: "phpMyAdmin", logo: <PhpMyAdminLogo />, level: 30 },
    ],
  },
  {
    category: "Tools",
    color: "#4f6ef7",
    skills: [
      { name: "Postman", logo: <PostmanLogo />, level: 50 },
      { name: "Power BI", logo: <PowerBiLogo />, level: 70 },
      { name: "Figma", logo: <FigmaLogo />, level: 80 },
      { name: "Canva", logo: <CanvaLogo />, level: 70 },
    ],
  },
];

// ── Skill Row ─────────────────────────────────────────────────────────────────

function SkillRow({ skill, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "20px",
      }}
    >
      <div style={{ width: "28px", height: "28px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {skill.logo}
      </div>
      <span style={{ fontSize: "15px", color: "#1e293b", fontWeight: 600, flex: 1, lineHeight: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {skill.name}
      </span>
      <div style={{ width: "72px", height: "3px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden", flexShrink: 0 }}>
        <motion.div
          style={{ height: "100%", borderRadius: "3px", background: color }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span style={{ fontSize: "13px", color: "#94a3b8", minWidth: "30px", textAlign: "right", lineHeight: 1, fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>
        {skill.level}
      </span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function SkillsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .skills-section {
          background: #f8fafc;
          padding: 64px 48px;
          font-family: 'Inter', sans-serif;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        /* ── Separator ── */
        .skills-separator {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, #cbd5e1, transparent);
          margin-bottom: 60px;
        }



        /* ── Inner ── */
        .skills-inner {
          width: 100%;
          position: relative;
          z-index: 1;
        }

        /* ── Title ── */
        .skills-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-start;
          margin-bottom: 2.5rem;
        }

        .skills-subline {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4f6ef7;
        }

        .skills-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.05;
          margin: 0;
        }

        .skills-title span {
          color: #4f6ef7;
        }

        /* ── Grid ── */
        .skills-grid {
          display: flex;
          border-top: 1px solid #e2e8f0;
        }

        .skill-col {
          flex: 1;
          min-width: 0;
          padding: 36px 32px 32px 32px;
          border-right: 1px solid #e2e8f0;
        }

        .skill-col:first-child {
          padding-left: 0;
        }

        .skill-col:last-child {
          border-right: none;
          padding-right: 0;
        }

        .col-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .col-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .col-name {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .skills-section { padding: 40px 24px; }
          .skills-grid { flex-wrap: wrap; }
          .skill-col { min-width: 45%; border-right: none; border-bottom: 1px solid #e2e8f0; }
          .skill-col:last-child { border-bottom: none; }
        }

        @media (max-width: 768px) {
          .skills-section { padding: 32px 16px; }
          .skills-grid { flex-direction: column; }
          .skill-col { min-width: 100%; padding: 24px 0; }
        }
      `}</style>

      <section id="skills" className="skills-section">

      
      
        <div className="skills-inner">

          {/* ── Separator ── */}
          <div className="skills-separator" />

          {/* ── Title ── */}
          <motion.div
            className="skills-title-wrap"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skills-subline">What I Know</div>
            <h2 className="skills-title">
              My <span>Skills</span>
            </h2>
          </motion.div>

          {/* ── Grid ── */}
          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {skillGroups.map((group) => (
              <div className="skill-col" key={group.category}>
                <div className="col-label">
                  <span className="col-dot" style={{ background: group.color }} />
                  <span className="col-name">{group.category}</span>
                </div>
                {group.skills.map((skill, i) => (
                  <SkillRow key={skill.name} skill={skill} color={group.color} index={i} />
                ))}
              </div>
            ))}
          </motion.div>
     
        </div>
           <div className="skills-separator" />
      </section>
      
    </>
  );
}