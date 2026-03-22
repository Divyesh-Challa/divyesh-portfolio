const highlights = [
  {
    icon: '🎓',
    title: 'Computing Science @ UofA',
    desc: 'Currently studying CS at the University of Alberta, Edmonton.',
  },
  {
    icon: '💻',
    title: 'Frontend Focus',
    desc: 'Passionate about building clean, user-friendly web interfaces.',
  },
  {
    icon: '📚',
    title: 'Always Learning',
    desc: 'Actively studying React, JavaScript, and responsive design fundamentals.',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid fade-in">
          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">A student who loves building things for the web.</h2>
            <p>
              I'm Divyesh Challa, a Computing Science student at the University of Alberta with
              a strong interest in frontend development and UI/UX design. I enjoy turning ideas
              into clean, working web pages.
            </p>
            <p>
              I'm currently in the early stages of my development journey — learning HTML, CSS,
              JavaScript, and React. This portfolio itself is one of my first real React projects,
              and I built it from scratch to demonstrate what I've learned so far.
            </p>
            <p>
              I'm looking for internship opportunities where I can contribute to a real team,
              keep growing my skills, and learn from experienced developers.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((h) => (
              <div className="highlight-card" key={h.title}>
                <div className="highlight-icon">{h.icon}</div>
                <div className="highlight-title">{h.title}</div>
                <div className="highlight-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
