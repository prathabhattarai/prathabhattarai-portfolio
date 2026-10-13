import { useEffect, useState } from "react";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import "./App.css";

const navLinks = [
  { label: "home", href: "#home", num: "01" },
  { label: "about", href: "#about", num: "02" },
  { label: "skills", href: "#skills", num: "03" },
  { label: "projects", href: "#projects", num: "04" },
  { label: "contact", href: "#contact", num: "05" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .topnav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all .3s ease;
          border-bottom: 1px solid transparent;
        }
        .topnav.scrolled {
          background: rgba(5,7,13,0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: rgba(148,163,184,0.12);
        }
        .topnav-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-family: var(--mono);
        }
        .brand-mark {
          width: 34px; height: 34px;
          border-radius: 9px;
          display: grid; place-items: center;
          background: linear-gradient(135deg, #00e5a0, #22d3ee);
          color: #04120c;
          font-weight: 800;
          font-size: 16px;
        }
        .brand-text { color: #e8eef7; font-weight: 700; font-size: 15px; letter-spacing: -0.01em; }
        .brand-text span { color: var(--accent); }
        .nav-desktop { display: flex; align-items: center; gap: 28px; list-style: none; margin: 0; padding: 0; }
        .nav-desktop a {
          font-family: var(--mono);
          font-size: 13.5px;
          color: #8b98af;
          text-decoration: none;
          transition: color .2s;
        }
        .nav-desktop a b { color: var(--accent); font-weight: 500; margin-right: 6px; }
        .nav-desktop a:hover { color: #fff; }
        .nav-cta {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--accent);
          border: 1px solid var(--accent-border);
          background: var(--accent-dim);
          padding: 9px 16px;
          border-radius: 9px;
          text-decoration: none;
          transition: all .2s;
        }
        .nav-cta:hover { background: rgba(0,229,160,.2); box-shadow: 0 0 20px rgba(0,229,160,.25); }
        .hamburger {
          display: none;
          background: transparent;
          border: 1px solid rgba(148,163,184,.2);
          border-radius: 9px;
          color: #e8eef7;
          width: 40px; height: 40px;
          cursor: pointer;
          align-items: center; justify-content: center;
        }
        .mobile-menu {
          display: none;
          margin: 0 18px;
          background: rgba(13,20,36,.97);
          border: 1px solid rgba(148,163,184,.14);
          border-radius: 14px;
          padding: 12px;
          backdrop-filter: blur(16px);
        }
        .mobile-menu.open { display: block; }
        .mobile-menu a {
          display: flex; gap: 10px;
          padding: 12px;
          border-radius: 9px;
          color: #c6d0e0;
          text-decoration: none;
          font-family: var(--mono);
          font-size: 14px;
        }
        .mobile-menu a:hover { background: rgba(255,255,255,.05); }
        .mobile-menu a b { color: var(--accent); font-weight: 500; }
        @media (max-width: 860px) {
          .topnav-inner { padding: 0 18px; }
          .nav-desktop, .nav-cta { display: none; }
          .hamburger { display: inline-flex; }
        }
      `}</style>
      <header className={`topnav ${scrolled ? "scrolled" : ""}`}>
        <div className="topnav-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">&gt;_</span>
            <span className="brand-text">
              pratha<span>.dev</span>
            </span>
          </a>
          <ul className="nav-desktop">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>
                  <b>{l.num}.</b>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href="#contact">
            hire_me()
          </a>
          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
        <div className={`mobile-menu ${open ? "open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              <b>{l.num}.</b> {l.label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          border: 1px solid rgba(0,229,160,.3);
          background: rgba(13,20,36,.9);
          backdrop-filter: blur(12px);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(0,0,0,.5);
          transition: all 0.25s ease;
          z-index: 9999;
        }
        .scroll-top-btn:hover {
          transform: translateY(-3px);
          background: rgba(0,229,160,.15);
          box-shadow: 0 8px 28px rgba(0,229,160,.2);
        }
        .scroll-top-btn.hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateY(16px);
        }
      `}</style>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />

      <button
        className={`scroll-top-btn ${showScrollTop ? "" : "hidden"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

export default App;
