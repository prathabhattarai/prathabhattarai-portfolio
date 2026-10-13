import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HtmlLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <path d="M4 3h24l-2.2 24.6L16 30l-9.8-2.4L4 3z" fill="#e34c26" />
    <path d="M16 27.4l7.9-2.2 1.9-21.2H16v23.4z" fill="#ef652a" />
    <path d="M16 13.5h-4.3l-.3-3.4H16V6.8H8.3l.8 8.7H16v-2zm0 9.4l-.1.1-3.6-1-.2-2.7H8.7l.4 4.8 6.8 1.9H16v-3.1z" fill="#fff" />
    <path d="M16 13.5v2H19.6l-.3 3.7-3.3.9v3.1l6.8-1.9.9-10.8H16v3zm0-6.7v3.3h8.3l.3-3.3H16z" fill="#ebebeb" />
  </svg>
);
const CssLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <path d="M4 3h24l-2.2 24.6L16 30l-9.8-2.4L4 3z" fill="#264de4" />
    <path d="M16 27.4l7.9-2.2 1.9-21.2H16v23.4z" fill="#2965f1" />
    <path d="M16 13.5h4.2l.3-3.5H16V6.8H23.6l-.8 8.7H16v-2zm0 9.4l-.1.1-3.6-1-.2-2.7H8.7l.4 4.8 6.8 1.9H16v-3.1z" fill="#ebebeb" />
    <path d="M16 13.5v2h3.6l-.4 3.7-3.2.9v3.1l6.8-1.9.9-10.8H16v3zm0-6.7v3.3h7.9l.3-3.3H16z" fill="#fff" />
  </svg>
);
const TailwindLogo = () => (
  <svg viewBox="0 0 54 33" width="40" height="24" aria-hidden="true">
    <path fill="#38bdf8" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 15.8 40.5 15.8c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C37.256 3.128 34.192 0 27 0zM13.5 15.8C6.3 15.8 1.8 19.4 0 26.6c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.47 19.808 31.6 26.5 31.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.756 18.928 20.692 15.8 13.5 15.8z" />
  </svg>
);
const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" aria-hidden="true">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);
const NodeLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <path d="M16 3L3 10.5v15L16 29l13-3.5v-15L16 3z" fill="#339933" />
    <text x="8" y="20" fontSize="9" fill="#fff" fontFamily="sans-serif" fontWeight="700">JS</text>
  </svg>
);
const PhpLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <ellipse cx="16" cy="16" rx="14" ry="9" fill="#8993be" />
    <text x="16" y="20" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontWeight="700">php</text>
  </svg>
);
const SqlLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <path d="M16 3C8.3 3 2 5.7 2 9v14c0 3.3 6.3 6 14 6s14-2.7 14-6V9c0-3.3-6.3-6-14-6zm12 18c0 1.4-4.5 4-12 4S4 22.4 4 21v-2.7c2.5 1.7 7 2.7 12 2.7s9.5-1 12-2.7V21zm0-6c0 1.4-4.5 4-12 4S4 16.4 4 15v-2.7c2.5 1.7 7 2.7 12 2.7s9.5-1 12-2.7V15zm-12-2C8.5 13 4 10.4 4 9s4.5-4 12-4 12 2.6 12 4-4.5 4-12 4z" fill="#f97316" />
  </svg>
);
const MySqlWorkbenchLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <path d="M16 4C9.37 4 4 6.24 4 9s5.37 5 12 5 12-2.24 12-5-5.37-5-12-5z" fill="#f97316" />
    <path d="M4 12.29V16c0 2.76 5.37 5 12 5s12-2.24 12-5v-3.71C25.41 14.38 21 15.5 16 15.5S6.59 14.38 4 12.29z" fill="#ea580c" />
    <path d="M4 19.29V23c0 2.76 5.37 5 12 5s12-2.24 12-5v-3.71C25.41 21.38 21 22.5 16 22.5S6.59 21.38 4 19.29z" fill="#c2410c" />
  </svg>
);
const PhpMyAdminLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <rect x="3" y="3" width="26" height="26" rx="6" fill="#f97316" opacity="0.18" />
    <text x="16" y="21" fontSize="10" textAnchor="middle" fill="#f97316" fontFamily="sans-serif" fontWeight="700">pMA</text>
  </svg>
);
const PostmanLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <circle cx="16" cy="16" r="14" fill="#ef5b25" />
    <path d="M9 20l3-8 3 5 2-3 3 6z" fill="#fff" opacity="0.9" />
    <circle cx="22" cy="11" r="2.5" fill="#fff" />
  </svg>
);
const PowerBiLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <rect x="2" y="16" width="14" height="14" fill="#f2c80f" rx="1" />
    <rect x="18" y="16" width="12" height="14" fill="#e8a117" rx="1" />
    <rect x="18" y="2" width="12" height="12" fill="#f2c80f" rx="1" />
    <rect x="2" y="2" width="14" height="12" fill="#e8a117" rx="1" />
  </svg>
);
const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" width="17" height="24" aria-hidden="true">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0acf83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#ff7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#ff7262" />
  </svg>
);
const CanvaLogo = () => (
  <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#7d2ae8" />
    <path d="M10 16a6 6 0 1 1 6 6 6 6 0 0 1-6-6zm6-4a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" fill="#fff" />
    <circle cx="22" cy="10" r="2" fill="#fff" />
  </svg>
);

