import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  Linkedin,
  ArrowRight,
  FileText,
  Sparkles,
  LogOut,
  ChevronUp,
} from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  responsibilities?: string[];
  impact?: string[];
  tags: string[];
  link: string;
}

export default function CVWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('portfolio_authenticated');
    sessionStorage.removeItem('portfolio_auth_timestamp');
    window.location.reload();
  };

  const projects: Project[] = [
    {
      title: 'Meeting Minutes Generator',
      subtitle: 'AI-powered meeeting summarizer',
      description:
        'Initial project implementation had to be done by external suppliers. I proposed and led the in-house development of a custom meeting-minutes generator built entirely within Microsoft Copilot Studio.',
      responsibilities: [
        'Designing the workflow and user experience',
        'Managing the end-to-end development and testing process',
        'Leading training sessions to accelerate adoption across teams'
      ],
      impact: [
        'Reduced implementation costs by over 90% compared to external solutions',
        'Delivered the MVP 75% faster than the estimated vendor timeline (6 weeks vs 6 months)',
      ],
      tags: ['Copilot Studio', 'Low-code approach', 'AI solution design', 'Cost Optimization'],
      link: '#',
    },
    {
      title: 'AI Document Translation Tool',
      subtitle: 'Automated multilingual document translator',
      description:
        'Following European acquisitions, internal teams required scalable document translation across languages. I designed and built an in-house AI translation tool using Azure AI Foundry that preserves original formatting.',
      responsibilities: [
        'Automating translation workflows to minimize manual intervention',
        'Designing an intuitive user interface for non-technical users',
        'Ensuring data security and maintaining document formatting consistency'
      ],
      impact: [
        'Reduced translation costs by over 90% compared to external providers',
        'Cut processing time by 95% (from 2-3 days to 5 minutes) enabling instant document translation',
        'Enhanced internal data security by eliminating third-party document sharing'
      ],
      tags: [
        'Azure AI Foundry',
        'Operational Efficiency',
        'Digital Transformation'
      ],
      link: '#',
    },
    {
      title: 'ChatGPT Enterprise Integration',
      subtitle: 'Rollout of generative AI across the organization',
      description:
        'As Project Manager, I led the end-to-end implementation of ChatGPT Enterprise at Nexi, coordinating between internal stakeholders and OpenAI to ensure a compliant, secure, and scalable rollout across the company.',
      responsibilities: [
        'Facilitating alignment between internal stakeholders — Procurement, Legal, Privacy, and Risk — and the commercial team at OpenAI',
        'Planning the internal communications, newsletters, and learning sessions',
        'Overseeing the technical integration with Nexi’s internal security framework'
      ],
      impact: [
        'Established comprehensive AI governance framework adopted company-wide',
        'Reduced AI tool licensing costs through centralized enterprise agreement'
      ],
      tags: [
        'Project Management',
        'AI Governance',
        'Security Integration'
      ],
      link: '#',
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="mb-4 h-16 w-16 mx-auto rounded-full bg-gradient-to-r from-emerald-400 to-fuchsia-400 animate-pulse"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 font-medium"
          >
            Loading Portfolio...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-emerald-500/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-50%,rgba(34,197,94,0.15),rgba(10,10,11,0))]" />
        <div className="absolute right-[-10%] top-[20%] h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-white text-black font-black">LD</div>
            <span className="hidden sm:inline text-sm text-white/70">Portfolio</span>
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#experience" className="text-sm text-white/80 hover:text-white">Experience</a>
            <a href="#education" className="text-sm text-white/80 hover:text-white">Education</a>
            <a href="#skills" className="text-sm text-white/80 hover:text-white">Skills & Interests</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
            <a
              href="/Resume_Donatelli_Ludovica_2025.pdf"
              download="Resume_Donatelli_Ludovica_2025.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-black transition hover:scale-[1.02] active:scale-[0.99]"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            className="sm:hidden rounded-lg border border-white/10 p-2 text-white/80"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </nav>
        {menuOpen && (
          <div className="sm:hidden border-t border-white/5 bg-black/60 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-2 gap-2 text-sm">
              {[
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#education', label: 'Education' },
                { href: '#skills', label: 'Skills & Interests' },
                { href: '#contact', label: 'Contact' },
              ].map((i) => (
                <a key={i.href} href={i.href} className="rounded-lg bg-white/5 px-3 py-2 text-white/90">
                  {i.label}
                </a>
              ))}
              <a 
                href="/Resume_Donatelli_Ludovica_2025.pdf" 
                download="Resume_Donatelli_Ludovica_2025.pdf"
                target="_blank"
                className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 font-medium text-black"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" /> Open to opportunities
          </span>
          <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="text-white/90">Hi, I’m </span>
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-fuchsia-300 bg-clip-text text-transparent">Ludovica Donatelli</span>
            <span className="text-white/90"> — </span>
            <span className="text-white/90">Technical Product Manager</span>
          </h1>
          <p className="mt-4 text-balance text-white/70">
            I craft accessible, high‑performance Generative AI products. I like clear type,
            tidy layouts, and sparkling details.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 font-medium text-black transition hover:translate-y-[-1px]"
            >
              Contact Me <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/90 hover:bg-white/10"
            >
              View Projects
            </a>
            <div className="ml-auto hidden items-center gap-3 sm:flex">
              <a href="https://www.linkedin.com/in/ludovica-donatelli-0022221a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"><Linkedin className="h-5 w-5"/></a>
              <a href="mailto:ludovicadonatelli@outlook.it" aria-label="Email" className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"><Mail className="h-5 w-5"/></a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white/90 sm:text-3xl">Latest Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => {
            // Define unique visuals for each project
            const projectVisuals = [
              // Meeting Minutes Generator - Productivity theme
              'bg-gradient-to-br from-blue-500/20 via-emerald-500/20 to-blue-600/20 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)] after:absolute after:inset-0 after:bg-[linear-gradient(45deg,transparent_60%,rgba(16,185,129,0.2)_70%,transparent_80%)]',
              // AI Document Translation - Global/Language theme  
              'bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-cyan-500/20 relative overflow-hidden before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.3)_0deg,transparent_120deg,rgba(6,182,212,0.3)_240deg,transparent_360deg)]',
              // ChatGPT Integration - AI/Chat theme
              'bg-gradient-to-br from-orange-500/20 via-emerald-500/20 to-teal-500/20 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_70%_30%,rgba(249,115,22,0.4),transparent_60%)] after:absolute after:inset-0 after:bg-[linear-gradient(135deg,transparent_40%,rgba(20,184,166,0.3)_50%,transparent_60%)]'
            ];

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 flex flex-col h-full"
              >
                {/* Visual Header */}
                <div className={`mb-4 h-32 w-full rounded-xl ring-1 ring-inset ring-white/10 transition will-change-transform group-hover:scale-[1.02] ${projectVisuals[index] || projectVisuals[0]}`}/>
                
                {/* Project Header - Fixed height */}
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-white/90 leading-tight">{p.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{p.subtitle}</p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.description}</p>
                </div>
                
                {/* Content sections - Flexible grow */}
                <div className="flex-grow space-y-4">
                  {p.responsibilities && (
                    <div>
                      <h4 className="text-sm font-medium text-white/80 mb-2">My responsibilities included:</h4>
                      <ul className="space-y-1">
                        {p.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-xs text-white/60 flex items-start leading-relaxed">
                            <span className="text-emerald-400 mr-2 mt-0.5 flex-shrink-0">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {p.impact && (
                    <div>
                      <h4 className="text-sm font-medium text-white/80 mb-2">Impact</h4>
                      <ul className="space-y-1">
                        {p.impact.map((impactItem, impactIndex) => (
                          <li key={impactIndex} className="text-xs text-white/60 flex items-start leading-relaxed">
                            <span className="text-emerald-400 mr-2 mt-0.5 flex-shrink-0">✅</span>
                            <span>{impactItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tags - Fixed at bottom */}
                <div className="mt-4 pt-2 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">{t}</span>
                    ))}
                  </div>
                </div>
              
              {p.link !== '#' && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label={`View ${p.title} project`}
                />
              )}
            </motion.div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="mb-8 text-2xl font-semibold text-white/90 sm:text-3xl">Experience</h2>
        <div className="space-y-8">
          {/* Current Role */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white/90">Technical Product Manager for Generative AI Solutions</h3>
                <p className="text-emerald-400 font-medium">Nexi Group, GenAI Lab</p>
                <p className="text-sm text-white/60">Milan, Italy • 06/2025 – Present</p>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Current</span>
            </div>
            <p className="text-sm text-white/70 mb-4">Leading end-to-end development of generative AI solutions, from strategic planning through to implementation and deployment.</p>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-2">Key Projects Delivered:</h4>
                <ul className="space-y-1 text-sm text-white/70">
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Designed and deployed an internal Meeting Minutes generation tool fully developed in Copilot Studio</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Built an internal Document Translation tool leveraging Azure AI services integrated with Copilot Studio</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Drove the integration of ChatGPT Enterprise into organizational workflows</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Oversaw OpenShift AI integration in a cloud environment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Graduate Program */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white/90">Graduate Program</h3>
                <p className="text-white/80 font-medium">Nexi Group</p>
                <p className="text-sm text-white/60">Milan, Italy • 09/2023 – 06/2025</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">1y 9m</span>
            </div>
            
            {/* Landing Position */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-white/85 mb-2">Landing Position: Data Scientist for Business Insights</h4>
              <ul className="space-y-1 text-sm text-white/70">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Partnered with external clients, including Sky Italy, to deliver comprehensive data-driven reports</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Developed business strategies for marketing department, leveraging data insights to optimize lead generation</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Designed and maintained PowerBI dashboards to track KPIs, driving data-informed decision-making</li>
              </ul>
            </div>

            {/* Rotations */}
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-sm font-medium text-white/85 mb-2">First Rotation: Marketing Offer and Pricing Specialist</h4>
                <p className="text-xs text-white/50 mb-2">10/2023 – 03/2024</p>
                <ul className="space-y-1 text-xs text-white/70">
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Led strategic project on customer retention and churn reduction</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Managed BPER Bank partnership, optimizing portfolio strategies</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-sm font-medium text-white/85 mb-2">Second Rotation: E-commerce Product Marketing Analyst</h4>
                <p className="text-xs text-white/50 mb-2">03/2024 – 10/2024</p>
                <ul className="space-y-1 text-xs text-white/70">
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Developed Power BI dashboards for customer adoption KPIs</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Optimized data ingestion processes within AWS cloud systems</li>
                </ul>
              </div>
            </div>

            {/* Project Management Course */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-base font-medium text-white/85 mb-2">Project Management Course (BIP for Nexi)</h4>
              <ul className="space-y-1 text-sm text-white/70">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Applied learnings to implement Copilot Gen AI in PowerBI, enhancing dashboard readability for IT unit</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Designed learning paths and recorded training sessions for Gen AI features adoption</li>
              </ul>
            </div>
          </div>

          {/* Philips/Signify Internship */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white/90">Brand and Marketing Strategist Intern</h3>
                <p className="text-white/80 font-medium">Philips Hue Lighting @ Signify</p>
                <p className="text-sm text-white/60">Eindhoven, Netherlands • 03/2023 – 08/2023</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">6m</span>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Monitored key performance indicators (KPIs), delivering actionable insights on customer engagement with the Philips Hue mobile app</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Performed in-depth data analysis to shape and define Global Marketing Propositions for 2024</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="mb-8 text-2xl font-semibold text-white/90 sm:text-3xl">Education</h2>
        <div className="space-y-6">
          
          {/* Double Degree Program */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white/90">Double Degree Program in Marketing Analytics</h3>
                <p className="text-sm text-white/80 mt-1">Major: Marketing Analytics and Metrics</p>
                <p className="text-sm text-white/60 mt-2">09/2021 – 07/2023</p>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Double Degree</span>
            </div>

            {/* Two Universities */}
            <div className="grid gap-6 md:grid-cols-2 mb-6">
              {/* Tilburg University */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🇳🇱</span>
                  <div>
                    <h4 className="text-base font-medium text-emerald-400">Tilburg University</h4>
                    <p className="text-xs text-white/60">Tilburg, Netherlands • 09/2022 – 07/2023</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-white/80 mb-2">Relevant Courses</h5>
                    <ul className="space-y-1 text-xs text-white/70">
                      <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Customer Analytics</li>
                      <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Online Data Collection and Management</li>
                      <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Data Preparation and Workflow Management</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-white/80 mb-2">Programming Languages</h5>
                    <div className="flex gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">R</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">Python</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-white/80 mb-2">Final Grade</h5>
                    <span className="inline-block rounded-full bg-emerald-500/20 text-emerald-400 px-2 py-1 text-xs font-medium">8/10</span>
                  </div>
                </div>
              </div>

              {/* Luiss Guido Carli */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🇮🇹</span>
                  <div>
                    <h4 className="text-base font-medium text-white/80">Luiss Guido Carli</h4>
                    <p className="text-xs text-white/60">Rome, Italy • 09/2021 – 07/2023</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-white/80 mb-2">Relevant Courses</h5>
                    <ul className="space-y-1 text-xs text-white/70">
                      <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Marketing Metrics</li>
                      <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Statistics for Marketing</li>
                      <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Consumer Behavior</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-white/80 mb-2">Statistical Tools</h5>
                    <div className="flex gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">SPSS</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-white/80 mb-2">Final Grade</h5>
                    <span className="inline-block rounded-full bg-yellow-500/20 text-yellow-400 px-2 py-1 text-xs font-medium">110/110 Cum Laude</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shared Thesis */}
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <h4 className="text-sm font-medium text-white/80 mb-2">Joint Thesis Project</h4>
              <p className="text-sm text-white/70 mb-2">Preference Reversal: Hedonic and Utilitarian Considerations for Physical and Digital Products</p>
              <p className="text-xs text-white/60">Completed as part of the double degree program, combining analytical approaches from both institutions.</p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white/90">Bachelor's Degree</h3>
                <p className="text-white/80 font-medium">Sapienza University</p>
                <p className="text-sm text-white/60">Rome, Italy • 09/2017 – 07/2020</p>
                <p className="text-sm text-white/80 mt-1">Management and Business Administration</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Bachelor's</span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div>
                <h5 className="text-sm font-medium text-white/80 mb-2">Thesis</h5>
                <p className="text-xs text-white/70">Influencer Marketing: The Brand-Influencer Solution for New Marketing Strategies in the Digital Age</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-white/80 mb-2">Final Grade</h5>
                <span className="inline-block rounded-full bg-blue-500/20 text-blue-400 px-2 py-1 text-xs font-medium">103/110</span>
              </div>
            </div>

            {/* Erasmus Program */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇸🇪</span>
                  <div>
                    <h4 className="text-base font-medium text-purple-400">Erasmus+ Exchange Program</h4>
                    <p className="text-xs text-white/60">Södertörn University • Stockholm, Sweden • 08/2018 – 01/2019</p>
                    <p className="text-xs text-white/70 mt-1">Economics and Management</p>
                  </div>
                </div>
                <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-2 py-1 text-xs text-purple-300">Exchange</span>
              </div>
              <div>
                <h5 className="text-sm font-medium text-white/80 mb-2">Relevant Courses</h5>
                <ul className="space-y-1 text-xs text-white/70">
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Macroeconomics</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Statistics</li>
                  <li className="flex items-start"><span className="text-emerald-400 mr-2">•</span>Business Administration</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Skills & Expertise - Left Side */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold text-white/90 sm:text-3xl">Skills & Expertise</h2>
            <div className="space-y-6">
              {[
                {
                  category: 'AI & Automation',
                  icon: '🤖',
                  skills: ['Microsoft Copilot Studio', 'Azure AI Foundry', 'AI Solution Design', 'Workflow Automation']
                },
                {
                  category: 'Product Management',
                  icon: '📋',
                  skills: ['Project Management', 'Stakeholder Alignment', 'Digital Transformation', 'Cost Optimization']
                },
                {
                  category: 'Research & Design',
                  icon: '🔍',
                  skills: ['UX Research', 'User Experience Design', 'Process Design', 'Security Integration']
                }
              ].map((skillGroup, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-2xl">{skillGroup.icon}</span>
                    <h3 className="font-medium text-white/90">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                        <span className="text-sm text-white/70">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests - Right Side */}
          <div>
            <h2 className="mb-8 text-2xl font-semibold text-white/90 sm:text-3xl">Personal Interests</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Beach Volleyball',
                  description: 'Passionate beach volleyball player who loves the competitive spirit and teamwork.',
                  emoji: '🏐'
                },
                {
                  title: 'Board Games',
                  description: 'Enthusiast of strategic board games (e.g. Wingspan, Catan, 7 Wonders) that challenge problem-solving and critical thinking skills.',
                  emoji: '🎲'
                },
                {
                  title: 'DIY & Crafting',
                  description: 'Creative maker who enjoys hands-on projects, from home improvement to artistic crafts.',
                  emoji: '🛠️'
                },
                {
                  title: 'Video Games',
                  description: 'Gaming enthusiast who enjoys Nintendo Switch and PlayStation 4 titles for relaxation and creative inspiration.',
                  emoji: '🎮'
                }
              ].map((interest, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="mb-3 text-2xl">{interest.emoji}</div>
                  <h3 className="font-medium text-white/90 mb-2">{interest.title}</h3>
                  <p className="text-sm text-white/70">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-fuchsia-500/10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white/90 sm:text-3xl mb-3">Let's Connect</h2>
            <p className="text-white/70">Based in Italy • Available for remote and hybrid roles</p>
          </div>
          
          {/* Contact Actions */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <a href="mailto:ludovicadonatelli@outlook.it" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 font-medium text-black hover:bg-emerald-300 transition-colors">
              <Mail className="h-5 w-5"/> ludovicadonatelli@outlook.it
            </a>
            <a href="https://www.linkedin.com/in/ludovica-donatelli-0022221a3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors">
              <Linkedin className="h-5 w-5"/> LinkedIn Profile
            </a>
          </div>

          {/* CV Download */}
          <div className="border-t border-white/10 pt-6 text-center">
            <h3 className="text-lg font-medium text-white/90 mb-2">Prefer a PDF?</h3>
            <p className="text-sm text-white/70 mb-4">Download a clean one-pager with experience, education, and highlights.</p>
            <a 
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/15 transition-colors" 
              href="/Resume_Donatelli_Ludovica_2025.pdf"
              download="Resume_Donatelli_Ludovica_2025.pdf"
              target="_blank"
            >
              <FileText className="h-5 w-5" /> Download CV
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Ludovica Donatelli. Built with React & Tailwind.
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-emerald-500 p-3 text-white shadow-lg hover:bg-emerald-600 transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
}
 