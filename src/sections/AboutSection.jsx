import { useRef } from "react";
import profileImage from "../assets/images/Profile.jpeg";

export default function AboutSection() {
  const photoCardRef = useRef(null);

  const stats = [
    { value: "2+", label: "Academic Projects" },
    { value: "100%", label: "Dedication" },
    { value: "2", label: "Years Learning" },
  ];

  const highlights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      text: "BSc (Hons) Computing — Sundarharicha",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      text: " Aspiring Frontend Developer & SEO Learner",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      ),
      text: "Inaruwa- Sunsari, Nepal",
    },
  ];

  const handlePhotoMouseMove = (e) => {
    const card = photoCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handlePhotoMouseLeave = () => {
    const card = photoCardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600;700;800;900&display=swap');

        .about-section {
          padding: 44px 48px;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        .about-separator {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, #cbd5e1, transparent);
          margin-bottom: 60px;
        }

        /* Full width — no max-width cap */
        .about-inner {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        /* LEFT */
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          justify-content: center;
        }

        .about-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-start;
        }

        .about-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.05;
          margin: 0;
        }

        .about-title span {
          color: #4f6ef7;
        }

        .about-subline {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4f6ef7;
        }

        .about-bio {
          font-size: 1rem;
          line-height: 1.85;
          color: #475569;
          font-weight: 500;
          background: #fff;
          border-radius: 0 12px 12px 0;
          padding: 1.25rem 1.25rem 1.25rem 1.5rem;
          border: 1px solid #e2e8f0;
          border-left: 3px solid #4f6ef7;
          margin: 0;
        }

        /* HIGHLIGHTS */
        .highlights {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0f172a;
          transition: all 0.2s ease;
        }

        .highlight-item:hover {
          border-color: #4f6ef7;
          background: #f0f4ff;
          transform: translateX(4px);
        }

        .highlight-icon {
          width: 18px;
          height: 18px;
          color: #4f6ef7;
          display: flex;
          flex-shrink: 0;
        }

        .highlight-icon svg {
          width: 18px;
          height: 18px;
        }

        /* STATS */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding-top: 0.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 1rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          transition: all 0.2s ease;
        }

        .stat-card:hover {
          border-color: #4f6ef7;
          transform: translateY(-3px);
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 900;
          color: #0f172a;
        }

        .stat-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          text-align: center;
        }

        /* PHOTO */
        .photo-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .photo-card {
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4/5;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          background: #fff;
          box-shadow: 0 24px 60px rgba(79, 110, 247, 0.1);
          transition: transform 0.15s ease-out;
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        @media (max-width: 1100px) {
          .about-section { padding: 40px 24px; }
          .about-inner { grid-template-columns: 1fr; gap: 32px; }
          .photo-wrap { order: -1; }
          .photo-card { max-width: 360px; }
        }

        @media (max-width: 768px) {
          .about-section { padding: 32px 16px; }
          .stats-row { gap: 0.6rem; }
          .stat-value { font-size: 1.4rem; }
        }
      `}</style>

      <section id="about" className="about-section">

        <div className="about-separator" />

        <div className="about-inner">

          {/* LEFT */}
          <div className="about-content">
            <div className="about-title-wrap">
              <div className="about-subline">Who I Am</div>
              <h2 className="about-title">
                About <span>Me</span>
              </h2>
            </div>

            <p className="about-bio">
      
My name is Pratha Bhattarai, and I am currently pursuing a Bachelor’s degree in BSc (Hons) Computing. I am an aspiring Frontend Developer with a strong interest in SEO and creating modern, user-friendly web experiences.

I enjoy designing and developing responsive websites, optimizing them for better performance and search visibility, and continuously learning new technologies to enhance my skills.



            </p>

            <div className="highlights">
              {highlights.map((h, i) => (
                <div className="highlight-item" key={i}>
                  <span className="highlight-icon">{h.icon}</span>
                  {h.text}
                </div>
              ))}
            </div>

            <div className="stats-row">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="photo-wrap">
            <div
              className="photo-card"
              ref={photoCardRef}
              onMouseMove={handlePhotoMouseMove}
              onMouseLeave={handlePhotoMouseLeave}
            >
              <img src={profileImage} alt="Pratha Bhattarai" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}