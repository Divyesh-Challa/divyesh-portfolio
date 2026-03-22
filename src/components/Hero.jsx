import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="fade-in">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            Open to Internships
          </div>

          <h1 className="hero-title">
            Hi, I'm Divyesh<br />
            <em>Frontend Developer</em><br />
            in the Making.
          </h1>

          <p className="hero-description">
            Computing Science student at the University of Alberta, building skills in
            HTML, CSS, JavaScript, and React — one project at a time.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-value">UofA</span>
              <span className="hero-meta-label">University</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-value">CS</span>
              <span className="hero-meta-label">Program</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-value">2024</span>
              <span className="hero-meta-label">Start Year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
