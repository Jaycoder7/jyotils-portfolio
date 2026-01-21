'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { FloatingHeader } from './components/FloatingHeader';

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
const LIGHT_COLORS = {
  primary: '#335e5aff',
  primaryHover: '#027260ff',
  background: '#f9f5ffff',
  backgroundAlt: '#8ea4a0ff',
  border: '#90c5bcff',
  text: '#2D2D2D',
  textMuted: '#250151ff',
  textDescription: '#690069ff'
};

const DARK_COLORS = {
  primary: '#90c5bcff',
  primaryHover: '#b8d4d0ff',
  background: '#1a1a1a',
  backgroundAlt: '#2a2a2a',
  border: '#335e5aff',
  text: '#e2e2e2',
  textMuted: '#b8b8b8',
  textDescription: '#d0d0d0'
};



const ProjectsSection = () => {
  const { theme } = useTheme();
  const COLORS = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  const projects = [
    {
      id: 1,
      title: "Forage Midas - Financial Analysis Platform",
      description: "In-progress financial analysis and data visualization platform built as part of a virtual internship program. Developing features for financial data processing, market analysis, and interactive dashboards.",
      technologies: ["Java", "Apache Kafka", "Data Processing", "Financial APIs"],
      status: "In Progress",
      liveUrl: "https://github.com/Jaycoder7/forage-midas"
    }
  ];

  if (projects.length === 0) {
    return (
      <section className="w-full max-w-6xl mx-auto mb-16">
        <div className="text-center sm:text-left mb-8">
          <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
          <p className="text-lg" style={{ color: COLORS.textMuted }}>
            Personal technical projects and side applications
          </p>
        </div>
        
        <div 
          className="border rounded-lg p-8 text-center"
          style={{
            borderColor: COLORS.border,
            backgroundColor: COLORS.background,
          }}
        >
          <p 
            className="text-lg"
            style={{ color: COLORS.textMuted }}
          >
            Personal projects coming soon! Currently focusing on professional work and research.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Personal technical projects and side applications
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
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
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.status && (
                <span 
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: project.status === 'In Progress' ? '#fbbf24' : COLORS.primary,
                    color: 'white'
                  }}
                >
                  {project.status}
                </span>
              )}
            </div>
            <p 
              className="mb-4 leading-relaxed" 
              style={{ 
                color: COLORS.textMuted,
                fontSize: '0.95rem',
              }}
            >
              {project.description}
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
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
            
            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline hover:underline-offset-4 transition-colors duration-200"
                style={{ color: COLORS.primary }}
              >
                Visit Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProfessionalExperienceSection = () => {
  const { theme } = useTheme();
  const COLORS = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Prioriwise",
      period: "June 2024 - Present",
      description: "Built and deployed an MVP task management application using MongoDB and Google Calendar API integration. Designed key features including outcome-to-task mapping to support women entrepreneurs, and developed the landing page and backend management system.",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Clerk"],
      link: "https://prioriwise.ai/"
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "System Technology Works",
      period: "Jan 2024-May 2024",
      description: "Programmed a humanoid robot using Python on Jetson Nano with integrated AI modules for speech, movement, and interactive features. Contributed to robot development that secured a deal with Marvel, with robots featured in the series Ironheart.",
      technologies: ["Python", "EMACS", "Llama AI", "Jetson Nano"],
      link: "https://www.systemtechnologyworks.com/"
    },
    {
      id: 3,
      title: "Website Design & Marketing Intern",
      company: "The Entrepreneurial Hour",
      period: "Mar 2023-Dec 2023",
      description: "Led website design and creation for volunteer business leader organization providing entrepreneurial advice. Managed weekly presenter outreach and coordination, designed LinkedIn promotional posts for presentations. Contributing to digital presence of organization that connects business mentors with entrepreneurs at no cost.",
      technologies: ["Web Design", "LinkedIn Marketing", "Presenter Coordination", "Digital Strategy", "Graphic Design"],
      link: "https://theentrepreneurialhour.com/"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Industry experience and internships
        </p>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
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
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="text-xl font-semibold" style={{ color: COLORS.text }}>{exp.title}</h3>
              <span className="text-sm font-medium" style={{ color: COLORS.primary }}>{exp.period}</span>
            </div>
            <h4 className="text-lg font-medium mb-3" style={{ color: COLORS.primary }}>{exp.company}</h4>
            <p 
              className="mb-4 leading-relaxed" 
              style={{ 
                color: COLORS.textMuted,
                fontSize: '0.95rem',
              }}
            >
              {exp.description}
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
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
            
            {exp.link && (
              <div className="flex gap-3">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline hover:underline-offset-4 transition-colors duration-200"
                  style={{ color: COLORS.primary }}
                >
                  Learn More →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const ResearchSection = () => {
  const { theme } = useTheme();
  const COLORS = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  const research = [
    {
      id: 1,
      title: "CURO Research Grant",
      institution: "University of Georgia",
      period: "2024-2025",
      description: "Awarded competitive research grant to conduct independent market study research. Analyzing market trends and consumer behavior through data-driven research approaches under faculty mentorship.",
      focus: ["Market Research", "Data Analysis", "Consumer Behavior"]
    },
    {
      id: 2,
      title: "AP Research: Electric Vehicle Environmental Impact Study",
      institution: "High School AP Research Program",
      period: "2022-2023",
      description: "Conducted primary research surveying 13 Georgia EV owners to compare their environmental perceptions with empirical carbon emission data. Calculated that EVs in Georgia produce significantly less CO2 (highest: 19.5 kg/month) compared to gasoline vehicles (383.33 kg/month). Used statistical analysis to examine the gap between owner beliefs and actual environmental impact, finding that all respondents correctly believed EVs are environmentally superior to gas vehicles in Georgia's energy context.",
      focus: ["Primary Research", "Statistical Analysis", "Carbon Footprint Calculation", "Survey Methodology", "Georgia Energy Grid", "Environmental Policy"],
      link: "/Research_EV.pdf"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Research</h2>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Academic research projects and grants
        </p>
      </div>
      
      <div className="space-y-6">
        {research.map((item) => (
          <div
            key={item.id}
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
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="text-xl font-semibold" style={{ color: COLORS.text }}>{item.title}</h3>
              <span className="text-sm font-medium" style={{ color: COLORS.primary }}>{item.period}</span>
            </div>
            <h4 className="text-lg font-medium mb-3" style={{ color: COLORS.primary }}>{item.institution}</h4>
            <p 
              className="mb-4 leading-relaxed" 
              style={{ 
                color: COLORS.textMuted,
                fontSize: '0.95rem',
              }}
            >
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {item.focus.map((area) => (
                <span
                  key={area}
                  className="px-2 py-1 rounded text-sm font-mono transition-colors duration-200"
                  style={{
                    backgroundColor: COLORS.background,
                    color: COLORS.primary,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
            
            {item.link && (
              <div className="flex gap-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline hover:underline-offset-4 transition-colors duration-200"
                  style={{ color: COLORS.primary }}
                >
                  View Research Paper →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const VolunteeringSection = () => {
  const { theme } = useTheme();
  const COLORS = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  const volunteering = [
    {
      id: 1,
      title: "Student Mentor",
      organization: "Harvard Innovation Labs",
      period: "2024",
      description: "Mentored three undergraduate and graduate teams on market research, financial modeling, and pitch development. Designed workshops to help students refine their presentation skills, supporting one startup that raised $2M in funding.",
      impact: "Helped 1 startup raise $2M in funding",
      skills: ["Mentorship", "Financial Modeling", "Pitch Development", "Workshop Design"]
    },
    {
      id: 2,
      title: "Leadership Member",
      organization: "RAJA - Rajasthani Association of Georgia",
      period: "2024-Present",
      description: "Active leadership member contributing to community events, cultural preservation, and networking activities for the Rajasthani community in Georgia.",
      impact: "Supporting cultural heritage and community engagement",
      skills: ["Event Planning", "Community Engagement", "Cultural Leadership", "Networking"]
    },
    {
      id: 3,
      title: "Youth Group Founder & Lead",
      organization: "Agrasen Bhawan",
      period: "2024-Present",
      description: "Founded and lead the youth group while spearheading the complete website development for the organization. Managing digital presence and youth engagement initiatives for the community.",
      impact: "Established youth leadership and modernized digital infrastructure",
      skills: ["Web Development", "Youth Leadership", "Digital Strategy", "Community Building"],
      link: "https://www.agrasenbhawanusa.org/"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mb-16">
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Volunteering & Leadership</h2>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Community involvement and mentorship activities
        </p>
      </div>
      
      <div className="space-y-6">
        {volunteering.map((item) => (
          <div
            key={item.id}
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
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="text-xl font-semibold" style={{ color: COLORS.text }}>{item.title}</h3>
              <span className="text-sm font-medium" style={{ color: COLORS.primary }}>{item.period}</span>
            </div>
            <h4 className="text-lg font-medium mb-3" style={{ color: COLORS.primary }}>{item.organization}</h4>
            <p 
              className="mb-3 leading-relaxed" 
              style={{ 
                color: COLORS.textMuted,
                fontSize: '0.95rem',
              }}
            >
              {item.description}
            </p>
            
            <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: COLORS.backgroundAlt + '40' }}>
              <p className="text-sm font-semibold" style={{ color: COLORS.primary }}>
                Impact: {item.impact}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded text-sm font-mono transition-colors duration-200"
                  style={{
                    backgroundColor: COLORS.background,
                    color: COLORS.primary,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {item.link && (
              <div className="flex gap-3">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline hover:underline-offset-4 transition-colors duration-200"
                  style={{ color: COLORS.primary }}
                >
                  Visit Website →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { theme } = useTheme();
  const COLORS = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  return (
    <section className="w-full max-w-4xl mx-auto mb-16">
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg" style={{ color: COLORS.textMuted }}>
          Let's connect and discuss opportunities, projects, or collaborations!
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="mailto:jyotil.yatin2006@gmail.com"
          className="border transition-all duration-300 flex items-center justify-center font-medium text-sm sm:text-base h-12 px-6 rounded-md hover:scale-105"
          style={{
            backgroundColor: COLORS.primary,
            borderColor: COLORS.primary,
            color: 'white',
            transform: 'skew(-10deg)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = COLORS.primaryHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = COLORS.primary;
          }}
        >
          <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>
            Email Me
          </span>
        </a>
        
        <a
          href="https://www.linkedin.com/in/jyotil-agrawal"
          target="_blank"
          rel="noopener noreferrer"
          className="border transition-all duration-300 flex items-center justify-center font-medium text-sm sm:text-base h-12 px-6 rounded-md hover:scale-105"
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
          <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>
            LinkedIn
          </span>
        </a>
      </div>
    </section>
  );
};

export default function Home() {
  const { theme } = useTheme();
  const COLORS = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <div 
      className="font-sans min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text,
      }}
    >
      <FloatingHeader />
      <main className="max-w-7xl mx-auto px-8 pt-24 pb-20 sm:px-20">
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
        <div id="experience">
          <ProfessionalExperienceSection />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>

        <div id="research">
          <ResearchSection />
        </div>

        <div id="volunteering">
          <VolunteeringSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

      </main>
      <footer 
        className="text-center py-8 border-t transition-colors duration-300"
        style={{
          borderTopColor: COLORS.border,
        }}
      >
        <p 
          className="text-sm"
          style={{ color: COLORS.textMuted }}
        >
          © 2026 Jyotil Agrawal. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