const skillGroups = [
  {
    category: "frontend",
    file: "frontend.json",
    color: "#22d3ee",
    skills: [
      { name: "HTML", logo: <HtmlLogo />, level: 60 },
      { name: "CSS", logo: <CssLogo />, level: 60 },
      { name: "Tailwind CSS", logo: <TailwindLogo />, level: 50 },
      { name: "React.js", logo: <ReactLogo />, level: 50 },
    ],
  },
  {
    category: "backend",
    file: "backend.json",
    color: "#00e5a0",
    skills: [
      { name: "Node.js", logo: <NodeLogo />, level: 50 },
      { name: "PHP", logo: <PhpLogo />, level: 30 },
    ],
  },
  {
    category: "database",
    file: "database.sql",
    color: "#fbbf24",
    skills: [
      { name: "SQL", logo: <SqlLogo />, level: 70 },
      { name: "MySQL Workbench", logo: <MySqlWorkbenchLogo />, level: 60 },
      { name: "phpMyAdmin", logo: <PhpMyAdminLogo />, level: 30 },
    ],
  },
  {
    category: "tools",
    file: "tools.config",
    color: "#a78bfa",
    skills: [
      { name: "Postman", logo: <PostmanLogo />, level: 50 },
      { name: "Power BI", logo: <PowerBiLogo />, level: 70 },
      { name: "Figma", logo: <FigmaLogo />, level: 80 },
      { name: "Canva", logo: <CanvaLogo />, level: 70 },
    ],
  },
];

function SkillRow({ skill, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
      <div style={{ width: 36, height: 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.04)", border: "1px solid rgba(148,163,184,.14)", borderRadius: 9 }}>
        {skill.logo}
      </div>
      <span style={{ fontSize: 13.5, color: "#dbe3ef", fontWeight: 600, flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {skill.name}
      </span>
      <div style={{ width: 76, height: 5, background: "rgba(148,163,184,.14)", borderRadius: 99, overflow: "hidden", flexShrink: 0 }}>
        <motion.div
          style={{ height: "100%", borderRadius: 99, background: `linear-gradient(90deg, ${color}, ${color}cc)`, boxShadow: `0 0 12px ${color}66` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="mono" style={{ fontSize: 12, color, minWidth: 38, textAlign: "right", fontWeight: 600 }}>
        {skill.level}%
      </span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <>
      <style>{`
        .skills { border-top: 1px solid rgba(148,163,184,.1); }
        .skills-grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:14px; margin-top:44px; }
        .skill-card {
          background: linear-gradient(180deg, rgba(255,255,255,.03), transparent 40%), #0d1424;
          border: 1px solid rgba(148,163,184,.13);
          border-radius: 16px;
          padding: 22px 20px 14px;
          transition: all .25s;
          position:relative; overflow:hidden;
        }
        .skill-card::top {}
        .skill-card:hover { transform: translateY(-5px); border-color: rgba(0,229,160,.3); box-shadow: 0 20px 50px rgba(0,0,0,.45); }
        .skill-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
        .skill-folder { font-family: var(--mono); font-size:12px; color:#8b98af; display:flex; align-items:center; gap:8px; }
        .skill-pct { font-family: var(--mono); font-size:11px; padding:4px 9px; border-radius:99px; border:1px solid; }
        @media (max-width: 1020px){ .skills-grid{grid-template-columns: repeat(2,1fr);} }
        @media (max-width: 620px){ .skills-grid{grid-template-columns:1fr;} }
      `}</style>

      <section id="skills" className="skills">
        <div className="section-shell">
          <span className="section-kicker">{"// 03. skills"}</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Tech <span className="accent">Stack</span>
          </h2>
          <p className="section-desc" style={{ marginTop: 12 }}>
            <span className="mono" style={{ color: "var(--accent)" }}>$</span> ls ~/skills — tools I use to
            design, build, query, and ship.
          </p>

          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.category}>
                <div className="skill-head">
                  <span className="skill-folder">
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: group.color, boxShadow: `0 0 10px ${group.color}` }} />
                    ./{group.category}
                  </span>
                  <span className="skill-pct" style={{ color: group.color, borderColor: `${group.color}44`, background: `${group.color}11` }}>
                    {group.file}
                  </span>
                </div>
                {group.skills.map((skill, i) => (
                  <SkillRow key={skill.name} skill={skill} color={group.color} index={i} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
