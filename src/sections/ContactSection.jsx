import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

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
        .contact { border-top: 1px solid rgba(148,163,184,.1); }
        .contact-grid { display:grid; grid-template-columns: 1.5fr 1fr; gap:18px; margin-top:44px; align-items:start; }
        .panel {
          background: linear-gradient(180deg, rgba(255,255,255,.03), transparent 40%), #0d1424;
          border: 1px solid rgba(148,163,184,.13);
          border-radius: 18px;
          overflow:hidden;
        }
        .panel-bar { display:flex; align-items:center; gap:8px; padding:12px 18px; border-bottom:1px solid rgba(148,163,184,.1); background: rgba(0,0,0,.22); font-family: var(--mono); font-size:12px; color:#5b6b86; }
        .panel-body { padding:26px; }
        .panel-title { font-size:1.05rem; font-weight:700; color:#fff; margin-bottom:4px; }
        .panel-sub { font-family: var(--mono); font-size:12px; color:#5b6b86; margin-bottom:20px; }
        .fld { margin-bottom:14px; }
        .fld label { display:block; font-family:var(--mono); font-size:12px; color:#8b98af; margin-bottom:7px; }
        .fld label span { color: var(--accent); }
        .inp, .ta {
          width:100%; box-sizing:border-box; display:block;
          background: rgba(5,7,13,.6);
          border:1px solid rgba(148,163,184,.16);
          border-radius:11px;
          padding:13px 14px;
          color:#e8eef7; font-size:.93rem; font-family: var(--sans);
          outline:none; transition: all .2s;
        }
        .ta { min-height:130px; resize:vertical; font-family: var(--sans); }
        .inp::placeholder,.ta::placeholder { color:#3f4d68; }
        .inp:focus,.ta:focus { border-color: rgba(0,229,160,.55); box-shadow: 0 0 0 3px rgba(0,229,160,.12); background: rgba(5,7,13,.9); }
        .send {
          width:100%; height:48px; border:none; border-radius:11px; cursor:pointer;
          background: linear-gradient(135deg,#00e5a0,#00c489);
          color:#04120c; font-weight:800; font-size:.9rem; font-family:var(--mono);
          transition: all .2s; margin-top:6px;
        }
        .send:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,229,160,.3); }
        .sent-ok { display:flex; align-items:center; gap:10px; margin-top:14px; font-family:var(--mono); font-size:12.5px; color:var(--accent); background: rgba(0,229,160,.08); border:1px solid rgba(0,229,160,.25); padding:11px 14px; border-radius:10px; }
        .info-row { padding:15px 0; border-bottom:1px solid rgba(148,163,184,.1); }
        .info-row:last-of-type { border-bottom:none; }
        .info-row small { font-family:var(--mono); font-size:11px; color:var(--accent); text-transform:lowercase; letter-spacing:.04em; }
        .info-row div { color:#e8eef7; font-weight:600; font-size:.94rem; margin-top:5px; word-break: break-all; }
        .social-row { display:flex; gap:10px; margin-top:16px; }
        .sbtn { width:44px;height:44px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.03);border:1px solid rgba(148,163,184,.16);color:#8b98af;cursor:pointer;transition:all .2s; }
        .sbtn:hover{color:var(--accent);border-color:rgba(0,229,160,.45);background:rgba(0,229,160,.08);transform:translateY(-2px);}
        .sbtn svg{width:18px;height:18px;fill:currentColor;}
        .avail { display:flex; align-items:center; gap:10px; background: rgba(0,229,160,.07); border:1px solid rgba(0,229,160,.22); border-radius:12px; padding:13px 15px; margin-bottom:18px; font-size:.86rem; color:#a7f3d0; }
        .avail i { width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent); flex-shrink:0; }
        @media (max-width: 920px){ .contact-grid{grid-template-columns:1fr;} }
      `}</style>

      <section id="contact" className="contact">
        <div className="section-shell">
          <span className="section-kicker">{"// 05. contact"}</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Get In <span className="accent">Touch</span>
          </h2>
          <p className="section-desc" style={{ marginTop: 12 }}>
            <span className="mono" style={{ color: "var(--accent)" }}>$</span> ./send_message.sh — have a
            project, internship, or collab in mind? My inbox is open.
          </p>

          <div className="contact-grid">
            <div className="panel">
              <div className="panel-bar">
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 8 }}>~/contact/new_message.form</span>
              </div>
              <div className="panel-body">
                <div className="panel-title">Send a Message</div>
                <div className="panel-sub">{"// usually replies within 24h"}</div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    setTimeout(() => setSent(false), 4000);
                    e.currentTarget.reset();
                  }}
                >
                  <div className="fld">
                    <label><span>$</span> your_name --required</label>
                    <input className="inp" type="text" placeholder="Jane Doe" required />
                  </div>
                  <div className="fld">
                    <label><span>$</span> your_email --required</label>
                    <input className="inp" type="email" placeholder="jane@company.com" required />
                  </div>
                  <div className="fld">
                    <label><span>$</span> message --required</label>
                    <textarea className="ta" placeholder="Hey Pratha, let's build something great..." required />
                  </div>
                  <button className="send" type="submit">$ send_message --submit</button>
                  {sent && <div className="sent-ok">✓ message_queued — I&apos;ll get back to you soon.</div>}
                </form>
              </div>
            </div>

            <div className="panel">
              <div className="panel-bar">
                <span style={{ color: "var(--accent)" }}>●</span> ~/contact/info.json
              </div>
              <div className="panel-body">
                <div className="avail">
                  <i />
                  Currently @ Bardali Creation • Open to collabs
                </div>
                <div className="info-row">
                  <small>"role":</small>
                  <div>Part-time Frontend Developer</div>
                </div>
                <div className="info-row">
                  <small>"company":</small>
                  <div>Bardali Creation Pvt. Ltd.</div>
                </div>
                <div className="info-row">
                  <small>"email":</small>
                  <div>prathabhattarai2@gmail.com</div>
                </div>
                <div className="info-row">
                  <small>"location":</small>
                  <div>Inaruwa, Sunsari — Nepal</div>
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#5b6b86", marginTop: 18, textTransform: "uppercase", letterSpacing: ".1em" }}>
                  {"// socials"}
                </div>
                <div className="social-row">
                  {socialLinks.map((item) => (
                    <button type="button" key={item.name} className="sbtn" title={item.name} onClick={() => handleSocialClick(item.url)}>
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
