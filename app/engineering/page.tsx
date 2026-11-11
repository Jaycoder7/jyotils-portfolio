'use client';

import { FloatingHeader } from '../components/FloatingHeader';
import { SolarStudy } from './SolarStudy';
import Image from 'next/image';

const buildPhotos: Record<string, [number, string][]> = {
  'Electric Go-Kart': [
    [3, 'Front suspension and steering on the assembled kart.'],
    [1, 'The project team with the electric kart.'],
    [7, 'The tubular frame and blue floor pan viewed from above.'],
    [4, 'Motor controller and battery wiring beside the seat.'],
    [5, 'The electric motor mounted beside the drive chain.'],
    [6, 'Pedal and mounting bracket in the footwell.'],
    [2, 'Rear view with the chassis supported on stands.'],
  ],
  'Sun Tracking System': [
    [9, 'Solar panel tilted between the wooden uprights.'],
    [8, 'Rear view showing the panel supports, batteries, and wiring.'],
    [10, 'Panel-mounted camera with its green lights illuminated.'],
  ],
};

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
  { period: 'CURRENT', role: 'AwareSite Research', company: 'RICAL', description: 'Training machine learning models for AwareSite to recognize complex motion patterns through cycles of simpler movements. Research focuses on the challenge of relating these motion cycles to higher-level activity patterns.', tags: ['Machine Learning', 'Motion Recognition', 'Engineering Research'], link: 'https://rical.ce.gatech.edu/' },
  { period: 'JUN 2024 - MAY 2026', role: 'Full Stack Developer', company: 'Prioriwise', description: 'Built an MVP task-management platform that turns outcomes into focused, calendar-aware action plans for women entrepreneurs.', tags: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Clerk'], link: 'https://prioriwise.ai/' },
  { period: 'JAN - MAY 2024', role: 'Software Engineering Intern', company: 'System Technology Works', description: 'Programmed an AI-powered humanoid robot on Jetson Nano, integrating speech, movement, and interactive behavior for a production featured in Marvel’s Ironheart.', tags: ['Python', 'AI', 'Jetson Nano', 'Robotics'], link: 'https://www.systemtechnologyworks.com/' },
  { period: 'MAR - DEC 2023', role: 'Website Design & Marketing Intern', company: 'The Entrepreneurial Hour', description: 'Led web design and digital promotion for a volunteer organization connecting business mentors with entrepreneurs at no cost.', tags: ['Web Design', 'Digital Strategy', 'Marketing'], link: 'https://theentrepreneurialhour.com/' },
];

const projects = [
  { title: 'BullDawg Boundaries', description: 'A gamified UGA campus explorer with daily 360° challenges, interactive mapping, leaderboards, and AI-powered location stories.', tags: ['React', 'Three.js', 'Supabase', 'Gemini AI'], href: 'https://github.com/Jaycoder7/uga-campus-explorer' },
  { title: 'Sun Tracking System', description: 'An automated FRC-based solar tracking system that improved measured panel efficiency from 7% to 11% after system power costs.', tags: ['C++', 'FRC', 'Power Systems'], href: '#contact' },
  { title: 'Electric Go-Kart', description: 'A team conversion of a broken gas go-kart, including motor integration, electric braking, and rear ultrasonic safety sensing.', tags: ['EV Systems', 'Sensors', 'Team Build'], href: '#contact' },
];

