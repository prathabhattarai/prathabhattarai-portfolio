import {projects} from "../data/projects";

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .projects-section {
          padding: 30px 48px;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        .projects-inner {
          margin: 0 auto;
        }

        .projects-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.05;
          margin: 0 0 2.5rem 0;
        }

        .projects-title span {
          color: #4f6ef7;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .project-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: #4f6ef7;
          box-shadow: 0 16px 48px rgba(79, 110, 247, 0.12);
        }

        .project-image-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
        }

        .project-image {
          width: 100%;
          height: 100%;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-name {
          margin: 0 0 0.6rem 0;
          color: #0f172a;
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .project-desc {
          margin: 0 0 1rem 0;
          color: #64748b;
          font-size: 0.92rem;
          line-height: 1.65;
          font-weight: 500;
          min-height: 60px;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.25rem;
        }

        .tag {
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          background: #f1f5f9;
          color: #475569;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.28rem 0.65rem;
          letter-spacing: 0.03em;
        }

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .actions.single {
          grid-template-columns: 1fr;
        }

        .action-btn {
          height: 42px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          color: #0f172a;
          font-size: 0.8rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-weight: 700;
          display: grid;
          place-items: center;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: 'Inter', sans-serif;
        }

        .action-btn:hover {
          border-color: #4f6ef7;
          color: #4f6ef7;
          background: #f0f4ff;
        }

        .action-btn.primary {
          background: #4f6ef7;
          border-color: #4f6ef7;
          color: #fff;
        }

        .action-btn.primary:hover {
          background: #3b56d4;
          border-color: #3b56d4;
          color: #fff;
        }

        @media (max-width: 1100px) {
          .projects-section { padding: 40px 24px; }
        }

        @media (max-width: 768px) {
          .projects-section { padding: 32px 16px; }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-inner">

          <h2 className="projects-title">
            My <span>Projects</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project) => {
              const isGymProject = project.title.toLowerCase().includes("gym");
              const isGradient = project.image.includes("linear-gradient");
              const imageStyle = isGradient
                ? { background: project.image }
                : { backgroundImage: "url('" + project.image + "')", backgroundSize: "cover", backgroundPosition: "top center" };

              return (
                <article className="project-card" key={project.title}>

                  <div className="project-image-wrapper">
                    <div className="project-image" style={imageStyle} />
                  </div>

                  <div className="project-content">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    <div className="tag-row">
                      {project.tech.map((tech) => (
                        <span className="tag" key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className={isGymProject ? "actions single" : "actions"}>
                      <a
                        className="action-btn"
                        href={project.sourceLink || "#"}
                        target={project.sourceLink ? "_blank" : undefined}
                        rel={project.sourceLink ? "noopener noreferrer" : undefined}
                        onClick={(e) => !project.sourceLink && e.preventDefault()}
                      >
                        Source
                      </a>
                      {!isGymProject && (
                        <a
                          className="action-btn primary"
                          href={project.liveLink || "#"}
                          target={project.liveLink ? "_blank" : undefined}
                          rel={project.liveLink ? "noopener noreferrer" : undefined}
                          onClick={(e) => !project.liveLink && e.preventDefault()}
                        >
                          Live
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