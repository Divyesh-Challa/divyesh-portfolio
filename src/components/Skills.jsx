const skillGroups = [
  {
    title: 'Languages',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Vite'],
  },
  {
    title: 'Styling',
    skills: ['CSS Flexbox', 'CSS Grid', 'Responsive Design', 'CSS Variables'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'npm'],
  },
  {
    title: 'Currently Learning',
    skills: ['React Hooks', 'Component Architecture', 'Accessibility (a11y)'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">
            A focused set of frontend skills I'm actively building — with honest labeling of
            what I'm still learning.
          </p>
        </div>

        <div className="skills-grid fade-in">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <p className="skill-group-title">{group.title}</p>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li className="skill-item" key={skill}>
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
