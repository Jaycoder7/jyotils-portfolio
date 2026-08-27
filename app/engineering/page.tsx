'use client';

import { FloatingHeader } from '../components/FloatingHeader';

type LinkIconProps = { className?: string };

const ArrowIcon = ({ className = '' }: LinkIconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = ({ className = '' }: LinkIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const experiences = [
  { period: 'JUN 2024 - MAY 2026', role: 'Full Stack Developer', company: 'Prioriwise', description: 'Built an MVP task-management platform that turns outcomes into focused, calendar-aware action plans for women entrepreneurs.', tags: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Clerk'], link: 'https://prioriwise.ai/' },
  { period: 'JAN - MAY 2024', role: 'Software Engineering Intern', company: 'System Technology Works', description: 'Programmed an AI-powered humanoid robot on Jetson Nano, integrating speech, movement, and interactive behavior for a production featured in Marvel’s Ironheart.', tags: ['Python', 'AI', 'Jetson Nano', 'Robotics'], link: 'https://www.systemtechnologyworks.com/' },
  { period: 'MAR - DEC 2023', role: 'Website Design & Marketing Intern', company: 'The Entrepreneurial Hour', description: 'Led web design and digital promotion for a volunteer organization connecting business mentors with entrepreneurs at no cost.', tags: ['Web Design', 'Digital Strategy', 'Marketing'], link: 'https://theentrepreneurialhour.com/' },
];

const projects = [
  { number: '01', title: 'BullDawg Boundaries', eyebrow: 'Campus exploration, reimagined', description: 'A gamified UGA campus explorer with daily 360° challenges, interactive mapping, leaderboards, and AI-powered location stories.', tags: ['React', 'Three.js', 'Supabase', 'Gemini AI'], href: 'https://github.com/Jaycoder7/uga-campus-explorer', accent: 'cyan' },
  { number: '02', title: 'Forage Midas', eyebrow: 'Financial signals, clarified', description: 'An in-progress analysis platform for processing market data and transforming financial signals into useful visual insights.', tags: ['Java', 'Kafka', 'Financial APIs'], href: 'https://github.com/Jaycoder7/forage-midas', accent: 'gold' },
  { number: '03', title: 'Sun Tracking System', eyebrow: 'Hardware that follows the light', description: 'An automated FRC-based solar tracking system that improved measured panel efficiency from 7% to 11% after system power costs.', tags: ['C++', 'FRC', 'Power Systems'], href: '#contact', accent: 'ember' },
  { number: '04', title: 'Electric Go-Kart', eyebrow: 'A mechanical rebuild, electrified', description: 'A team conversion of a broken gas go-kart, including motor integration, electric braking, and rear ultrasonic safety sensing.', tags: ['EV Systems', 'Sensors', 'Team Build'], href: '#contact', accent: 'violet' },
];

const research = [
  { year: '2025 - PRESENT', title: 'CURO Research Grant', place: 'University of Georgia', description: 'Competitive independent research grant focused on market trends and consumer behavior through data-driven analysis and faculty mentorship.', tags: ['Market Research', 'Data Analysis', 'Consumer Behavior'] },
  { year: '2022 - 2023', title: 'Electric Vehicle Environmental Impact', place: 'AP Research', description: 'Primary research comparing Georgia EV-owner perceptions with empirical emissions data, including survey design, carbon calculations, and statistical analysis.', tags: ['Primary Research', 'Statistics', 'Climate Tech'], href: '/Research_EV.pdf' },
];

function SectionHeading({ index, title, copy }: { index: string; title: string; copy: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><h2>{title}</h2><p>{copy}</p></div></div>;
}

export default function Home() {
  return (
    <div className="portfolio-shell">
      <div className="noise" aria-hidden="true" />
      <FloatingHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="status-pill"><span /> Available for ambitious builds</div>
            <p className="hero-kicker">Developer · Researcher · Builder</p>
            <h1>I turn curious ideas into<span className="gradient-text"> things people can use.</span></h1>
            <p className="hero-description">I’m Jyotil Agrawal, a Computer Engineering student at Georgia Tech building at the intersection of software, robotics, research, and entrepreneurship.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <ArrowIcon /></a>
              <a href="/Resume_Print.pdf" target="_blank" className="button button-ghost">View résumé</a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true"><div className="marquee-track">
          <span>FULL-STACK DEVELOPMENT</span><i /><span>ROBOTICS</span><i /><span>DATA + RESEARCH</span><i /><span>PRODUCT THINKING</span><i />
          <span>FULL-STACK DEVELOPMENT</span><i /><span>ROBOTICS</span><i /><span>DATA + RESEARCH</span><i /><span>PRODUCT THINKING</span><i />
        </div></div>

        <section className="content-section" id="projects">
          <SectionHeading index="01" title="Selected work" copy="A few things I’ve designed, engineered, and learned from." />
          <div className="project-grid">{projects.map((project) => (
            <a key={project.title} href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`project-card accent-${project.accent}`}>
              <div className="project-topline"><span>{project.number}</span><ArrowIcon /></div>
              <div className="project-visual-mark"><span>{project.title.slice(0, 1)}</span></div>
              <p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </a>
          ))}</div>
        </section>

        <section className="content-section" id="experience">
          <SectionHeading index="02" title="Experience" copy="Learning by shipping, collaborating, and solving real constraints." />
          <div className="experience-list">{experiences.map((item) => (
            <a key={item.company} href={item.link} target="_blank" rel="noreferrer" className="experience-row">
              <span className="experience-period">{item.period}</span>
              <div className="experience-title"><h3>{item.role}</h3><p>{item.company}</p></div>
              <p className="experience-description">{item.description}</p>
              <div className="tag-row compact">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <ArrowIcon className="experience-arrow" />
            </a>
          ))}</div>
        </section>

        <section className="content-section research-section" id="research">
          <SectionHeading index="03" title="Research mode" copy="Evidence first. Questions always. Assumptions tested." />
          <div className="research-grid">{research.map((item) => {
            const content = <><span className="research-year">{item.year}</span><p className="research-place">{item.place}</p><h3>{item.title}</h3><p className="research-description">{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{item.href && <span className="research-link">Read the paper <ArrowIcon /></span>}</>;
            return item.href ? <a key={item.title} href={item.href} target="_blank" className="research-card">{content}</a> : <article key={item.title} className="research-card">{content}</article>;
          })}</div>
        </section>

        <section className="contact-section" id="contact">
          <p className="contact-kicker">HAVE AN IDEA?</p>
          <h2>Let’s build something<br /><em>worth talking about.</em></h2>
          <p>I’m always interested in thoughtful products, unusual engineering challenges, and people with energy.</p>
          <div className="contact-actions">
            <a href="mailto:jyotil.yatin2006@gmail.com" className="button button-primary">Start a conversation <ArrowIcon /></a>
            <a href="https://github.com/Jaycoder7" target="_blank" rel="noreferrer" className="social-link"><GithubIcon /> GitHub</a>
            <a href="https://www.linkedin.com/in/jyotil-agrawal" target="_blank" rel="noreferrer" className="social-link">in LinkedIn</a>
          </div>
        </section>
      </main>
      <footer><a href="#top">Jyotil Agrawal</a><span>Designed with curiosity · Built with Next.js</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  );
}
