'use client';

import { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 50 }: { text: string, speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span 
      style={{ 
        fontFamily: '"Courier New", "Monaco", "Menlo", "Ubuntu Mono", monospace',
        letterSpacing: '0.5px',
        fontWeight: 'bold'
      }}
    >
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

// Global Color Variables - Change these to update the entire site
const COLORS = {
  primary: '#335e5aff',        // Green for standout elements, buttons, links
  primaryHover: '#027260ff',   // Darker green for hover states
  background: '#f9f5ffff',     // Light purple/gray for backgrounds
  backgroundAlt: '#8ea4a0ff',  // Slightly darker background for hover/cards
  border: '#90c5bcff',         // Border color
  text: '#2D2D2D',          // Main text color
  textMuted: '#250151ff',     // Muted text for descriptions
  textDescription: '#690069ff' // Description text color
};


const Header = ({ themeHue }: { themeHue: number }) => {
  return (
    <header 
      className="w-full border-b backdrop-blur sticky top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: `${COLORS.background}E6`, // Adding alpha for transparency
        borderBottomColor: COLORS.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
              Jyotil Agrawal
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <a 
              href="#portfolio" 
              className="text-sm font-medium transition-colors border px-3 py-1 rounded-md"
              style={{
                backgroundColor: COLORS.background,
                borderColor: COLORS.primary,
                color: COLORS.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Portfolio</span>
            </a>
            <a 
              href="/blog" 
              className="text-sm font-medium transition-colors border px-3 py-1 rounded-md"
              style={{
                backgroundColor: COLORS.background,
                borderColor: COLORS.primary,
                color: COLORS.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Blog</span>
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium transition-colors border px-3 py-1 rounded-md"
              style={{
                backgroundColor: COLORS.background,
                borderColor: COLORS.primary,
                color: COLORS.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Contact</span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Jaycoder7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline hover:underline-offset-4 transition-colors"
            >
              GitHub
            </a>
            <a
              href="/Resume_Print.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border transition-all duration-200 flex items-center justify-center font-medium text-sm h-8 px-3 text-white rounded-md group"
              style={{
                backgroundColor: COLORS.primary,
                borderColor: COLORS.primary,
                transform: 'skew(-15deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primaryHover;
                e.currentTarget.style.transform = 'skew(-15deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
                e.currentTarget.style.transform = 'skew(-15deg) scale(1)';
              }}
            >
              <span 
                style={{ 
                  transform: 'skew(15deg)', 
                  color: 'inherit',
                  pointerEvents: 'none'
                }}
              >
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const PortfolioSection = ({ themeHue }: { themeHue: number }) => {
  const projects = [
    {
      id: 1,
      title: "Prioriwise",
      description: "Built and deployed an MVP task management application using MongoDB and Google Calendar API integration. Designed key features including outcome-to-task mapping to support women entrepreneurs, and developed the landing page and backend management system.",
      technologies: ["React", "Node.js", "MongoDB", "Typescript", "Clerk"],
      githubUrl: "https://github.com/student/task-manager",
      liveUrl: "https://prioriwise.ai/"
    },
    {
      id: 2,
      title: "System Technology Works",
      description: "Programmed a humanoid robot using Python on Jetson Nano with integrated AI modules for speech, movement, and interactive features. Contributed to robot development that secured a deal with Marvel, with robots featured in the series Ironheart.",
      technologies: ["Python", "EMACS", "Llama AI"],
      githubUrl: "https://github.com/student/ecommerce-site",
      liveUrl: "https://www.systemtechnologyworks.com/"
    },
    {
      id: 3,
      title: "Harvard Mentorship",
      description: "Mentored three undergraduate and graduate teams on market research, financial modeling, and pitch development. Designed workshops to help students refine their presentation skills, supporting one startup that raised $2M in funding.",
      technologies: ["Leanstack", "Communication", "Leadership"],
      githubUrl: "https://github.com/student/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app"
    },
    {
      id: 4,
      title: "CURO Research",
      description: "Awarded research grant to conduct independent market study research. Analyzing market trends and consumer behavior through data-driven research approaches under faculty mentorship.",
      technologies: ["Market Research"],
      githubUrl: "https://github.com/student/blog-platform",
      liveUrl: "https://blog-platform-demo.vercel.app"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mb-12">
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Showcase of my recent projects and technical skills
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            style={{
              borderColor: COLORS.border,
              backgroundColor: COLORS.background,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.backgroundAlt;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.background;
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p 
              className="mb-4 leading-relaxed italic" 
              style={{ 
                color: COLORS.textMuted,
                fontFamily: '"Georgia", "Times New Roman", serif',
                fontSize: '0.95rem',
                letterSpacing: '0.3px'
              }}
            >
              {project.description}
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-sm font-mono transition-colors duration-200"
                    style={{
                      backgroundColor: COLORS.background,
                      color: COLORS.primary,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {(project.id === 1 || project.id === 2) && (
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline hover:underline-offset-4 transition-colors duration-200"
                  style={{ color: COLORS.primary }}
                >
                  Check them out →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = ({ themeHue }: { themeHue: number }) => {
  return (
    <section className="w-full max-w-4xl mx-auto mb-16">
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Let's connect and discuss opportunities, projects, or what I should add on here next!
        </p>
      </div>
      
      <div 
        className="border rounded-lg overflow-hidden transition-colors duration-300"
        style={{
          borderColor: COLORS.border,
          backgroundColor: `${COLORS.background}CC`, // 80% opacity
        }}
      >
        <iframe 
          aria-label='Contact Us' 
          frameBorder="0" 
          style={{
            height: '850px', 
            width: '100%', 
            border: 'none',
            backgroundColor: COLORS.background
          }} 
          src='https://forms.zohopublic.com/jyotilyatin2006gm1/form/ContactUs/formperma/C6IvXrz4nuhTIRNb-q2688tWub107EkCnf6sDaKESHE'
        />
      </div>
    </section>
  );
};

export default function Home() {
  const [themeHue, setThemeHue] = useState(220);

  return (
    <div 
      className="font-sans min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: COLORS.background,
      }}
    >
      <Header themeHue={themeHue} />
      <main className="max-w-7xl mx-auto px-8 py-20 sm:px-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Student Portfolio</h1>

       

          <p className="text-xl max-w-2xl mx-auto" style={{ color: COLORS.textDescription }}>
            <TypingAnimation 
              text="Welcome to my journey as a developer. Explore my projects, read my blog, and get in touch!"
              speed={45}
            />
          </p>
        </div>
 <div className="flex gap-4 items-center flex-col sm:flex-row justify-center mt-12">
          <a
            className="border transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto text-white rounded-md"
            href="/blog"
            style={{
              backgroundColor: COLORS.primary,
              borderColor: COLORS.primary,
              transform: 'skew(-15deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primaryHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primary;
            }}
          >
            <span style={{ transform: 'skew(15deg)', color: 'inherit', pointerEvents: 'none' }}>Read My Blog</span>
          </a>
          <a
            className="border transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto rounded-md"
            href="https://github.com/Jaycoder7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: COLORS.background,
              borderColor: COLORS.primary,
              color: COLORS.primary,
              transform: 'skew(-15deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.backgroundAlt;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.background;
            }}
          >
            <span style={{ transform: 'skew(15deg)', color: 'inherit', pointerEvents: 'none' }}>View GitHub</span>
          </a>
        </div>
        <div id="portfolio">
          <PortfolioSection themeHue={themeHue} />
        </div>

        <div id="contact">
          <ContactSection themeHue={themeHue} />
        </div>

      </main>
      <footer 
        className="flex gap-[24px] flex-wrap items-center justify-center mt-16 pt-8 border-t transition-colors duration-300"
        style={{
          borderTopColor: COLORS.border,
        }}
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-colors duration-200"
          href="mailto:jyotil.yatin2006@gmail.com"
          style={{ color: COLORS.primary }}
        >
          Contact
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-colors duration-200"
          href="www.linkedin.com/in/jyotil-agrawal"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COLORS.primary }}
        >
          LinkedIn
        </a>
       
      </footer>
    </div>
  );
}
