import { notFound } from "next/navigation";
import { Header, SiteFooter, CTA } from "@/components/nexoreya-home";
const articles: Record<
  string,
  { title: string; tag: string; intro: string; sections: [string, string][] }
> = {
  "1": {
    title: "AI is a capability. Growth still needs a strategy.",
    tag: "Strategy",
    intro:
      "The useful question is not simply where AI can be added. It is which business constraint deserves attention, and whether AI is the right way to address it.",
    sections: [
      [
        "Start with the outcome",
        "A new tool is not a commercial objective. Define the change you want to see: faster enquiry handling, less repetitive work, better customer information or a clearer path to purchase. The objective gives every technology decision a purpose.",
      ],
      [
        "Find the constraint",
        "Map how work happens today. Look for delayed handoffs, repeated data entry, missing information and decisions that cannot be made confidently. These observations create a more useful shortlist than a catalogue of AI features.",
      ],
      [
        "Measure a complete workflow",
        "A successful demonstration does not automatically translate into a reliable operating process. Agree who owns the workflow, what happens when the system is uncertain, and how performance will be reviewed. Start with a bounded use case and expand based on evidence.",
      ],
    ],
  },
  "2": {
    title: "Your next growth opportunity could be a faster response.",
    tag: "Operations",
    intro:
      "Generating more demand is only one part of growth. The way a business handles the demand it already receives deserves equal attention.",
    sections: [
      [
        "Follow an enquiry from start to finish",
        "What happens after someone fills in a form, sends a message or calls your business? Review the full path from first contact to a useful next step. Pay attention to what happens outside business hours and between teams.",
      ],
      [
        "Connect the next action",
        "An acknowledgement is helpful, but it is not the same as progress. A good response can capture missing information, answer an approved question or route the enquiry to the person best placed to help. Keep that context with the conversation.",
      ],
      [
        "Keep people in the loop",
        "Automation should make it easier for your team to respond well. Define clear handoff rules for sensitive, complex or uncertain conversations. Measure useful outcomes, including qualified conversations and completed next steps, alongside response times.",
      ],
    ],
  },
  "3": {
    title: "Connect the business before adding the technology.",
    tag: "Transformation",
    intro:
      "Digital transformation works best when the operating model, customer journey and technology decisions move together.",
    sections: [
      [
        "Map the connections",
        "Teams often experience the same customer through different tools. Write down where information originates, where it is copied and where it stops. This makes hidden dependencies visible before implementation begins.",
      ],
      [
        "Design ownership into the system",
        "Every workflow needs a person responsible for its quality. Agree who maintains the information, handles exceptions and decides when the process should change. Technology can support accountability but cannot replace it.",
      ],
      [
        "Build in stages",
        "Prioritize a meaningful workflow that can be tested from beginning to end. Validate it with the people who use it, measure the result and improve it before extending the scope. A connected system grows from repeatable practice.",
      ],
    ],
  },
};
export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: articles[slug]?.title };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles[slug];
  if (!a) notFound();
  return (
    <>
      <Header />
      <main id="main-content" className="nx-page">
        <article className="nx-wrap" style={{ maxWidth: 860 }}>
          <p className="nx-kicker">Nexoreya intelligence / {a.tag}</p>
          <h1>{a.title}</h1>
          <p className="nx-intro">{a.intro}</p>
          {a.sections.map(([title, copy]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
            </section>
          ))}
          <CTA>Discuss your next step</CTA>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
