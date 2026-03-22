const projects = [
  {
    icon: '🌐',
    title: 'Personal Portfolio Website',
    desc: 'Designed and built a fully responsive portfolio site from scratch using React and Vite. Features a mobile hamburger menu, scroll-triggered animations using the Intersection Observer API, and a dark theme design system built with CSS custom properties.',
    tags: ['React', 'Vite', 'CSS', 'Responsive Design'],
    github: 'https://github.com/Divyesh-Challa',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            Every project is a chance to learn something new — here's what I've
            built so far, with more on the way.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card fade-in" key={p.title}>
              <div className="project-card-top">
                <span className="project-icon">{p.icon}</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}