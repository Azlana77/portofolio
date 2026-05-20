import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { experiences, profile, projects, skills, stats } from './data/portfolio';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialIcon = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((open) => !open)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      {isMenuOpen ? <MobileMenu onNavigate={closeMenu} /> : null}
    </>
  );
}

type HeaderProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
};

function Header({ isMenuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kembali ke bagian awal">
        <span aria-hidden="true">NK</span>
        <strong>{profile.name}</strong>
      </a>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="icon-button menu-button"
        type="button"
        aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

type MobileMenuProps = {
  onNavigate: () => void;
};

function MobileMenu({ onNavigate }: MobileMenuProps) {
  return (
    <div className="mobile-menu" role="dialog" aria-label="Menu navigasi">
      {navigation.map((item) => (
        <a href={item.href} key={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Available for React projects
        </p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-text">{profile.headline}</p>

        <div className="hero-actions" aria-label="Aksi utama">
          <a className="button primary" href="#projects">
            Lihat Proyek
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href={profile.cvUrl}>
            Download CV
            <Download size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-meta">
          <span>
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </span>
          <span>
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Preview pekerjaan portfolio">
        <div className="portrait-panel">
          <div className="portrait-topline">
            <span />
            <span />
            <span />
          </div>
          <div className="portrait-body">
            <div className="avatar-mark" aria-hidden="true">
              {profile.name
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div>
              <strong>Product-minded UI</strong>
              <p>React, TypeScript, accessible components, and responsive screens.</p>
            </div>
          </div>
          <div className="metric-grid">
            {stats.map((stat) => (
              <div className="metric" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell split-section" id="about">
      <SectionHeading
        kicker="About"
        title="Developer yang fokus pada UI jelas, cepat, dan mudah dirawat."
      />
      <div className="body-copy">
        <p>
          Saya membantu mengubah kebutuhan produk menjadi antarmuka yang terasa rapi,
          fungsional, dan nyaman digunakan. Fokus utama saya ada di React, TypeScript,
          struktur komponen, dan pengalaman mobile yang solid.
        </p>
        <p>
          Portofolio ini dibuat sebagai fondasi yang mudah dikembangkan: konten dipisahkan
          dari komponen, layout responsif, dan setiap section punya tujuan yang jelas untuk
          recruiter, klien, atau collaborator.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionHeading kicker="Skills" title="Stack yang dipakai untuk membangun web modern." />
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="chip-list">
              {group.items.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        kicker="Projects"
        title="Project pilihan dengan konteks masalah dan keputusan UI."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={`Preview interface ${project.title}`} loading="lazy" />
            <div className="project-content">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <p className="project-problem">{project.problem}</p>
              <div className="chip-list">
                {project.techStack.map((tech) => (
                  <span className="chip compact" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoUrl} aria-label={`Buka demo ${project.title}`}>
                  Demo
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href={project.repoUrl} aria-label={`Buka repository ${project.title}`}>
                  Repo
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell split-section" id="experience">
      <SectionHeading kicker="Experience" title="Perjalanan belajar dan membangun produk web." />
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={`${item.title}-${item.period}`}>
            <div className="timeline-icon" aria-hidden="true">
              <BriefcaseBusiness size={18} />
            </div>
            <div>
              <p className="period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="organization">{item.organization}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Mari buat interface yang lebih enak dipakai.</h2>
        <p>
          Kirim pesan untuk peluang kerja, project freelance, kolaborasi, atau sekadar diskusi
          tentang React dan UI engineering.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${profile.email}`}>
          Email Saya
          <Mail size={18} aria-hidden="true" />
        </a>
        <div className="social-links" aria-label="Link sosial">
          {profile.socials.map((social) => {
            const Icon = socialIcon[social.label as keyof typeof socialIcon] ?? ArrowUpRight;

            return (
              <a href={social.href} key={social.label} aria-label={social.label}>
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        {profile.name} - {year}
      </p>
      <a href="#top">Back to top</a>
    </footer>
  );
}

type SectionHeadingProps = {
  kicker: string;
  title: string;
};

function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
