import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Database, Download, ExternalLink, Github, GraduationCap, Heart,
  Linkedin, Mail, MapPin, Menu, Phone, Send, Sparkles, X, Award,
  BarChart3, BrainCircuit, Workflow, Layers3, FileText
} from "lucide-react";
import "./styles.css";

const LINKS = {
  github: "https://github.com/Vaishnavi646606",
  linkedin: "https://www.linkedin.com/in/vaishnavi-shewale-846861248",
  retailpulse: "https://github.com/Vaishnavi646606/RetailPulse-End-to-end-E-commerce-Analytics-and-Data-Engineering-Project",
  email: "mailto:vaishnavishewale10@gmail.com",
  phone: "tel:+918468807561"
};

const experiences = [
  { role: "Artificial Intelligence Intern", company: "Rachnakaar Enterprises Pvt. Ltd.", date: "Jan 2026 — Mar 2026", place: "Nashik", tags: ["Python", "LLM", "FastAPI", "PHP", "MySQL", "Hostinger", "Supabase", "Postman"], bullets: [
    "Developed AI-powered web applications using Python and FastAPI, reducing manual processing time by 30%.",
    "Performed data preprocessing, feature extraction, and model evaluation to improve model accuracy by 50%.",
    "Supported AI component integration into backend systems and real-world applications."
  ]},
  { role: "Artificial Intelligence Intern", company: "CodeAlpha", date: "Aug 2025 — Sep 2025", place: "Remote", tags: ["Python", "NLP"], bullets: [
    "Developed 2 AI/ML projects using Python, applying NLP, predictive modeling, and conversational AI techniques.",
    "Implemented predictive models and conversational chatbot functionality using Python and relevant AI/ML libraries and achieving 90% accuracy in model testing.",
    "Applied Python-based AI/ML libraries to build and test NLP workflows."
  ]},
  { role: "Full Stack Development Intern", company: "Acmegrade Solutions", date: "Apr 2024 — May 2024", place: "Remote", tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"], bullets: [
    "Learned and implemented frontend and backend technologies including HTML, CSS, JavaScript, and Node.js, achieving 90% task completion during the internship.",
    "Built 1 full-stack project using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.",
    "Participated in code reviews and hands-on mini-projects to apply full-stack concepts in real-world scenarios."
  ]}
];

const projects = [
  {
    number: "01", title: "RetailPulse", type: "DATA ANALYTICS · DATA ENGINEERING",
    desc: "RetailPulse — E-Commerce Analytics & Data Engineering Platform",
    tags: ["Python", "Pandas", "PostgreSQL", "SQL", "Power BI", "Git", "GitHub"],
    icon: BarChart3,
    link: LINKS.retailpulse, tone: "pink",
    highlights: [
      "Analyzed the Olist Brazilian E-Commerce dataset to assess data quality and identify business reporting requirements.",
      "Developed a Python-based ETL pipeline using Pandas to clean, transform, and load e-commerce data into PostgreSQL.",
      "Wrote SQL queries for sales and product analysis and built interactive Power BI dashboards to visualize revenue, order trends, and delivery performance."
    ]
  },
  {
    number: "02", title: "FitScore", type: "AI · RESUME & JOB MATCHING",
    desc: "FitScore — AI Resume & Job Matching Platform",
    tags: ["Python", "FastAPI", "Node.js", "React", "MongoDB", "Gemini", "LangGraph", "RAG", "Docker"],
    icon: BrainCircuit,
    link: LINKS.github, tone: "violet",
    highlights: [
      "Built an AI-powered resume–job matching platform combining skill matching, TF-IDF and MiniLM-based semantic similarity into an explainable FitScore.",
      "Implemented MongoDB vector search and RAG with Gemini for grounded job recommendations and explanations; added LangGraph tool calling, state persistence and human-in-the-loop approval for agentic workflows.",
      "Developed an end-to-end job retrieval and ranking pipeline with skill-gap analysis and cloud deployment using Docker, Vercel and Render."
    ]
  },
  {
    number: "03", title: "SafeSphere", type: "ANDROID · PERSONAL SAFETY",
    desc: "SafeSphere – Safety App for Women & Elderly",
    tags: ["Java", "Android Studio", "Vosk API", "React", "Next.js", "Supabase"],
    icon: Heart,
    link: LINKS.github, tone: "blue",
    highlights: [
      "Developed an Android safety application with 92% detection accuracy for voice-keyword and shake-trigger SOS activation.",
      "Implemented secure emergency contact storage and a sequential calling workflow to quickly alert trusted contacts.",
      "Integrated offline speech recognition and added two additional features: a siren alert and fake call for user safety."
    ]
  }
];

