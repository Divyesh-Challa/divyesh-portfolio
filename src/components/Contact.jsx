export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner fade-in">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm actively looking for frontend internship opportunities. Whether you have a role,
            a question, or just want to say hello — my inbox is open.
          </p>

          <div className="contact-links">
            <a
              href="mailto:divyeshchallavgr@gmail.com"
              className="btn btn-primary"
            >
              Send an Email
            </a>
            <a
              href="https://github.com/Divyesh-Challa"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-here"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
