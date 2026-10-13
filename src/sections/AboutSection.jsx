import { useRef } from "react";
import profileImage from "../assets/images/Profile.jpeg";

export default function AboutSection() {
  const photoCardRef = useRef(null);

  const highlights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      title: "education",
      text: "BSc (Hons) Computing — Sundarharicha",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "current_role",
      text: "Part-time Frontend Developer @ Bardali Creation Pvt. Ltd.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
      title: "location",
      text: "Inaruwa, Sunsari — Nepal",
    },
  ];

  const handlePhotoMouseMove = (e) => {
    const card = photoCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePhotoMouseLeave = () => {
    const card = photoCardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <style>{`
        .about { border-top: 1px solid rgba(148,163,184,.1); background: linear-gradient(180deg, rgba(255,255,255,.012), transparent 30%); }
        .about-grid { display: grid; grid-template-columns: 1fr 380px; gap: 56px; align-items: center; margin-top: 44px; }
        .bio-card {
          background: linear-gradient(180deg, rgba(255,255,255,.03), transparent), #0d1424;
          border: 1px solid rgba(148,163,184,.13);
          border-radius: 16px;
          padding: 26px;
          position: relative;
          overflow: hidden;
        }
        .bio-card::before { content:""; position:absolute; left:0; top:0; bottom:0; width:3px; background: linear-gradient(180deg, var(--accent), var(--accent-2)); }
        .bio-card p { font-size: .99rem; line-height: 1.8; color: #9aa8c0; }
        .bio-card p + p { margin-top: 14px; }
        .bio-card b { color: #e8eef7; font-weight: 600; }
        .hl-list { display:flex; flex-direction:column; gap: 10px; margin-top: 18px; }
        .hl {
          display:flex; align-items:center; gap:14px;
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(148,163,184,.12);
          border-radius: 12px;
          padding: 13px 15px;
          transition: all .2s;
        }
        .hl:hover { border-color: rgba(0,229,160,.4); background: rgba(0,229,160,.05); transform: translateX(5px); }
        .hl-ic { width: 38px; height: 38px; border-radius: 10px; display:grid; place-items:center; background: rgba(0,229,160,.1); border: 1px solid rgba(0,229,160,.22); color: var(--accent); flex-shrink:0; }
        .hl-ic svg { width: 18px; height: 18px; }
        .hl small { display:block; font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing:.06em; }
        .hl span { font-size: .9rem; font-weight: 600; color: #dbe3ef; }
        .photo-frame { position: relative; }
        .photo-frame::before { content:""; position:absolute; inset: 16px -14px -14px 16px; border:1px solid rgba(0,229,160,.25); border-radius:20px; z-index:0; }
        .photo-card {
          position:relative; z-index:1;
          border-radius: 18px; overflow:hidden;
          border: 1px solid rgba(148,163,184,.18);
          background:#0d1424;
          aspect-ratio: 4/5;
          transition: transform .18s ease;
          box-shadow: 0 30px 70px rgba(0,0,0,.5);
        }
        .photo-card img { width:100%; height:100%; object-fit:cover; object-position:center top; filter: saturate(1.02) contrast(1.03); }
        .photo-badge {
          position:absolute; z-index:2; left:18px; bottom:18px; right:18px;
          display:flex; align-items:center; justify-content:space-between;
          background: rgba(5,7,13,.78); backdrop-filter: blur(12px);
          border:1px solid rgba(148,163,184,.16); border-radius:12px; padding:12px 14px;
        }
        .photo-badge b { color:#fff; font-size:.88rem; display:block; }
        .photo-badge small { font-family:var(--mono); font-size:11px; color:var(--accent); }
        .photo-badge .dot-live { width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent); }
        @media (max-width: 980px) { .about-grid { grid-template-columns: 1fr; } .photo-frame { max-width: 380px; margin: 0 auto; width:100%; } }
      `}</style>

      <section id="about" className="about">
        <div className="section-shell">
          <span className="section-kicker">{"// 02. about"}</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            About <span className="accent">Me</span>
          </h2>
          <p className="section-desc" style={{ marginTop: 12 }}>
            <span className="mono" style={{ color: "var(--accent)" }}>$</span> cat about.txt — a developer who
            learns fast, builds clean, and optimizes for real users.
          </p>

          <div className="about-grid">
            <div>
              <div className="bio-card">
                <p>
                  I&apos;m <b>Pratha Bhattarai</b>, a <b>Full Stack Developer</b> pursuing{" "}
                  <b>BSc (Hons) Computing</b>. I&apos;m currently working part-time as a{" "}
                  <b>Frontend Developer at Bardali Creation Pvt. Ltd.</b>, building responsive,
                  user-friendly web interfaces.
                </p>
                <p>
                  I work across the stack with <b>React, Node.js & MySQL</b> — from pixel-perfect
                  frontend to clean APIs. My goal: ship products that are fast, accessible,
                  and delightful.
                </p>
              </div>

              <div className="hl-list">
                {highlights.map((h, i) => (
                  <div className="hl" key={i}>
                    <span className="hl-ic">{h.icon}</span>
                    <div>
                      <small>${h.title}</small>
                      <span>{h.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="photo-frame">
              <div className="photo-card" ref={photoCardRef} onMouseMove={handlePhotoMouseMove} onMouseLeave={handlePhotoMouseLeave}>
                <img src={profileImage} alt="Pratha Bhattarai" />
                <div className="photo-badge">
                  <div>
                    <b>Pratha Bhattarai</b>
                    <small>~/inaruwa — nepal</small>
                  </div>
                  <span className="dot-live" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
