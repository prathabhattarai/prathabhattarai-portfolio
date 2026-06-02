export default function ContactSection() {
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/prathabhattarai",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.24 3.36.95.1-.74.4-1.24.72-1.52-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pratha-bhattarai-7b4755379/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96zM3 9h4v12H3zm7 0h3.83v1.71h.05c.53-1.01 1.84-2.08 3.79-2.08C21.7 8.63 24 10.74 24 14.74V21h-4v-5.55c0-1.32-.02-3.01-1.84-3.01-1.85 0-2.13 1.44-2.13 2.92V21h-4z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/prathaaa.diary/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zm5.4-8.8a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .contact-section {
          padding: 64px 48px;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        .contact-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.05;
          margin: 0 0 2.5rem 0;
        }

        .contact-title span {
          color: #4f6ef7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 2rem;
          align-items: start;
          min-width: 0;
        }

        .card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 2rem;
          min-width: 0;
          overflow: hidden;
        }

        .card-title {
          margin: 0 0 1.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #475569;
          font-weight: 600;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          border: 1px solid #dbe3ee;
          border-radius: 12px;
          padding: 0.95rem 1rem;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
          background: #fff;
          display: block;
        }

        .form-input { height: 46px; }

        .form-textarea {
          height: 130px;
          resize: none;
          max-width: 100%;
          min-width: 0;
        }

        .form-input::placeholder,
        .form-textarea::placeholder { color: #94a3b8; }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #4f6ef7;
          box-shadow: 0 0 0 3px rgba(79,110,247,0.12);
        }

        .submit-btn {
          width: 100%;
          height: 46px;
          border: none;
          border-radius: 12px;
          background: #4f6ef7;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: 'Inter', sans-serif;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          background: #3b56d4;
        }

        .info-item {
          padding: 1rem 0;
          border-bottom: 1px solid #edf2f7;
        }

        .info-item:last-of-type {
          border-bottom: none;
        }

        .info-label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .info-value {
          margin-top: 0.35rem;
          color: #0f172a;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .social-title {
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .social-row {
          display: flex;
          gap: 0.75rem;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          color: #4f6ef7;
          border-color: #4f6ef7;
          background: #f0f4ff;
          transform: translateY(-2px);
        }

        .social-btn svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        @media (max-width: 1100px) {
          .contact-section { padding: 40px 24px; }
          .contact-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .contact-section { padding: 32px 16px; }
        }
      `}</style>

      <section id="contact" className="contact-section">

        <h2 className="contact-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-grid">

          {/* ── Form Card ── */}
          <div className="card">
            <h3 className="card-title">Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" placeholder="Enter Your Name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="Enter Your Email" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell me about your project..." />
              </div>
              <button className="submit-btn" type="submit">Send Message</button>
            </form>
          </div>

          {/* ── Info Card ── */}
          <div className="card">
            <h3 className="card-title">Contact Information</h3>

            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">prathabhattarai2@gmail.com</div>
            </div>
            <div className="info-item">
              <div className="info-label">Phone</div>
              <div className="info-value">+977 98XXXXXXXX</div>
            </div>
            <div className="info-item">
              <div className="info-label">Location</div>
              <div className="info-value">Inaruwa- Sunsari, Nepal</div>
            </div>

            <div className="social-title">Social Links</div>
            <div className="social-row">
              {socialLinks.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className="social-btn"
                  title={item.name}
                  onClick={() => handleSocialClick(item.url)}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}