const skillGroups = [
  { title: "Programming", icon: Code2, items: ["Python", "Java", "SQL"] },
  { title: "Data & Visualization", icon: BarChart3, items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn", "Exploratory Data Analysis"] },
  { title: "AI / ML", icon: BrainCircuit, items: ["NLP", "Scikit-learn", "TensorFlow", "PyTorch", "LLMs", "RAG", "LangGraph"] },
  { title: "Databases & Backend", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "FastAPI", "Node.js"] },
  { title: "Tools & Platforms", icon: Workflow, items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman", "Android Studio", "Docker"] }
];

const education = [
  { school: "Savitribai Phule Pune University", degree: "B.E. in Computer Engineering", date: "2022 — 2026", result: "CGPA 7.78" },
  { school: "R.B.H. Girls School & Junior College", degree: "Higher Secondary Certificate (HSC)", date: "2022", result: "85.17%" },
  { school: "R.B.H. Girls School & Junior College", degree: "Secondary School Certificate (SSC)", date: "2020", result: "91.80%" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const nav = [["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Skills", "skills"], ["Education", "education"], ["Certifications", "certifications"], ["Contact", "contact"]];
  const closeMenu = () => setMenuOpen(false);

  function handleContact(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(form.get("subject") || "Portfolio enquiry");
    const body = encodeURIComponent(`Hi Vaishnavi,\n\n${form.get("message")}\n\nFrom: ${form.get("name")} (${form.get("email")})`);
    window.location.href = `mailto:vaishnavishewale10@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Vaishnavi Shewale home">
        <span className="brand-mark"><Sparkles size={18}/></span>
        <span className="brand-name"><strong>VAISHNAVI</strong><strong>SHEWALE</strong></span>
      </a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
      </nav>
      <a className="nav-resume" href="/certificates/Vaishnavi_Shewale_Resume.pdf" download><Download size={15}/> Resume</a>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> HELLO, I’M VAISHNAVI</div>
          <h1>Turning data into <span className="gradient-text">decisions.</span></h1>
          <h2>Data Analytics <span>&</span> AI/ML Engineer</h2>
          <p className="hero-description">Computer Engineering graduate with hands-on experience in analytics, Python, SQL, and AI/ML. I build data-driven solutions, explore intelligent systems, and turn complex data into meaningful insights.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact"><Send size={16}/> Let’s Connect <ArrowRight size={16}/></a>
            <a className="btn btn-outline" href="/certificates/Vaishnavi_Shewale_Resume.pdf" target="_blank" rel="noopener noreferrer"><FileText size={16}/> View Resume</a>
          </div>
          <div className="quick-links">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <a href={LINKS.email}><Mail size={17}/> Email</a>
            <span><MapPin size={17}/> Pune, India</span>
          </div>
          <div className="hero-note"><span className="note-dot"/> Open to opportunities in Data Analytics, AI/ML, and Software Engineering</div>
        </div>
        <div className="hero-visual">
          <div className="portrait-glow"/>
          <div className="portrait-frame"><img src="/vaishnavi.png" alt="Portrait of Vaishnavi Shewale"/></div>
          <div className="portrait-label"><span className="label-pulse"/> Curious mind. Data-driven heart.</div>
          <div className="float-card float-card-top"><Sparkles size={16}/><span>Always learning</span></div>
          <div className="float-card float-card-bottom"><BrainCircuit size={17}/><span>Analytics + AI</span></div>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
      </section>

      <section className="stacked-sections section-wrap">
        <article className="panel about-panel wide-panel" id="about">
          <div className="section-heading"><span className="heading-icon"><Sparkles size={18}/></span><div><span className="section-kicker">A LITTLE ABOUT ME</span><h3>About Me</h3></div></div>
          <div className="about-layout">
            <div className="about-main">
              <p>I’m a Computer Engineering graduate passionate about data analytics, AI/ML, and building real-world applications. I enjoy exploring datasets, solving problems, and creating tools that make information useful. Currently, I’m growing at the intersection of data engineering and intelligent applications.</p>
              <div className="stat-grid">
                <div className="stat"><strong>7.78</strong><span>CGPA</span></div>
                <div className="stat"><strong>3</strong><span>Internships</span></div>
                <div className="stat"><strong>3</strong><span>Featured projects</span></div>
              </div>
              <div className="about-bottom"><span>Currently exploring</span><b>LLMs · RAG · Analytics Engineering</b></div>
            </div>
            <div className="about-facts">
              <div><span>Name</span><b>Vaishnavi Shewale</b></div>
              <div><span>Role</span><b>Data Analytics &amp; AI/ML Engineer</b></div>
              <div><span>Location</span><b>Pune, India</b></div>
              <div><span>Email</span><a href={LINKS.email}>vaishnavishewale10@gmail.com</a></div>
              <div><span>Phone</span><a href={LINKS.phone}>+91 84688 07561</a></div>
            </div>
          </div>
        </article>

        <article className="panel experience-panel wide-panel" id="experience">
          <div className="section-heading"><span className="heading-icon"><BriefcaseBusiness size={18}/></span><div><span className="section-kicker">WHERE I’VE CONTRIBUTED</span><h3>Work Experience</h3></div><span className="heading-description">Internships and practical experience</span></div>
          <div className="experience-cert-list">
            {experiences.map((exp) => {
              const certificate = exp.company === "Rachnakaar Enterprises Pvt. Ltd."
                ? "sample-internship-1.png"
                : exp.company === "CodeAlpha"
                  ? "sample-internship-2.png"
                  : "sample-internship-3.png";
              return <div className="experience-cert-row" key={exp.company}>
                <div className="timeline-item experience-detail">
                  <span className="timeline-node"/>
                  <div className="experience-top"><div><h4>{exp.company}</h4><p className="role">{exp.role}</p></div><span className="date">{exp.date}</span></div>
                  <p className="location"><MapPin size={12}/>{exp.place}</p>
                  <ul className="experience-bullets">{exp.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                  <div className="tags">{exp.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
                <a className="internship-certificate-image" href={`/certificates/${certificate}`} target="_blank" rel="noreferrer" aria-label={`Open ${exp.company} sample certificate`}>
                  <img src={`/certificates/${certificate}`} alt={`${exp.company} sample certificate placeholder`}/>
                  <ExternalLink size={15}/>
                </a>
              </div>;
            })}
          </div>
        </article>
      </section>

            <section className="stacked-sections section-wrap">
        <article className="panel projects-panel" id="projects">
          <div className="section-heading section-heading-spread"><div className="heading-combo"><span className="heading-icon"><Layers3 size={18}/></span><div><span className="section-kicker">PROJECTS</span><h3>Some of My Recent Work</h3></div></div><a className="text-link" href={LINKS.github} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={15}/></a></div>
          <div className="project-list">{projects.map((project) => {
            const Icon = project.icon;
            return <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-art"><div className="art-orbit"/><Icon size={36}/><span>{project.number}</span></div>
              <div className="project-content"><div className="project-type">{project.type}</div><h4>{project.title} <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} link`}><ExternalLink size={14}/></a></h4><p>{project.desc}</p>
                <ul className="project-highlights">{project.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                <div className="tags">{project.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
              <a className="project-arrow" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight size={18}/></a>
            </article>
          })}</div>
        </article>

        <article className="panel skills-panel" id="skills">
          <div className="section-heading"><span className="heading-icon"><Code2 size={18}/></span><div><span className="section-kicker">MY TOOLKIT</span><h3>Skills & Technologies</h3></div></div>
          <div className="skill-groups">{skillGroups.map(group => {
            const Icon = group.icon;
            return <div className="skill-group" key={group.title}><div className="skill-title"><Icon size={15}/><h4>{group.title}</h4></div><div className="skill-chips">{group.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></div>
          })}</div>
          <div className="skills-foot"><span className="mini-spark">✦</span> Building, measuring, learning — repeat.</div>
        </article>
      </section>

      <section className="stacked-sections section-wrap">
        <article className="panel education-panel wide-panel" id="education">
          <div className="section-heading"><span className="heading-icon"><GraduationCap size={19}/></span><div><span className="section-kicker">MY LEARNING PATH</span><h3>Education</h3></div></div>
          <div className="education-list education-horizontal">{education.map((ed) => <div className="education-item" key={ed.degree}>
            <span className="education-icon"><GraduationCap size={17}/></span><div className="education-content"><div className="education-title"><h4>{ed.school}</h4><span>{ed.date}</span></div><p>{ed.degree}</p><b>{ed.result}</b></div>
          </div>)}</div>
        </article>

        <article className="panel cert-panel wide-panel" id="certifications">
          <div className="section-heading"><span className="heading-icon"><Award size={18}/></span><div><span className="section-kicker">PROFESSIONAL DEVELOPMENT</span><h3>Certificates &amp; Credentials</h3></div></div>
          <div className="certificate-grid">
            {[
              { issuer: "Oracle University", title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", image: "/certificates/oracle-genai.pdf", pdf: true },
              { issuer: "Oracle University", title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional", image: "/certificates/oracle-dev.pdf", pdf: true },
              { issuer: "Amazon Web Services (AWS) / Forage", title: "AWS Solutions Architecture Job Simulation", image: "/certificates/aws.png" },
              { issuer: "JPMorgan Chase & Co. / Forage", title: "Software Engineering Job Simulation", image: "/certificates/JP.png" },
              { issuer: "Deloitte / Forage", title: "Data Analytics Job Simulation", image: "/certificates/deloite.png" },
              { issuer: "Apna College", title: "Alpha DSA with Java", image: "/certificates/apna%20clg.png" },
              { issuer: "Accenture / Forage", title: "Software Engineering Job Simulation", image: "/certificates/accenture.png" },
              { issuer: "OneRoadmap", title: "DevOps Engineer", image: "/certificates/oneroad.png" },
              { issuer: "EduSkills Academy", title: "Java Full Stack With Project", image: "/certificates/eduskill.png" }
            ].map(({ issuer, title, image, pdf }) => <article className="certificate-card" key={`${issuer}-${title}`}>
              <a className="certificate-image-link" href={image} target="_blank" rel="noreferrer" aria-label={`Open certificate for ${title}`}>
                {pdf ? <iframe src={`${image}#toolbar=0&navpanes=0&scrollbar=0`} title={`${issuer} ${title} preview`} tabIndex="-1"/> : <img src={image} alt={`${issuer} ${title} certificate`}/>}
                <span className="certificate-open"><ExternalLink size={14}/></span>
              </a>
              <div className="certificate-card-info"><span className="certificate-issuer">{issuer}</span><h4>{title}</h4></div>
            </article>)}
          </div>
        </article>

        <article className="panel contact-panel wide-panel" id="contact">
          <div className="section-heading"><span className="heading-icon"><Send size={18}/></span><div><span className="section-kicker">LET’S BUILD SOMETHING</span><h3>Get In Touch</h3></div></div>
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="contact-intro">I’m open to opportunities, collaborations, and conversations about data analytics, AI, or technology. Let’s connect!</p>
              <div className="contact-details">
                <a href={LINKS.phone}><Phone size={15}/><span>+91 84688 07561</span></a>
                <a href={LINKS.email}><Mail size={15}/><span>vaishnavishewale10@gmail.com</span></a>
                <span><MapPin size={15}/><span>Pune, India</span></span>
              </div>
              <div className="contact-socials"><a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href={LINKS.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div>
            </div>
            <form className="contact-form" onSubmit={handleContact}>
              <div className="form-row"><input name="name" placeholder="Your name" required/><input type="email" name="email" placeholder="Your email" required/></div>
              <input name="subject" placeholder="Subject"/>
              <textarea name="message" placeholder="Tell me a little about your idea..." rows="4" required/>
              <button className="btn btn-primary submit-btn" type="submit"><Send size={15}/>{sent ? "Open email app again" : "Send a message"}<ArrowRight size={15}/></button>
            </form>
          </div>
        </article>
      </section>
    </main>

    <footer className="footer section-wrap"><a className="footer-brand" href="#home">VS<span>.</span></a><p>Designed with curiosity and a little bit of pink ✦</p><span>© {new Date().getFullYear()} Vaishnavi Shewale</span><a className="back-top" href="#home">Back to top ↑</a></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
