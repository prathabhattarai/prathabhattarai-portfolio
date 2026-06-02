export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .site-footer {
          width: 100%;
          padding: 0.5rem 1.25rem;
          border-top: 1px solid rgba(15,23,42,0.06);
          background: var(--ice-bg-main, #ffffff);
        }

        .site-footer-inner {
          width: min(100%, 1100px);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .footer-text {
          margin: 0;
          color: rgba(15,23,42,0.85);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .footer-accent {
          color: var(--ice-accent, #4f6ef7);
          font-weight: 800;
        }
      `}</style>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-text">© {year} Pratha Bhattarai</p>
          <p className="footer-text">
            Built with <span className="footer-accent">React</span>
          </p>
        </div>
      </footer>
    </>
  );
}
