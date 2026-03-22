export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-copy">© {year} Divyesh Challa. Built with React + Vite.</p>
      <nav className="footer-links">
        <a href="https://github.com/Divyesh-Challa" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:divyeshchallavgr@gmail.com">Email</a>
        <a href="https://linkedin.com/in/your-linkedin-here" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </footer>
  )
}
