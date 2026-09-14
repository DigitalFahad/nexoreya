"use client";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Bot,
  ChartNoAxesColumnIncreasing,
  Check,
  CirclePlay,
  ClipboardCheck,
  Home,
  Layers,
  Menu,
  MessageCircle,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Growth Strategy",
    slug: "growth-strategy",
    note: "Find the opportunity.",
    icon: ChartNoAxesColumnIncreasing,
    items: [
      "Go-to-market strategy",
      "Market research",
      "Commercial strategy",
      "Fractional leadership",
    ],
  },
  {
    title: "Intelligent Growth Systems",
    slug: "intelligent-growth-systems",
    note: "Remove friction. Recover opportunity.",
    icon: Network,
    items: [
      "AI agents & automation",
      "CRM & lead management",
      "Customer operations",
      "Connected workflows",
    ],
  },
  {
    title: "Digital Experience & Conversion",
    slug: "digital-experience",
    note: "Turn attention into action.",
    icon: Layers,
    items: [
      "Websites & e-commerce",
      "Web apps & platforms",
      "Customer journeys",
      "UX & conversion optimization",
    ],
  },
  {
    title: "Demand & Content",
    slug: "demand-content",
    note: "Create and capture demand.",
    icon: CirclePlay,
    items: [
      "Performance marketing",
      "Content systems",
      "AI video",
      "Creative production",
    ],
  },
];
const products = [
  {
    name: "AI Voice Agent",
    icon: AudioLines,
    description: "Answer, qualify and route incoming calls.",
    detail:
      "Give every caller a clear next step. We design voice workflows around your services, qualification criteria and team, with human handoff when a conversation needs it.",
  },
  {
    name: "WhatsApp AI",
    icon: MessageCircle,
    description: "Keep conversations moving, around the clock.",
    detail:
      "Connect enquiries, product questions and follow-up in one conversation. Built around approved business knowledge and escalation to your team.",
  },
  {
    name: "AI Lead Recovery",
    icon: Network,
    description: "Re-engage opportunities that went quiet.",
    detail:
      "Create timely follow-up for existing enquiries. Segment leads, agree the message and measure re-engagement while respecting consent and channel preferences.",
  },
  {
    name: "AI Appointment Setter",
    icon: ClipboardCheck,
    description: "Move from interest to a booked conversation.",
    detail:
      "Collect the information your team needs, match prospects to the right next step and connect scheduling to your existing calendar workflow.",
  },
  {
    name: "AI Customer Support",
    icon: Bot,
    description: "Resolve routine questions. Escalate the rest.",
    detail:
      "Make approved answers easy to access and repetitive requests easier to resolve. Keep people in the loop for exceptions, sensitive issues and complex requests.",
  },
  {
    name: "AI Receptionist",
    icon: Phone,
    description: "A connected front desk for your business.",
    detail:
      "Bring initial response, enquiry capture, routing and follow-up together so your team can spend more time on the conversations that matter.",
  },
];
const nav = [
  ["Solutions", "/#solutions"],
  ["Industries", "/#industries"],
  ["Work", "/#work"],
  ["How We Work", "/#process"],
  ["Insights", "/#insights"],
  ["About", "/about"],
];
export function Brand() {
  return (
    <span className="nx-brand">
      <span className="nx-mark" aria-hidden="true" />
      <span>NEXOREYA</span>
    </span>
  );
}
export function CTA({
  children,
  href = "/contact",
  secondary = false,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
}) {
  return (
    <Link className={`nx-button ${secondary ? "secondary" : ""}`} href={href}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nx-header">
      <div className="nx-wrap nx-nav">
        <Link href="/" aria-label="Nexoreya home">
          <Brand />
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map(([name, href]) => (
            <Link key={name} href={href}>
              {name}
            </Link>
          ))}
        </nav>
        <Link className="nx-nav-cta" href="/contact">
          Book a Strategy Session <ArrowUpRight size={15} />
        </Link>
        <button
          className="nx-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="nx-mobile-nav"
          aria-label="Mobile navigation"
        >
          {nav.map(([name, href]) => (
            <Link onClick={() => setOpen(false)} href={href} key={name}>
              {name}
              <ArrowRight size={15} />
            </Link>
          ))}
          <Link href="/contact">
            Book a Strategy Session <ArrowRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="nx-footer">
      <div className="nx-wrap">
        <div className="nx-footer-grid">
          <div>
            <Link href="/" aria-label="Nexoreya home">
              <Brand />
            </Link>
            <p>
              AI-powered growth, digital transformation
              <br />
              and business solutions.
            </p>
            <strong>GROWTH, ENGINEERED.</strong>
          </div>
          <div>
            <h3>Solutions</h3>
            {services.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>Company</h3>
            <Link href="/about">About</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#process">How We Work</Link>
            <Link href="/#insights">Insights</Link>
          </div>
          <div>
            <h3>Connect</h3>
            <Link href="/contact">Book a Strategy Session</Link>
            <a href="mailto:fahad.kr@gmail.com">fahad.kr@gmail.com</a>
            <Link href="/contact?interest=Agency%20partnership">
              Partner with Nexoreya
            </Link>
          </div>
        </div>
        <div className="nx-legal">
          <span>
            © {new Date().getFullYear()} Nexoreya. All rights reserved.
          </span>
          <Link href="/privacy">Privacy</Link>
          <span>A more intelligent tomorrow.</span>
        </div>
      </div>
    </footer>
  );
}
function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="nx-kicker">{children}</p>;
}
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ y: [8, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
function DetailDialog({
  product,
  onClose,
}: {
  product: (typeof products)[number];
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    d?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      d?.close();
      document.body.style.overflow = old;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="nx-dialog"
      aria-labelledby="system-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        className="nx-close"
        onClick={onClose}
        aria-label="Close solution details"
      >
        <X />
      </button>
      <product.icon size={36} />
      <Kicker>Nexoreya systems</Kicker>
      <h2 id="system-title">{product.name}</h2>
      <p>{product.detail}</p>
      <h3>Designed around your business</h3>
      <ul>
        <li>Discovery and workflow design</li>
        <li>Integration with your existing tools</li>
        <li>Testing, monitoring and team handover</li>
      </ul>
      <CTA href={`/contact?interest=${encodeURIComponent(product.name)}`}>
        Discuss this system
      </CTA>
    </dialog>
  );
}
function Conversation() {
  const [scenario, setScenario] = useState(0);
  const scenes = [
    {
      label: "Appointments",
      question: "Hi! I'd like to book an appointment.",
      answer:
        "Of course. What service are you looking for, and which day suits you?",
      reply: "A consultation next Tuesday, please.",
      end: "Let me connect you with the team to confirm availability.",
    },
    {
      label: "Sales enquiries",
      question: "Can you help us respond to leads faster?",
      answer: "Where do most of your enquiries arrive today?",
      reply: "Website forms and WhatsApp.",
      end: "We can connect both into one response and follow-up workflow.",
    },
    {
      label: "Customer support",
      question: "Can I speak to someone about my order?",
      answer:
        "I can help get you to the right person. Do you have your order reference?",
      reply: "Yes, it is NX-1042.",
      end: "Thank you. I have the reference ready for the support team.",
    },
  ];
  const s = scenes[scenario];
  return (
    <div className="nx-conversation">
      <div className="nx-conversation-top">
        <span>
          <span className="nx-status" /> Connected conversations
        </span>
        <span>Example flow</span>
      </div>
      <div
        role="tablist"
        aria-label="Conversation examples"
        className="nx-tabs"
      >
        {scenes.map((v, i) => (
          <button
            id={`tab-${i}`}
            aria-controls={`conversation-${i}`}
            key={v.label}
            role="tab"
            aria-selected={scenario === i}
            tabIndex={scenario === i ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                const next = (scenario + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                setScenario(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
            onClick={() => setScenario(i)}
          >
            {v.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={scenario}
          role="tabpanel"
          id={`conversation-${scenario}`}
          aria-labelledby={`tab-${scenario}`}
          className="nx-messages"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[s.question, s.answer, s.reply, s.end].map((m, i) => (
            <motion.p
              key={m}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className={i % 2 ? "agent" : "visitor"}
            >
              {i % 2 === 1 && <Check size={14} />}
              <span>{m}</span>
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="nx-conversation-bottom">
        <ShieldCheck size={14} /> Built with a human handoff.
      </div>
    </div>
  );
}
export function NexoreyaHome() {
  const [selected, setSelected] = useState<(typeof products)[number] | null>(
    null,
  );
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="main-content">
        <section className="nx-hero">
          <div
            className="nx-hero-art"
            role="img"
            aria-label="A fine network of connected nodes representing strategy, people, data, AI and technology"
          />
          <div className="nx-wrap nx-hero-inner">
            <Reveal className="nx-hero-copy">
              <Kicker>AI-powered growth & digital transformation</Kicker>
              <h1>
                GROWTH,
                <br />
                <span>ENGINEERED.</span>
              </h1>
              <p>
                We design and build the systems that connect strategy, AI,
                technology and execution to create measurable business growth.
              </p>
              <div className="nx-actions">
                <CTA>Book a Growth Strategy Session</CTA>
                <CTA href="#process" secondary>
                  Explore How We Work
                </CTA>
              </div>
              <div className="nx-hero-foot">
                <span className="nx-status" /> Strategy. Systems. People. Real
                outcomes.
              </div>
            </Reveal>
            <div className="nx-intelligence">
              <div className="nx-intelligence-title">
                Connected
                <br />
                Intelligence<span>for Real Progress</span>
              </div>
              {[
                "Strategy",
                "AI & Automation",
                "Technology",
                "Growth",
                "Data",
                "People",
              ].map((s, i) => (
                <span key={s} className={`nx-node node-${i}`}>
                  <span /> {s}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="nx-opportunity">
          <div className="nx-wrap nx-opportunity-grid">
            <Reveal>
              <Kicker>The opportunity</Kicker>
              <h2>
                Your business doesn’t
                <br />
                need more tools.
                <br />
                <span className="nx-muted">
                  It needs the right systems working together.
                </span>
              </h2>
            </Reveal>
            <div>
              <p>
                Disconnected tools, fragmented strategies and manual processes
                slow growth. Nexoreya brings everything together so your
                business can move faster, work smarter and achieve more.
              </p>
              <a className="nx-text-link" href="#solutions">
                See the bigger picture <ArrowRight size={15} />
              </a>
            </div>
            <div
              className="nx-convergence"
              aria-label="Strategy, AI, technology, people, data and execution converge on growth"
            >
              <div>
                {[
                  "Strategy",
                  "AI",
                  "Technology",
                  "People",
                  "Data",
                  "Execution",
                ].map((t) => (
                  <span key={t}>
                    <i />
                    {t}
                  </span>
                ))}
              </div>
              <svg viewBox="0 0 220 180" aria-hidden="true">
                {[15, 45, 75, 105, 135, 165].map((y) => (
                  <path key={y} d={`M0 ${y} C100 ${y} 100 90 220 90`} />
                ))}
              </svg>
              <strong>
                <span className="nx-status" />
                GROWTH
              </strong>
            </div>
          </div>
        </section>
        <section id="solutions" className="nx-section">
          <div className="nx-wrap">
            <Reveal className="nx-section-head">
              <div>
                <Kicker>Where we engineer growth</Kicker>
                <h2>Four connected systems. One growth partner.</h2>
              </div>
              <a href="/contact" className="nx-text-link">
                Find your next move <ArrowRight size={15} />
              </a>
            </Reveal>
            <div className="nx-services">
              {services.map((s, i) => (
                <Reveal key={s.slug}>
                  <Link
                    className={`nx-service service-${i}`}
                    href={`/solutions/${s.slug}`}
                  >
                    <span className="nx-service-number">0{i + 1}</span>
                    <s.icon size={39} strokeWidth={1.4} />
                    <h3>{s.title}</h3>
                    <p>{s.note}</p>
                    <ul>
                      {s.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <span className="nx-round-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="nx-feature nx-dark">
          <div className="nx-wrap nx-feature-grid">
            <Reveal>
              <Kicker>Featured solution</Kicker>
              <h2>
                Turn missed opportunities
                <br />
                into conversations.
              </h2>
              <p>
                AI voice, WhatsApp, CRM, qualification and follow-up, working
                together as one lead-conversion system.
              </p>
              <CTA href="/contact?interest=AI%20Lead%20Conversion">
                Explore AI Lead Conversion
              </CTA>
            </Reveal>
            <div className="nx-phone">
              <div className="nx-phone-speaker" />
              <span>INCOMING ENQUIRY</span>
              <div className="nx-voice">
                <AudioLines size={48} strokeWidth={1} />
              </div>
              <strong>A better first response.</strong>
              <p>Listen. Understand. Connect.</p>
              <div className="nx-phone-bottom">
                <MessageCircle />
                <Phone />
              </div>
            </div>
            <ol className="nx-lead-flow">
              {[
                [Phone, "New lead", "Website, ads, phone or WhatsApp"],
                [Bot, "AI response", "Answer and understand the enquiry"],
                [
                  ClipboardCheck,
                  "Qualification",
                  "Capture the details that matter",
                ],
                [Layers, "CRM & follow-up", "Keep your pipeline connected"],
                [
                  Check,
                  "The next step",
                  "Book, route or hand off to your team",
                ],
              ].map(([Icon, title, desc]) => {
                const I = Icon as typeof Phone;
                return (
                  <li key={String(title)}>
                    <span>
                      <I size={19} />
                    </span>
                    <div>
                      <strong>{String(title)}</strong>
                      <p>{String(desc)}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
        <section id="systems" className="nx-section">
          <div className="nx-wrap">
            <Reveal className="nx-section-head">
              <div>
                <Kicker>Nexoreya systems</Kicker>
                <h2>Intelligent systems, designed to work.</h2>
              </div>
              <a
                className="nx-text-link"
                href="/solutions/intelligent-growth-systems"
              >
                Explore the possibilities <ArrowRight size={15} />
              </a>
            </Reveal>
            <div className="nx-products">
              {products.map((p, i) => (
                <button
                  className="nx-product"
                  key={p.name}
                  onClick={() => setSelected(p)}
                >
                  <div className={`nx-product-visual product-${i}`}>
                    <p.icon size={28} strokeWidth={1.5} />
                    <div className="nx-mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="nx-mini-check">
                      <Check size={12} />
                    </span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <ArrowUpRight size={15} />
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="nx-creative nx-dark" id="creative">
          <div className="nx-wrap nx-creative-grid">
            <Reveal>
              <Kicker>AI content & video</Kicker>
              <h2>
                Imagine producing
                <br />
                at the speed of ideas.
              </h2>
              <p>
                Visual content, campaigns and AI-powered video shaped around
                your brand and your ambition.
              </p>
              <CTA href="/solutions/demand-content">
                Explore AI Content & Video
              </CTA>
            </Reveal>
            <div className="nx-creative-work">
              <div className="nx-editorial editorial-people">
                <span>Human stories.</span>
              </div>
              <div className="nx-editorial editorial-architecture">
                <span>New perspectives.</span>
              </div>
              <div className="nx-editorial editorial-mountain">
                <span>Bigger possibilities.</span>
              </div>
            </div>
          </div>
        </section>
        <section className="nx-section nx-response">
          <div className="nx-wrap nx-response-grid">
            <Reveal>
              <Kicker>Intelligent systems</Kicker>
              <h2>
                What if your business
                <br />
                could respond instantly?
              </h2>
              <p>
                Connected customer operations that answer, assist, qualify,
                schedule and follow up, with your team in control.
              </p>
              <CTA href="/solutions/intelligent-growth-systems">
                See Intelligent Systems
              </CTA>
            </Reveal>
            <Conversation />
            <div className="nx-response-note">
              <span className="nx-status" />
              <h3>
                Always ready.
                <br />
                Always connected.
                <br />
                Built for business.
              </h3>
              <p>
                The right response.
                <br />
                The right next step.
              </p>
            </div>
          </div>
        </section>
        <section className="nx-section nx-work" id="work">
          <div className="nx-wrap">
            <div className="nx-work-grid">
              <Reveal>
                <Kicker>Commercial experience</Kicker>
                <h2>
                  Built on experience.
                  <br />
                  Measured by outcomes.
                </h2>
                <p>
                  Commercial perspective across growth, e-commerce and
                  performance marketing.
                </p>
                <a href="/about" className="nx-text-link">
                  Meet Nexoreya <ArrowRight size={15} />
                </a>
              </Reveal>
              {[
                ["22%", "Year-on-year QSR growth", "Restaurants & QSR"],
                ["4.83×", "Amazon PPC ROAS", "E-commerce"],
                ["15×", "Meta ROAS", "Performance marketing"],
              ].map(([metric, label, tag], i) => (
                <div className="nx-result" key={tag}>
                  <div className={`nx-result-image result-${i}`}>
                    <span>{tag}</span>
                  </div>
                  <strong>{metric}</strong>
                  <p>{label}</p>
                </div>
              ))}
            </div>
            <p className="nx-proof-note">
              Selected professional experience supplied by Nexoreya. Results are
              context-specific and do not guarantee future performance.
            </p>
          </div>
        </section>
        <section className="nx-section nx-industries" id="industries">
          <div className="nx-wrap">
            <Kicker>Built for</Kicker>
            <h2>Businesses with something to scale.</h2>
            <div className="nx-industry-list">
              {[
                [Users, "Professional services"],
                [ShieldCheck, "Healthcare"],
                [Home, "Real estate"],
                [Store, "E-commerce & retail"],
                [ChartNoAxesColumnIncreasing, "Restaurants & QSR"],
                [Bot, "Technology & SaaS"],
                [Layers, "Education"],
                [Network, "Home & field services"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Users;
                return (
                  <Link
                    href={`/contact?interest=${encodeURIComponent(String(label))}`}
                    key={String(label)}
                  >
                    <I size={25} strokeWidth={1.4} />
                    <span>{String(label)}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section className="nx-section nx-process" id="process">
          <div className="nx-wrap nx-process-grid">
            <div>
              <Kicker>Why Nexoreya</Kicker>
              <h2>
                One partner.
                <br />
                The right capabilities.
              </h2>
              <div className="nx-process-steps">
                {[
                  [
                    Sparkles,
                    "Think",
                    "Understand the business before recommending technology.",
                  ],
                  [
                    Network,
                    "Build",
                    "Turn strategy into practical systems and experiences.",
                  ],
                  [
                    ChartNoAxesColumnIncreasing,
                    "Grow",
                    "Measure what matters and scale what works.",
                  ],
                ].map(([Icon, title, copy]) => {
                  const I = Icon as typeof Sparkles;
                  return (
                    <div key={String(title)}>
                      <I size={25} />
                      <h3>{String(title)}</h3>
                      <p>{String(copy)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="nx-partner">
              <Kicker>For agencies & technology partners</Kicker>
              <h2>
                Your clients.
                <br />
                Your relationship.
                <br />
                Our execution.
              </h2>
              <p>
                Extend your capabilities with strategy, AI, digital experiences
                and content, delivered as one connected team.
              </p>
              <CTA href="/contact?interest=Agency%20partnership">
                Partner with Nexoreya
              </CTA>
            </div>
          </div>
        </section>
        <section className="nx-section nx-insights" id="insights">
          <div className="nx-wrap">
            <Kicker>Nexoreya intelligence</Kicker>
            <h2>A clearer perspective on growth.</h2>
            <div className="nx-insight-list">
              {[
                [
                  "1",
                  "Strategy",
                  "AI is a capability. Growth still needs a strategy.",
                ],
                [
                  "2",
                  "Operations",
                  "Your next growth opportunity could be a faster response.",
                ],
                [
                  "3",
                  "Transformation",
                  "Connect the business before adding the technology.",
                ],
              ].map(([slug, tag, title]) => (
                <Link key={slug} href={`/intelligence/${slug}`}>
                  <span>{tag}</span>
                  <h3>{title}</h3>
                  <ArrowUpRight size={21} />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="nx-final nx-dark">
          <div className="nx-wrap nx-final-grid">
            <div>
              <Kicker>Let’s build what’s next</Kicker>
              <h2>
                Ready to build
                <br />
                what’s next?
              </h2>
            </div>
            <div>
              <p>
                Tell us what you’re trying to achieve, what’s getting in the
                way, or what you want to build. We’ll figure out the next step
                together.
              </p>
              <div className="nx-actions">
                <CTA>Book a Growth Strategy Session</CTA>
                <a className="nx-text-link" href="mailto:fahad.kr@gmail.com">
                  Tell us what you need <ArrowRight size={15} />
                </a>
              </div>
            </div>
            <span className="nx-tomorrow">
              A more
              <br />
              intelligent
              <br />
              tomorrow.
            </span>
          </div>
        </section>
      </main>
      <SiteFooter />
      {selected && (
        <DetailDialog product={selected} onClose={() => setSelected(null)} />
      )}
    </MotionConfig>
  );
}
