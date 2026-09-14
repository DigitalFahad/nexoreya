import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CTA, Header, SiteFooter } from "./nexoreya-home";

const offers: Record<
  string,
  { intro: string; points: string[]; outcome: string }
> = {
  "Growth Strategy": {
    intro:
      "Define where to play, how to win and what needs to change to unlock growth. Build a practical commercial direction before investing in channels, platforms or automation.",
    points: [
      "Market and customer research",
      "Positioning and go-to-market planning",
      "Commercial priorities and growth roadmaps",
      "Fractional growth leadership",
    ],
    outcome:
      "A focused growth roadmap that connects the opportunity, business economics, priorities and measures of success.",
  },
  "Intelligent Growth Systems": {
    intro:
      "Connect customer conversations, business knowledge and everyday workflows. Give your team more capacity without losing the human judgment that makes your business valuable.",
    points: [
      "AI voice and WhatsApp workflows",
      "Lead qualification and follow-up",
      "CRM integration and customer operations",
      "Knowledge-based support and human handoff",
    ],
    outcome:
      "A working, tested system built around your operating process, with clear ownership, monitoring and a practical handover.",
  },
  "Digital Experience & Conversion": {
    intro:
      "Build digital experiences that make your business easier to understand and easier to buy from. Connect brand, usability, performance and the path to conversion.",
    points: [
      "Websites and e-commerce experiences",
      "Web applications and business platforms",
      "Customer journeys and conversion research",
      "Performance, accessibility and ongoing optimization",
    ],
    outcome:
      "A fast, usable digital experience with a clear customer journey and an agreed plan for measuring conversion.",
  },
  "Demand & Content": {
    intro:
      "Create and capture demand with a clear commercial purpose. Bring content, creative and distribution together around the people you need to reach.",
    points: [
      "Performance marketing strategy and execution",
      "Content systems and campaign planning",
      "AI-assisted visual content and video",
      "Creative testing and performance analysis",
    ],
    outcome:
      "A repeatable content and demand system, with creative direction, production workflows and measures tied to business priorities.",
  },
  About: {
    intro:
      "Nexoreya is an AI-powered growth and digital transformation partner. We connect strategy, technology, people and execution into systems built for measurable business outcomes.",
    points: [
      "Commercial thinking before technology decisions",
      "Connected capabilities across strategy, AI, digital and demand",
      "Practical implementation with clear ownership",
      "Continuous measurement and improvement",
    ],
    outcome:
      "Our belief is simple: growth is not accidental. It is designed. We work with ambitious businesses and agency partners to turn that belief into everyday operating practice.",
  },
  "How We Work": {
    intro:
      "Think first. Build deliberately. Improve continuously. Every engagement starts with the business and the constraint that matters most.",
    points: [
      "Discover: understand the business, customers and goals",
      "Diagnose: identify the constraint and agree priorities",
      "Design and build: create, integrate and test the right system",
      "Optimize: measure performance and improve what works",
    ],
    outcome:
      "A shared definition of success, a practical scope and clear milestones. We agree the commercial objective and delivery responsibilities before implementation begins.",
  },
};
export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const offer = offers[title];
  return (
    <>
      <Header />
      <main id="main-content" className="nx-page">
        <div className="nx-wrap">
          <Link href="/" className="nx-back">
            <ArrowLeft size={15} />
            Back to Nexoreya
          </Link>
          <p className="nx-kicker" style={{ marginTop: 36 }}>
            {eyebrow}
          </p>
          <h1>{title === "About" ? "Growth, engineered together." : title}</h1>
          <p className="nx-intro">{offer?.intro ?? description}</p>
          <div className="nx-page-columns">
            <section>
              <h2>
                {title === "About"
                  ? "What we believe"
                  : "What we bring together"}
              </h2>
              <ul>
                {offer?.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>
                {title === "About"
                  ? "A more intelligent tomorrow"
                  : "A clear outcome"}
              </h2>
              <p>{offer?.outcome}</p>
              <CTA href={`/contact?interest=${encodeURIComponent(title)}`}>
                Let’s discuss your business
              </CTA>
            </section>
          </div>
          <section
            style={{
              marginTop: 55,
              borderTop: "1px solid #dce5df",
              paddingTop: 25,
            }}
          >
            <h2>Start with the right question.</h2>
            <p>
              What is getting in the way of your next stage of growth? Tell us
              where you are now and where you want to go. We will help identify
              a practical next step.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
