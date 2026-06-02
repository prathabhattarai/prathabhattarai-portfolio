import { useState, useEffect, useRef } from "react";
import resumePDF from "../../public/CV.pdf";

export default function HeroSection() {
  //  Typewriter State 
const roles = ["Aspiring Frontend Developer","SEO Enthusiast",
];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  //  Terminal Ref (for 3D tilt effect) 
  const terminalRef = useRef(null);

  //  Typewriter Effect 
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 100);
    } else if (!isDeleting && charIndex === current.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 55);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  //  3D Tilt Handlers 
  const handleMouseMove = (e) => {
    const el = terminalRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const el = terminalRef.current;
    if (el)
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  //  Helpers 
  const handleSocialClick = (url) => window.open(url, "_blank");

  const handleCollaborate = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  //  Nav Links 
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  //  Terminal Code Lines 
  const codeLines = [
    {
      num: "01",
      tokens: [
        { text: "const ", color: "#93c5fd" },
        { text: "developer", color: "#bfdbfe" },
        { text: " = ", color: "#93c5fd" },
        { text: "{", color: "#ffffff" },
      ],
    },
    {
      num: "02",
      tokens: [
        { text: "  name", color: "#bfdbfe" },
        { text: ": ", color: "#93c5fd" },
        { text: "'Pratha Bhattarai'", color: "#a5f3fc" },
        { text: ",", color: "#93c5fd" },
      ],
    },
    {
      num: "03",
      tokens: [
        { text: "  focus", color: "#bfdbfe" },
        { text: ": ", color: "#93c5fd" },
        { text: "'Aspiring Frontend Developer'", color: "#a5f3fc" },
        { text: ",", color: "#93c5fd" },
      ],
    },
    {
      num: "04",
      tokens: [
        { text: "  skills", color: "#bfdbfe" },
        { text: ": ", color: "#93c5fd" },
        { text: "['UI/UX', 'React', 'Node.js', 'MySQL']", color: "#a5f3fc" },
        { text: ",", color: "#93c5fd" },
      ],
    },
    {
      num: "05",
      tokens: [
        { text: "  passionate", color: "#bfdbfe" },
        { text: ": ", color: "#93c5fd" },
        { text: "true", color: "#86efac" },
        { text: ",", color: "#93c5fd" },
      ],
    },
    {
      num: "06",
      tokens: [
        { text: "  motto", color: "#bfdbfe" },
        { text: ": ", color: "#93c5fd" },
        { text: '"Build with Purpose"', color: "#fde68a" },
      ],
    },
    {
      num: "07",
      tokens: [{ text: "};", color: "#ffffff" }],
    },
    {
      num: "08",
      tokens: [
        { text: "developer", color: "#bfdbfe" },
        { text: ".", color: "#93c5fd" },
        { text: "showcase", color: "#c4b5fd" },
        { text: "();", color: "#ffffff" },
      ],
    },
  ];

  // ─── Social Links ────────────────────────────────────────────────────────────
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

  // ───────────────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600;700;800;900&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        /* ── Page Wrapper ── */
        .hero-root {
          min-height: 100vh;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
        }

        /* ── Navbar ── */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 48px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          position: relative;
          z-index: 10;
        }
        .logo {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
        }
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        .nav-links a {
          color: #0f172a;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #4f6ef7; }

        /* ── Two-Column Hero Body ── */
        .hero-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 64px 48px;
          flex: 1;
        }

        /* ── Left Column ── */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* ── Heading ── */
        .intro-text {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
        }
        .greeting {
          font-size: 80px;
          font-weight: 900;
          color: #0f172a;
        }
        .name-line {
          font-size: 80px;
          font-weight: 900;
          color: #0f172a;
        }
        .name-highlight { color: #4f6ef7; }

        /* ── Typewriter Role Text ── */
        .role-line {
          font-size: 40px;
          font-weight: 800;
          color: #4f6ef7;
          line-height: 1.3;
          margin-top: 8px;
          min-height: 54px;
        }
        .cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #4f6ef7;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 0.85s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Social Buttons ── */
        .socials { display: flex; gap: 10px; }
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        .social-btn:hover {
          border-color: #4f6ef7;
          color: #4f6ef7;
          background: #f0f4ff;
        }
        .social-btn svg {
          width: 18px;
          height: 18px;
          display: block;
          fill: currentColor;
        }

        /* ── CTA Buttons ── */
        .cta-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #4f6ef7;
          color: #ffffff;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 24px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .btn-primary:hover { background: #3b56d4; }
        .btn-primary svg { width: 17px; height: 17px; fill: currentColor; }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #0f172a;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 24px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
        }
        .btn-ghost:hover { border-color: #4f6ef7; color: #4f6ef7; }
        .btn-ghost svg { width: 16px; height: 16px; fill: currentColor; }

        /* ── Terminal Card ── */
        .terminal {
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(145deg, #0f1f4a 0%, #1a3a8f 60%, #2563eb 100%);
          box-shadow: 0 24px 60px rgba(37, 99, 235, 0.22), 0 0 0 1px rgba(255,255,255,0.07);
          transition: transform 0.18s ease;
          will-change: transform;
        }

        /* ── Terminal Top Bar ── */
        .terminal-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(0, 0, 0, 0.15);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .traffic-lights { display: flex; gap: 7px; }
        .tl { width: 12px; height: 12px; border-radius: 50%; }
        .tl-r { background: #ef4444; }
        .tl-y { background: #f59e0b; }
        .tl-g { background: #22c55e; }
        .filename {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255,255,255,0.85);
          font-family: 'Fira Code', monospace;
        }
        .filename-dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.7); }

        /* ── Terminal Code Body ── */
        .code-body {
          padding: 28px 28px 34px 28px;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          line-height: 2.1;
        }
        .code-line { display: flex; gap: 22px; }
        .ln {
          color: rgba(255,255,255,0.35);
          min-width: 18px;
          text-align: right;
          user-select: none;
          font-size: 13px;
        }
        .tokens { display: flex; white-space: pre; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .hero-body { grid-template-columns: 1fr; gap: 32px; padding: 40px 24px; }
          .greeting, .name-line { font-size: 60px; }
          .role-line { font-size: 32px; }
        }
        @media (max-width: 768px) {
          .navbar { padding: 14px 16px; }
          .nav-links { gap: 16px; }
          .nav-links a { font-size: 13px; }
          .greeting, .name-line { font-size: 44px; }
          .role-line { font-size: 24px; min-height: 36px; }
          .code-body { padding: 18px 14px 20px; font-size: 12px; line-height: 1.75; }
          .code-line { gap: 10px; }
        }
      `}</style>

      <div className="hero-root" id="home">
        {/* ── Navbar ─────────────────────────────────────────────────── */}
        <nav className="navbar">
          <span className="logo">Pratha</span>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/*  Hero Body  */}
        <div className="hero-body">
          {/* LEFT: Text Content */}
          <div className="hero-left">
            {/* Heading: Hi, I'm Pratha */}
            <div className="intro-text">
              <span className="greeting">Hi,</span>
              <span className="name-line">
                I'm <span className="name-highlight">Pratha</span>
              </span>
              {/* Animated role under the name */}
              <span className="role-line">
                {displayText}
                <span className="cursor" />
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="socials">
              {socials.map((s) => (
                <button
                  key={s.title}
                  className="social-btn"
                  title={s.title}
                  onClick={() => handleSocialClick(s.url)}
                >
                  {s.icon}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="cta-row">
              {/* Scrolls to Contact section */}
              <button className="btn-primary" onClick={handleCollaborate}>
                Let's Collaborate
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </button>

              {/* Downloads resume PDF */}
              <a
                className="btn-ghost"
                href={resumePDF}
                download="Pratha_Bhattarai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Resume
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Terminal Card with 3D Tilt */}
          <div
            className="terminal"
            ref={terminalRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top bar with traffic lights */}
            <div className="terminal-bar">
              <div className="traffic-lights">
                <span className="tl tl-r" />
                <span className="tl tl-y" />
                <span className="tl tl-g" />
              </div>
              <div className="filename">
                <span className="filename-dot" />
                Portfolio.ts
              </div>
            </div>

            {/* Code lines */}
            <div className="code-body">
              {codeLines.map((line, i) => (
                <div className="code-line" key={i}>
                  <span className="ln">{line.num}</span>
                  <span className="tokens">
                    {line.tokens.map((t, j) => (
                      <span
                        key={j}
                        style={{ color: t.color, whiteSpace: "pre" }}
                      >
                        {t.text}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
