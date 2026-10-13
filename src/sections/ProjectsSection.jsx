import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        .projects { border-top: 1px solid rgba(148,163,184,.1); background: linear-gradient(180deg, rgba(0,229,160,.025), transparent 35%); }
        .proj-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:18px; margin-top:44px; }
        .proj {
          background: #0d1424;
          border: 1px solid rgba(148,163,184,.13);
          border-radius: 18px;
          overflow: hidden;
          transition: all .25s;
          display:flex; flex-direction:column;
        }
        .proj:hover { transform: translateY(-6px); border-color: rgba(0,229,160,.35); box-shadow: 0 24px 60px rgba(0,0,0,.5), 0 0 0 1px rgba(0,229,160,.12); }
        .proj-bar { display:flex; align-items:center; justify-content:space-between; padding:12px 16px; border-bottom:1px solid rgba(148,163,184,.1); background: rgba(0,0,0,.2); }
        .proj-dots { display:flex; gap:6px; }
        .proj-dots i { width:10px;height:10px;border-radius:50%; display:block; }
        .proj-repo { font-family: var(--mono); font-size:11.5px; color:#5b6b86; }
        .proj-repo b { color: var(--accent); font-weight:500; }
        .proj-img-wrap { height:210px; overflow:hidden; position:relative; border-bottom:1px solid rgba(148,163,184,.1); }
        .proj-img { width:100%; height:100%; transition: transform .5s cubic-bezier(.2,.8,.2,1); }
        .proj:hover .proj-img { transform: scale(1.05); }
        .proj-img-wrap::after { content:""; position:absolute; inset:0; background: linear-gradient(180deg, transparent 55%, rgba(5,7,13,.55)); pointer-events:none; }
        .proj-body { padding:22px; display:flex; flex-direction:column; flex:1; }
        .proj-title { font-size:1.2rem; font-weight:700; letter-spacing:-.02em; color:#fff; display:flex; align-items:center; gap:10px; }
        .proj-title svg { width:18px;height:18px;color:var(--accent); flex-shrink:0; }
        .proj-desc { margin-top:10px; color:#8b98af; font-size:.92rem; line-height:1.65; flex:1; }
        .tag-row { display:flex; flex-wrap:wrap; gap:7px; margin:16px 0 18px; }
        .tag { font-family: var(--mono); font-size:11px; color:#a7f3d0; background: rgba(0,229,160,.08); border:1px solid rgba(0,229,160,.2); padding:5px 10px; border-radius:99px; }
        .actions { display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
        .actions.single { grid-template-columns: 1fr; }
        .abtn {
          height:44px; border-radius:11px; display:flex; align-items:center; justify-content:center; gap:8px;
          font-family:var(--mono); font-size:12.5px; font-weight:600; text-decoration:none; transition:all .2s;
          border:1px solid rgba(148,163,184,.18); background: rgba(255,255,255,.03); color:#dbe3ef;
        }
        .abtn:hover { border-color: rgba(0,229,160,.5); color: var(--accent); background: rgba(0,229,160,.07); transform: translateY(-1px); }
        .abtn.primary { background: linear-gradient(135deg,#00e5a0,#00c489); border-color:transparent; color:#04120c; }
        .abtn.primary:hover { filter:brightness(1.06); color:#04120c; box-shadow:0 8px 24px rgba(0,229,160,.3); }
        @media (max-width: 860px){ .proj-grid{grid-template-columns:1fr;} }
      `}</style>

      <section id="projects" className="projects">
        <div className="section-shell">
          <span className="section-kicker">{"// 04. projects"}</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Selected <span className="accent">Work</span>
          </h2>
          <p className="section-desc" style={{ marginTop: 12 }}>
            <span className="mono" style={{ color: "var(--accent)" }}>$</span> git log --oneline — things
            I&apos;ve designed, built, and deployed.
          </p>

          <div className="proj-grid">
            {projects.map((project) => {
              const isGymProject = project.title.toLowerCase().includes("gym");
              const isGradient = project.image.includes("linear-gradient");
              const imageStyle = isGradient
                ? { background: project.image }
                : { backgroundImage: "url('" + project.image + "')", backgroundSize: "cover", backgroundPosition: "top center" };

              return (
                <article className="proj" key={project.title}>
                  <div className="proj-bar">
                    <div className="proj-dots">
                      <i style={{ background: "#ff5f57" }} />
                      <i style={{ background: "#febc2e" }} />
                      <i style={{ background: "#28c840" }} />
                    </div>
                    <span className="proj-repo">
                      <b>▸</b> ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                    <span className="mono" style={{ fontSize: 11, color: "#334155" }}>— zsh</span>
                  </div>

                  <div className="proj-img-wrap">
                    <div className="proj-img" style={imageStyle} />
                  </div>

                  <div className="proj-body">
                    <h3 className="proj-title">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                      {project.title}
                    </h3>
                    <p className="proj-desc">{project.description}</p>

                    <div className="tag-row">
                      {project.tech.map((tech) => (
                        <span className="tag" key={tech}>#{tech}</span>
                      ))}
                    </div>

                    <div className={isGymProject ? "actions single" : "actions"}>
                      <a
                        className="abtn"
                        href={project.sourceLink || "#"}
                        target={project.sourceLink ? "_blank" : undefined}
                        rel={project.sourceLink ? "noopener noreferrer" : undefined}
                        onClick={(e) => !project.sourceLink && e.preventDefault()}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                        source
                      </a>
                      {!isGymProject && (
                        <a
                          className="abtn primary"
                          href={project.liveLink || "#"}
                          target={project.liveLink ? "_blank" : undefined}
                          rel={project.liveLink ? "noopener noreferrer" : undefined}
                          onClick={(e) => !project.liveLink && e.preventDefault()}
                        >
                          live_demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
