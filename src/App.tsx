import './App.css'

type Project = {
  name: string
  stack: string
  impact: string
  githubHref: string
  liveHref?: string
}

type Experience = {
  title: string
  organization: string
  details: string
}

const skills = {
  languages: ['Python', 'TypeScript', 'Java', 'Go', 'Ruby', 'SQL', 'C', 'Rust'] as const,
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
  ] as const,
}

const projects: Project[] = [
  {
    name: 'CourseMatch',
    stack: 'Ruby on Rails + Postgres',
    impact:
      'Built backend-first flows for secure authentication, course history management, schedule ratings, and profile-driven peer-based schedule discovery at George Mason University.',
    githubHref: 'https://github.com/JamesJLA/course_match_gmu2',
    liveHref: 'https://course-match-gmu2.onrender.com',
  },
  {
    name: 'AI Agent CLI',
    stack: 'Python',
    impact:
      'Created a recursive CLI agent that locates relevant files, analyzes code, identifies issues, and applies automated fixes to accelerate debugging and refactoring.',
    githubHref: 'https://github.com/JamesJLA/pyagent',
  },
  {
    name: 'OpenCode Contribution',
    stack: 'TypeScript',
    impact:
      'Contributed unit tests for async utility functions in a large open-source AI terminal agent to improve reliability and maintainability in a mature codebase.',
    githubHref: 'https://github.com/anomalyco/opencode',
  },
  {
    name: 'Black-Scholes Option Pricer',
    stack: 'Go + Bubble Tea',
    impact:
      'Implemented option pricing and P/L analysis logic, then packaged it in an interactive terminal UI with a dynamic heatmap.',
    githubHref: 'https://github.com/JamesJLA/option-pricer-tui',
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
] as const

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="eyebrow">Portfolio</p>
      <h1 id="hero-heading">James Alexander</h1>
      <p className="lead">
        Backend-leaning full-stack engineer focused on web services, developer tooling, and
        AI-assisted applications — with experience shipping projects across Rails, TypeScript,
        Go, and Python.
      </p>
      <p className="hero-target">
        Currently seeking <strong>full-time Software Engineering roles</strong> with a focus on
        backend, infrastructure, or AI tooling.
      </p>
      <div className="hero-meta">
        <span>George Mason University — B.S. Computer Science (May 2026)</span>
        <span>Fairfax, VA</span>
      </div>
      <div className="hero-actions">
        <a
          className="resume-button"
          href="/assets/James_Alexander_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
        <nav
          className="link-row"
          aria-label="External profile links"
        >
          {profileLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="section-block" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Technical Skills</h2>
      <div className="skill-group">
        <h3>Languages</h3>
        <div className="chip-row" aria-label="Programming languages">
          {skills.languages.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="skill-group">
        <h3>Tools, Systems, and Frameworks</h3>
        <div className="chip-row" aria-label="Tools, systems, and frameworks">
          {skills.tools.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="section-block" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Selected Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.name}
            className="project-card project-card--clickable"
            role="link"
            tabIndex={0}
            aria-label={`${project.name} — open GitHub`}
            onClick={() => window.open(project.githubHref, '_blank', 'noopener,noreferrer')}
            onKeyDown={(event) => {
              if (event.key !== 'Enter' && event.key !== ' ') return
              event.preventDefault()
              window.open(project.githubHref, '_blank', 'noopener,noreferrer')
            }}
          >
            <p className="project-stack">{project.stack}</p>
            <h3>{project.name}</h3>
            <p>{project.impact}</p>
            <div className="project-actions" aria-label={`${project.name} links`}>
              <a
                href={project.githubHref}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                GitHub
              </a>
              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="section-block" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience Highlights</h2>
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
  )
}

function App() {
  return (
    <main className="portfolio">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  )
}

export default App