const projectNotes: Record<string, { problem: string; process: string; outcome: string }> = {
  'BullDawg Boundaries': {
    problem: 'How well do you know a campus you walk through every day? At UGA, it is easy to recognize a building from the sidewalk and still struggle to place it on a map. BullDawg Boundaries turns that gap into a daily geography challenge.',
    process: 'The game gives the player two views of the same place. In the 360° scene, you can turn around and look for clues: a path, a neighboring building, the direction a road bends. On the interactive map, you have to turn those observations into a location. The project combines React and Three.js for the web experience with Supabase and Gemini for the broader game and its location stories.',
    outcome: 'Players can explore a daily scene, make a map guess, and compare scores on a leaderboard. The location stories give someone who guessed wrong a reason to stay with the place for another minute. What interests me about this project is how differently the same patch of campus reads from ground level and from above.',
  },
  'Sun Tracking System': {
    problem: 'A solar panel can collect more light when it faces the sun, but moving it takes energy. The question for this build was whether the extra output would cover the cost of tracking. Measuring the panel alone would leave out part of the answer.',
    process: 'The system uses C++ and FRC hardware to automate panel positioning. I approached the energy calculation as part of the design: the panel produces power while the tracking equipment consumes it. The angle control on this page illustrates the geometry. You can change the tilt to see how the panel’s orientation follows the light source.',
    outcome: 'Measured efficiency went from 7% to 11% after accounting for system power costs, a gain of four percentage points. That comparison is why I include both numbers. A moving panel makes a good demonstration, but the energy balance tells me whether the movement paid for itself. A useful follow-up would be to repeat the comparison under different light conditions and track when repositioning costs more than it returns.',
  },
  'Electric Go-Kart': {
    problem: 'Our team started with a broken gas go-kart. Converting it to electric power meant working with the kart we already had: its frame, the space available for a motor, and the driver’s limited view behind the seat. Getting it to move was only one part of the brief.',
    process: 'We worked on three connected parts of the conversion: integrating the electric motor, adding electric braking, and using a rear-facing ultrasonic sensor to detect nearby obstacles. Each serves a different part of a drive. The motor provides propulsion, the brake gives the driver a way to slow down, and the sensor provides information about an area that is difficult to see. Obstacle sensing and braking are distinct functions in this project.',
    outcome: 'The team brought propulsion, braking, and rear sensing into the electric conversion. What makes this project different from a software build for me is that the starting hardware stays in the picture throughout: a motor or sensor has to fit somewhere on an actual kart. For a future test report, I would want stopping-distance measurements and a measured rear detection range. Those would say more about the kart than a list of installed parts.',
  },
};

const research = [
  { year: '2025 - MAY 2026', title: 'CURO Research Grant', place: 'University of Georgia', description: 'Competitive independent research grant focused on market trends and consumer behavior through data-driven analysis and faculty mentorship.', tags: ['Market Research', 'Data Analysis', 'Consumer Behavior'] },
  { year: '2022 - 2023', title: 'Electric Vehicle Environmental Impact', place: 'AP Research', description: 'Primary research comparing Georgia EV-owner perceptions with empirical emissions data, including survey design, carbon calculations, and statistical analysis.', tags: ['Primary Research', 'Statistics', 'Climate Tech'], href: '/Research_EV.pdf' },
];

const marqueeItems = ['FULL-STACK DEVELOPMENT', 'ROBOTICS', 'DATA + RESEARCH', 'PRODUCT THINKING'];


