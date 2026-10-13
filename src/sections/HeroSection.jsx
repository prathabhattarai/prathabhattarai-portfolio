import { useState, useEffect, useRef } from "react";
import resumePDF from "../../public/CV.pdf";

export default function HeroSection() {
  const roles = ["Full Stack Developer", "Frontend Developer @ Bardali Creation", "React Specialist", "UI Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const terminalRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 75);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 38);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handleMouseMove = (e) => {
    const el = terminalRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -7;
    const rotateY = ((x - rect.width / 2) / rect.width) * 7;
    el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const el = terminalRef.current;
    if (el) el.style.transform = `perspective(1100px) rotateX(0deg) rotateY(0deg)`;
  };

  const handleSocialClick = (url) => window.open(url, "_blank");
  const handleCollaborate = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const codeLines = [
    {
      num: "01",
      tokens: [
        { text: "const ", color: "#c792ea" },
        { text: "developer", color: "#82aaff" },
        { text: " = ", color: "#89ddff" },
        { text: "{", color: "#e8eef7" },
      ],
    },
    {
      num: "02",
      tokens: [
        { text: "  name", color: "#82aaff" },
        { text: ": ", color: "#89ddff" },
        { text: "'Pratha Bhattarai'", color: "#c3e88d" },
        { text: ",", color: "#89ddff" },
      ],
    },
    {
      num: "03",
      tokens: [
        { text: "  role", color: "#82aaff" },
        { text: ": ", color: "#89ddff" },
        { text: "'Full Stack Developer'", color: "#c3e88d" },
        { text: ",", color: "#89ddff" },
      ],
    },
    {
      num: "04",
      tokens: [
        { text: "  company", color: "#82aaff" },
        { text: ": ", color: "#89ddff" },
        { text: "'Bardali Creation Pvt. Ltd.'", color: "#c3e88d" },
        { text: ",", color: "#89ddff" },
      ],
    },
    {
      num: "05",
      tokens: [
        { text: "  job", color: "#82aaff" },
        { text: ": ", color: "#89ddff" },
        { text: "'Part-time Frontend Dev'", color: "#c3e88d" },
        { text: ",", color: "#89ddff" },
      ],
    },
    {
      num: "06",
      tokens: [
        { text: "  stack", color: "#82aaff" },
        { text: ": ", color: "#89ddff" },
        { text: "['React', 'Node.js', 'MySQL']", color: "#c3e88d" },
        { text: ",", color: "#89ddff" },
      ],
    },
    {
      num: "07",
      tokens: [
        { text: "  openToWork", color: "#82aaff" },
        { text: ": ", color: "#89ddff" },
        { text: "true", color: "#f78c6c" },
        { text: ",", color: "#89ddff" },
      ],
    },
    {
      num: "08",
      tokens: [
        { text: "  motto", color: "#82aaff" },
        { text: ": ", color: "#89ddff" },
        { text: '"ship clean code"', color: "#ffcb6b" },
      ],
    },
    {
      num: "09",
      tokens: [{ text: "};", color: "#e8eef7" }],
    },
    {
      num: "10",
      tokens: [
        { text: "developer", color: "#82aaff" },
        { text: ".", color: "#89ddff" },
        { text: "hire", color: "#00e5a0" },
        { text: "();", color: "#e8eef7" },
      ],
    },
  ];

  const socials = [
    {
      title: "GitHub",
      url: "https://github.com/prathabhattarai",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/pratha-bhattarai-7b4755379/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/prathaaa.diary/?hl=en",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
        </svg>
      ),
    },
    {
      title: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=prathabhattarai2@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 68px;
          isolation: isolate;
        }
        .hero-bg-grid {
          position: absolute; inset: 0; z-index: -2;
          background-image:
            linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 85% 68% at 50% 32%, black 35%, transparent 78%);
          -webkit-mask-image: radial-gradient(ellipse 85% 68% at 50% 32%, black 35%, transparent 78%);
        }
        .hero-glow {
          position: absolute; z-index: -1;
          border-radius: 50%;
          filter: blur(90px);
          opacity: .5;
          pointer-events: none;
        }
        .hero-glow.g1 { width: 480px; height: 480px; left: -140px; top: 8%; background: radial-gradient(circle, rgba(0,229,160,.18), transparent 65%); }
        .hero-glow.g2 { width: 560px; height: 560px; right: -160px; top: -80px; background: radial-gradient(circle, rgba(34,211,238,.14), transparent 65%); }
        .hero-inner {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 56px 32px 72px;
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 56px;
          align-items: center;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: var(--mono);
          font-size: 12.5px;
          color: #a7f3d0;
          background: rgba(0,229,160,.08);
          border: 1px solid rgba(0,229,160,.22);
          padding: 8px 14px;
          border-radius: 999px;
          margin-bottom: 22px;
        }
        .pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 0 rgba(0,229,160,.6); animation: pulse 2s infinite; }
        @keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(0,229,160,.55)} 70%{box-shadow:0 0 0 9px rgba(0,229,160,0)} 100%{box-shadow:0 0 0 0 rgba(0,229,160,0)} }
        .hero-path { font-family: var(--mono); font-size: 13.5px; color: #5b6b86; margin-bottom: 14px; }
        .hero-path span { color: var(--accent); }
        .hero-h1 {
          font-size: clamp(2.7rem, 5.4vw, 4.3rem);
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 700;
        }
        .hero-h1 .grad {
          background: linear-gradient(92deg, #00e5a0 0%, #22d3ee 55%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .type-row {
          display: flex; align-items: center; gap: 10px;
          margin-top: 18px;
          font-family: var(--mono);
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #c6d0e0;
          min-height: 34px;
        }
        .type-row .prompt { color: var(--accent); font-weight: 700; }
        .type-cursor { display:inline-block; width: 9px; height: 1.2em; background: var(--accent); margin-left: 4px; vertical-align: text-bottom; animation: blink .9s step-end infinite; border-radius: 1px; box-shadow: 0 0 12px rgba(0,229,160,.8); }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-sub { margin-top: 18px; color: #8b98af; font-size: 1.04rem; line-height: 1.7; max-width: 520px; }
        .hero-sub code { font-family: var(--mono); font-size: .86em; color: #a7f3d0; background: rgba(0,229,160,.1); border: 1px solid rgba(0,229,160,.18); padding: 2px 7px; border-radius: 6px; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; align-items: center; }
        .btn-solid {
          display: inline-flex; align-items: center; gap: 9px;
          background: linear-gradient(135deg, #00e5a0, #00c489);
          color: #04120c;
          font-weight: 700; font-size: 14px;
          padding: 13px 22px; border-radius: 11px; border: none; cursor: pointer;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(0,229,160,.28);
          transition: all .2s;
        }
        .btn-solid:hover { transform: translateY(-2px); box-shadow: 0 12px 34px rgba(0,229,160,.38); }
        .btn-ghost-dark {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(255,255,255,.03);
          color: #e8eef7; font-weight: 600; font-size: 14px;
          padding: 13px 22px; border-radius: 11px;
          border: 1px solid rgba(148,163,184,.22);
          cursor: pointer; text-decoration: none;
          transition: all .2s;
        }
        .btn-ghost-dark:hover { border-color: rgba(0,229,160,.5); color: var(--accent); background: rgba(0,229,160,.07); transform: translateY(-2px); }
        .hero-meta { display: flex; gap: 26px; margin-top: 30px; padding-top: 24px; border-top: 1px solid rgba(148,163,184,.12); }
        .meta-item b { display:block; font-size: 1.35rem; color: #fff; letter-spacing:-.02em; }
        .meta-item span { font-family: var(--mono); font-size: 11.5px; color: #5b6b86; text-transform: uppercase; letter-spacing: .08em; }
        .hero-socials { display:flex; gap:10px; margin-top: 22px; }
        .icon-btn {
          width: 42px; height: 42px; border-radius: 11px;
          display:flex; align-items:center; justify-content:center;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(148,163,184,.16);
          color: #8b98af; cursor: pointer; transition: all .2s;
        }
        .icon-btn:hover { color: var(--accent); border-color: rgba(0,229,160,.45); background: rgba(0,229,160,.08); transform: translateY(-2px); }
        .icon-btn svg { width: 18px; height: 18px; fill: currentColor; display:block; }

        /* terminal */
        .term-wrap { position: relative; }
        .term-glow { position:absolute; inset: 18px -18px -18px 18px; background: linear-gradient(135deg, rgba(0,229,160,.22), rgba(34,211,238,.18)); filter: blur(46px); border-radius: 24px; z-index:-1; opacity:.7; }
        .terminal {
          border-radius: 16px;
          overflow: hidden;
          background: rgba(9,13,25,.92);
          border: 1px solid rgba(148,163,184,.16);
          box-shadow: 0 30px 80px rgba(0,0,0,.55);
          backdrop-filter: blur(12px);
          transition: transform .2s ease;
          will-change: transform;
        }
        .terminal-bar { display:flex; align-items:center; justify-content:space-between; padding: 13px 16px; background: rgba(255,255,255,.025); border-bottom: 1px solid rgba(148,163,184,.12); }
        .traffic { display:flex; gap:7px; align-items:center; }
        .tl { width: 11px; height: 11px; border-radius:50%; }
        .filename { display:flex; align-items:center; gap:8px; font-family: var(--mono); font-size:12px; color:#8b98af; background: rgba(255,255,255,.04); border:1px solid rgba(148,163,184,.12); padding:5px 12px; border-radius:7px; }
        .term-tabs { display:flex; gap:2px; padding: 0 16px; border-bottom: 1px solid rgba(148,163,184,.1); background: rgba(0,0,0,.18); }
        .term-tab { font-family: var(--mono); font-size:12px; color:#5b6b86; padding:10px 14px; border-bottom:2px solid transparent; }
        .term-tab.active { color: #e8eef7; border-bottom-color: var(--accent); background: rgba(0,229,160,.05); }
        .code-body { padding: 22px 20px 18px; font-family: var(--mono); font-size: 13.5px; line-height: 2.05; overflow-x:auto; }
        .code-line { display:flex; gap:18px; white-space: pre; }
        .ln { color: #334155; min-width: 20px; text-align:right; user-select:none; font-size:12px; line-height:2.35; }
        .term-footer { display:flex; align-items:center; justify-content:space-between; padding: 11px 16px; border-top:1px solid rgba(148,163,184,.1); font-family:var(--mono); font-size:11.5px; color:#5b6b86; background: rgba(0,0,0,.22); }
        .term-footer .ok { color: var(--accent); display:flex; align-items:center; gap:6px; }
        .scroll-hint { display:flex; justify-content:center; margin-top: 6px; padding-bottom: 26px; color:#3c4a64; }
        .scroll-hint span { width:24px; height:38px; border:1.5px solid #26334f; border-radius:14px; display:flex; justify-content:center; padding-top:7px; }
        .scroll-hint i { width:3px; height:8px; border-radius:3px; background: var(--accent); display:block; animation: wheel 1.8s infinite; }
        @keyframes wheel { 0%{transform:translateY(0);opacity:1} 60%{transform:translateY(10px);opacity:0} 100%{transform:translateY(0);opacity:0} }

        @media (max-width: 1020px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; padding: 40px 20px 56px; }
          .term-glow { display:none; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-bg-grid" />
        <div className="hero-glow g1" />
        <div className="hero-glow g2" />

        <div className="hero-inner">
          <div>
            <div className="hero-path">
              ~/portfolio <span>—</span> whoami
            </div>
            <h1 className="hero-h1">
              Hi, I&apos;m <span className="grad">Pratha Bhattarai</span>
            </h1>
            <div className="type-row">
              <span className="prompt">▸</span>
              <span>{displayText}</span>
              <span className="type-cursor" />
            </div>
            <p className="hero-sub">
              Full Stack Developer crafting fast, accessible web experiences with{" "}
              <code>React</code> <code>Node.js</code> and <code>MySQL</code>. Currently working
              part-time as a <code>Frontend Developer</code> at Bardali Creation Pvt. Ltd.
            </p>

            <div className="hero-actions">
              <button className="btn-solid" onClick={handleCollaborate}>
                Let&apos;s Collaborate
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a className="btn-ghost-dark" href={resumePDF} download="Pratha_Bhattarai_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                ./get_resume.sh
              </a>
            </div>

            <div className="hero-meta">
              <div className="meta-item"><b>2+</b><span>projects shipped</span></div>
              <div className="meta-item"><b>2 yrs</b><span>learning & building</span></div>
              <div className="meta-item"><b>100%</b><span>commitment</span></div>
            </div>

            <div className="hero-socials">
              {socials.map((s) => (
                <button key={s.title} className="icon-btn" title={s.title} onClick={() => handleSocialClick(s.url)}>
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="term-wrap">
            <div className="term-glow" />
            <div className="terminal" ref={terminalRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="terminal-bar">
                <div className="traffic">
                  <span className="tl" style={{ background: "#ff5f57" }} />
                  <span className="tl" style={{ background: "#febc2e" }} />
                  <span className="tl" style={{ background: "#28c840" }} />
                </div>
                <div className="filename">
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
                  developer.js
                </div>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#3c4a64" }}>UTF-8</span>
              </div>
              <div className="term-tabs">
                <span className="term-tab active">developer.js</span>
                <span className="term-tab">skills.json</span>
                <span className="term-tab">contact.sh</span>
              </div>
              <div className="code-body">
                {codeLines.map((line, i) => (
                  <div className="code-line" key={i}>
                    <span className="ln">{line.num}</span>
                    <span>
                      {line.tokens.map((t, j) => (
                        <span key={j} style={{ color: t.color }}>{t.text}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
              <div className="term-footer">
                <span>main* ⏷ 0 ⚠ 0 ✓</span>
                <span className="ok"><span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor" }} /> build: passing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
