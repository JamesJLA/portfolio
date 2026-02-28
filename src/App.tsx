import './App.css'

type Project = {
  name: string
  stack: string
  impact: string
  href?: string
}

type Experience = {
  title: string
  organization: string
  details: string
}

const skills = {
  languages: ['Python', 'TypeScript', 'Java', 'Go', 'Ruby', 'SQL', 'C', 'Rust'],
  tools: [
    'Linux',
    'Rails',
    'Maven',
    'React',
    'JavaFX',
    'Postgres',
    'MySQL',
    'MongoDB',
    'Docker',
    'Git',
  ],
}

const projects: Project[] = [
  {
    name: 'CourseMatch',
    stack: 'Ruby on Rails + Postgres',
    impact:
      'Built backend-first flows for secure authentication, course history management, schedule ratings, and profile-driven peer schedule discovery at George Mason University.',
    href: 'https://course-match-gmu2.onrender.com',
  },
  {
    name: 'AI Agent CLI',
    stack: 'Python',
    impact:
      'Created a recursive CLI agent that locates relevant files, analyzes code, identifies issues, and applies automated fixes to accelerate debugging and refactoring.',
  },
  {
    name: 'OpenCode Contribution',
    stack: 'TypeScript',
    impact:
      'Contributed unit tests for async utility functions in a large open-source AI terminal agent to improve reliability and maintainability in a mature codebase.',
  },
  {
    name: 'Black-Scholes Option Pricer',
    stack: 'Go + Bubble Tea',
    impact:
      'Implemented option pricing and P/L analysis logic, then packaged it in an interactive terminal UI with a dynamic heatmap.',
  },
]

const experiences: Experience[] = [
  {
    title: 'Lethean (Hackathon Project)',
    organization: 'Agents For Impact - Howard University',
    details:
      'Built backend services for an AI healthcare app, including file ingestion, structured JSON extraction, and appointment record generation with reminder-ready dashboard data.',
  },
  {
    title: 'GlimpseAI (Hackathon Project)',
    organization: 'PatriotHacks - Fairfax, VA',
    details:
      'Developed TypeScript/Next.js request and data flows for automated video generation workflows and built a landing page to showcase generated outputs.',
  },
  {
    title: 'Marriage Status Application',
    organization: 'Software Engineering Course - George Mason University',
    details:
      'Collaborated on a Java desktop app with MySQL-backed role-based review and approval workflows, using Maven, Docker, Git, and JavaFX.',
  },
  {
    title: 'Mathnasium Instructor',
    organization: 'Haymarket, VA',
    details:
      'Strengthened communication and problem-solving by guiding students through advanced math concepts and adapting instruction to individual progress.',
  },
]

const profileLinks = [
  { label: 'Email', href: 'mailto:james.alexander9204@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jamesjla/' },
  { label: 'GitHub', href: 'https://github.com/JamesJLA' },
  { label: 'Handshake', href: 'https://app.joinhandshake.com/profiles/jamesjla' },
]

function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>James Alexander</h1>
        <p className="lead">
          Computer Science student focused on backend web development and systems programming,
          with hands-on work across scalable services, developer tooling, and AI-assisted
          applications.
        </p>
        <div className="hero-meta">
          <span>George Mason University - B.S. Computer Science (May 2026)</span>
          <span>Fairfax, VA</span>
        </div>
        <div className="hero-actions">
          <a className="resume-button" href="/assets/James_Alexander_Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <div className="link-row" aria-label="External profile links">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2>Technical Skills</h2>
        <div className="skill-group">
          <h3>Languages</h3>
          <div className="chip-row">
            {skills.languages.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-group">
          <h3>Tools, Systems, and Frameworks</h3>
          <div className="chip-row">
            {skills.tools.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2>Selected Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="project-stack">{project.stack}</p>
              <h3>{project.name}</h3>
              <p>{project.impact}</p>
              {project.href && (
                <a href={project.href} target="_blank" rel="noreferrer">
                  View Project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Experience Highlights</h2>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.title} className="timeline-item">
              <h3>{experience.title}</h3>
              <p className="org">{experience.organization}</p>
              <p>{experience.details}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