export default function Home() {
  return (
    <div className="portfolio-shell">
      <FloatingHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="hero-kicker">Georgia Tech · Computer Engineering</p>
            <h1>Build software,<span className="engineering-emphasis"> mess with hardware.</span></h1>
            <p className="hero-description">I’m Jyotil Agrawal, a Computer Engineering student at Georgia Tech. I like finding things to build, from a campus exploration game to a system that follows the sun. This is where I keep track of what I’ve worked on and what each project taught me.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <ArrowIcon /></a>
            </div>
          </div>
          <aside className="engineer-profile">
            <a className="profile-print" href="/photography" aria-label="Explore Jyotil’s photography">
              <span>Photography archive ↗</span>
            </a>
            <div className="profile-signature"><strong>Jyotil Agrawal</strong><span>Computer Engineering · Georgia Tech</span></div>
            <div className="profile-links">
              <a href="/Resume_Print.pdf" target="_blank" rel="noreferrer">View résumé ↗</a>
              <a href="/Resume_Print.pdf" download="Jyotil-Agrawal-Resume.pdf">Download PDF ↓</a>
            </div>
          </aside>
        </section>

        <div className="marquee" aria-hidden="true"><div className="marquee-track">
          {Array.from({ length: 4 }, (_, loop) => marqueeItems.map((item) => (
            <span className="marquee-item" key={`${loop}-${item}`}>{item}<i /></span>
          )))}
        </div></div>

        <section className="content-section" id="projects">
          <h2 className="engineering-heading">Selected work</h2>
          <article className="portfolio-narrative"><h3><a href="/engineering/discovery">AI gesture-control glove ↗</a></h3><p>ECE 1100 Discovery Project · In progress</p></article>
          <div className="engineering-projects">
            {projects.map((project) => (
              <article key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.tags.join(' · ')}</small>
                <details className="project-notes">
                  <summary>Read project write-up<span className="sr-only"> for {project.title}</span></summary>
                  <h4>The problem</h4><p>{projectNotes[project.title].problem}</p>
                  <h4>The process</h4><p>{projectNotes[project.title].process}</p>
                  <h4>The outcome</h4><p>{projectNotes[project.title].outcome}</p>
                  {buildPhotos[project.title] && (
                    <div className="build-photos">
                      {buildPhotos[project.title].map(([id, caption]) => {
                        const src = `/projects/build-photos/${id}-Photo-${id}.jpg`;
                        return (
                          <figure key={id}>
                            <a href={src} aria-label={`View full-size photo: ${caption}`}>
                              <Image src={src} alt={caption} fill sizes="(max-width: 600px) 88vw, 320px" quality={95} />
                            </a>
                            <figcaption>{caption}</figcaption>
                          </figure>
                        );
                      })}
                    </div>
                  )}
                </details>
                {project.title === 'Sun Tracking System' && <SolarStudy />}
                {project.href.startsWith('https:') && <a href={project.href}>View source on GitHub ↗</a>}
              </article>
            ))}
          </div>
        </section>

        <div className="content-section profile-reading">
          <article className="portfolio-narrative" id="about">
            <h2>About me</h2>
            <p>I couldn’t pick one project that explains why I study computer engineering. I keep finding things I want to build, and each one gives me a different reason to keep going. The electric go-kart started with a broken gas kart. Our team had to figure out how to fit an electric motor, bring the kart to a stop, and sense what was behind it. Those are three very different problems to encounter on the same build.</p>
            <p>The solar tracker gave me a different question to work on. Moving a panel toward the sun takes power. To know whether tracking helped, I had to count what the system used as well as what the panel produced. The result I care about is the change from 7% to 11% efficiency after accounting for that cost.</p>
            <p>Software gives me another way to explore. With BullDawg Boundaries, the starting point was a place people already knew: the University of Georgia campus. A daily 360° challenge asks players to look again and work out where they are. I like having both kinds of projects in my portfolio. Sometimes the interesting part is getting hardware to move. Sometimes it’s finding a reason for someone to open an app tomorrow.</p>
          </article>
          <article className="portfolio-narrative" id="goals">
            <h2>Career goals</h2>
            <p>Sustainability, robotics, and healthcare are the three fields I care about most. The solar tracker gives me a starting point in sustainability. I want to get better at measuring a design’s energy use under different conditions and explaining when the extra hardware earns its place.</p>
            <p>In robotics, I’d like to build on my experience programming a humanoid robot on a Jetson Nano. A next step at Georgia Tech would be to take responsibility for a sensing or control subsystem on a team project and test it alongside the rest of the machine. Healthcare is a direction I’m still exploring. I’d like to learn from people who use medical devices in their daily work before deciding what I could contribute.</p>
          </article>
        </div>

        <section className="content-section" id="experience">
          <h2 className="engineering-heading">Experience</h2>
          <div className="experience-list">{experiences.map((item) => {
            const content = <>
              <span className="experience-period">{item.period}</span>
              <div className="experience-title"><h3>{item.role}</h3><p>{item.company}</p></div>
              <p className="experience-description">{item.description}</p>
              <div className="tag-row compact">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {item.link && <ArrowIcon className="experience-arrow" />}
            </>;
            return item.link ? <a key={item.company} href={item.link} target="_blank" rel="noreferrer" className="experience-row">{content}</a> : <article key={item.company} className="experience-row">{content}</article>;
          })}</div>
        </section>

        <section className="content-section research-section" id="research">
          <h2 className="engineering-heading">Research</h2>
          <div className="research-grid">{research.map((item) => {
            const content = <><span className="research-year">{item.year}</span><p className="research-place">{item.place}</p><h3>{item.title}</h3><p className="research-description">{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{item.href && <span className="research-link">Read the paper <ArrowIcon /></span>}</>;
            return item.href ? <a key={item.title} href={item.href} target="_blank" className="research-card">{content}</a> : <article key={item.title} className="research-card">{content}</article>;
          })}</div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Get in touch</h2>
          <div className="contact-actions">
            <a href="mailto:jyotil.yatin2006@gmail.com" className="button button-primary">Email me <ArrowIcon /></a>
            <a href="https://github.com/Jaycoder7" target="_blank" rel="noreferrer" className="social-link"><GithubIcon /> GitHub</a>
            <a href="https://www.linkedin.com/in/jyotil-agrawal" target="_blank" rel="noreferrer" className="social-link">in LinkedIn</a>
          </div>
        </section>
      </main>
      <footer><a href="#top">Jyotil Agrawal</a><span>© {new Date().getFullYear()}</span></footer>
    </div>
  );
}
