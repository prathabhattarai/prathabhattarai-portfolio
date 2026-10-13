export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .site-footer {
          border-top: 1px solid rgba(148,163,184,.12);
          background: rgba(5,7,13,.9);
          backdrop-filter: blur(12px);
        }
        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 22px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer-left { font-family: var(--mono); font-size: 12.5px; color: #5b6b86; }
        .footer-left b { color: #e8eef7; font-weight: 600; }
        .footer-left span { color: var(--accent); }
        .footer-right { display:flex; align-items:center; gap:14px; font-family:var(--mono); font-size:12px; color:#5b6b86; }
        .footer-status { display:flex; align-items:center; gap:7px; color: var(--accent); background: rgba(0,229,160,.08); border:1px solid rgba(0,229,160,.22); padding:6px 12px; border-radius:99px; font-size:11.5px; }
        .footer-status i { width:7px;height:7px;border-radius:50%;background:currentColor; box-shadow:0 0 10px currentColor; }
        .back-top { color:#8b98af; text-decoration:none; border:1px solid rgba(148,163,184,.16); padding:7px 13px; border-radius:9px; transition:all .2s; }
        .back-top:hover { color: var(--accent); border-color: rgba(0,229,160,.4); }
        @media (max-width: 640px){ .footer-inner{padding:18px;} }
      `}</style>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            © {year} <b>pratha.dev</b> <span>—</span> built with React <span>♥</span> in Nepal
          </div>
          <div className="footer-right">
            <span className="footer-status"><i /> all_systems_operational</span>
            <a className="back-top" href="#home">cd ~ ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
