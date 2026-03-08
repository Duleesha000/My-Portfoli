import "./App.css";
import profile from "./assets/profile.jpeg";

const projects = [
  {
    title: "E-commerce Mobile Website (Front-End & Back-End)",
    tech: ["JavaScript"],
    desc:
      "A full e-commerce system with both front-end and back-end features, focusing on product browsing and user interactions.",
    repo: "https://github.com/Duleesha000/E-commerce_Mobile_web-site_font--end_and_back-end",
    demo: "", // optional: add live demo link later
    highlights: ["Responsive UI & user flow", "Clean structure and reusable components"],
  },
  {
    title: "Smart Water Bottle",
    tech: ["JavaScript"],
    desc:
      "A smart concept project to support tracking and managing water intake with a web-based approach.",
    repo: "https://github.com/Duleesha000/Smart_water_bottel",
    demo: "",
    highlights: ["Practical IoT-inspired concept", "Simple UI for tracking / interaction"],
  },
  {
    title: "Voting Web Site",
    tech: ["JavaScript"],
    desc:
      "An online voting website built to demonstrate user flows and a simple voting experience.",
    repo: "https://github.com/Duleesha000/Voting_web_site",
    demo: "",
    highlights: ["User-friendly voting flow", "Clear navigation and layout"],
  },
  {
    title: "E-store Pexplanet",
    tech: ["HTML"],
    desc:
      "An online store style website focused on clean layout, structure, and responsive UI design.",
    repo: "https://github.com/Duleesha000/E-store_Pexplanet",
    demo: "",
    highlights: ["Responsive layout", "Clean product-style page structure"],
  },
  {
    title: "Web Page for Store",
    tech: ["HTML"],
    desc:
      "A store landing page with a modern structure and sections for showcasing products or services.",
    repo: "https://github.com/Duleesha000/Web-page-for--store",
    demo: "",
    highlights: ["Modern landing page sections", "Readable layout & spacing"],
  },
];

const skills = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "Backend", items: ["Node.js", "ASP.NET Core", "REST APIs"] },
  { group: "Database", items: ["Firebase", "PostgreSQL"] },
  { group: "Tools", items: ["Git/GitHub", "Postman", "VS Code"] },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <nav className="nav">
          <a className="brand" href="#top" aria-label="Go to top">
            NM
          </a>

          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero" id="top">
          <div className="heroText">
            <p className="badge">Available for internships & projects</p>

            <h1 className="title">Nimesh Makevitage</h1>

            <p className="subtitle">
              Fourth-Year Software Engineering Student at Deakin University
              <span className="dot"> • </span>
              Full-Stack Web & IoT Developer
            </p>

            <p className="intro">
              I build modern web applications and practical software projects. I enjoy
              working on clean UI, backend APIs, and real-world solutions.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#projects">
                View Projects
              </a>

              <a
                className="btn ghost"
                href="https://github.com/Duleesha000"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              
              <a
  className="btn ghost"
  href="/My-Portfolio/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume

              </a>
              <a
                className="btn ghost"
                href="https://www.linkedin.com/in/nimesh-makevitage-b4212b2a7/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a className="btn ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>

          {/* PHOTO HERO CARD */}
          <div className="heroCard photoCard">
            <img src={profile} alt="Nimesh Makevitage" className="profileImg" />

            <div className="photoInfo">
              <p className="photoName">Nimesh Makevitage</p>
              <p className="photoRole">Full-Stack Web & IoT Developer</p>
            </div>

            <div className="miniStats">
              <span className="miniTag">Full-Stack</span>
              <span className="miniTag">UI</span>
              <span className="miniTag">IoT</span>
            </div>
          </div>
        </section>
      </header>

      <main className="main">
        {/* ABOUT */}
        <section className="section" id="about">
          <div className="sectionHeader">
            <h2>About</h2>
            <p>
              I’m a fourth-year Software Engineering student at Deakin University. I’m
              interested in building full-stack applications (React + APIs) and exploring
              IoT-based systems. I like creating clean, reliable software that solves real problems.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="sectionHeader">
            <h2>Projects</h2>
            <p>Selected projects from my GitHub.</p>
          </div>

          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <div className="cardTop">
                  <h3>{p.title}</h3>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="cardDesc">{p.desc}</p>

                {/* Highlights */}
                <ul className="bullets">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="cardActions">
                  <a
                    className="btn small ghost"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>

                  {p.demo ? (
                    <a
                      className="btn small primary"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="btn small ghost disabledBtn">Live (soon)</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="sectionHeader">
            <h2>Skills</h2>
            <p>Tools and technologies I’m comfortable with.</p>
          </div>

          <div className="skillGrid">
            {skills.map((s) => (
              <div key={s.group} className="skillCard">
                <h3>{s.group}</h3>
                <div className="skillPills">
                  {s.items.map((i) => (
                    <span key={i} className="pill">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="sectionHeader">
            <h2>Contact</h2>
            <p>Let’s connect.</p>
          </div>

          <div className="contactCard">
            <div className="contactRow">
              <span className="contactLabel">Email</span>
              <a className="contactLink" href="mailto:nimeshmakevitage@gmail.com">
                nimeshmakevitage@gmail.com
              </a>
            </div>

            <div className="contactRow">
              <span className="contactLabel">GitHub</span>
              <a
                className="contactLink"
                href="https://github.com/Duleesha000"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Duleesha000
              </a>
            </div>

            <div className="contactRow">
              <span className="contactLabel">LinkedIn</span>
              <a
                className="contactLink"
                href="https://www.linkedin.com/in/nimesh-makevitage-b4212b2a7/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/nimesh-makevitage
              </a>
            </div>

            <div className="contactRow">
              <span className="contactLabel">Location</span>
              <span className="contactValue">Melbourne, Australia</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nimesh Makevitage • Portfolio</p>
      </footer>
    </div>
  );
}
