"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Copy, Mail } from "lucide-react";
import { Header, SiteFooter } from "@/components/nexoreya-home";

export default function Contact() {
  return (
    <Suspense fallback={<p>Loading enquiry form...</p>}>
      <ContactContent />
    </Suspense>
  );
}
function ContactContent() {
  const searchParams = useSearchParams();
  const [interest, setInterest] = useState(searchParams.get("interest") ?? "");
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Growth Strategy Session enquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\nInterest: ${data.get("interest")}\n\nWhat I want to achieve:\n${data.get("message")}`;
    setDraft(body);
    setCopied(false);
    window.location.href = `mailto:fahad.kr@gmail.com?subject=${encodeURIComponent("Nexoreya | Growth Strategy Session")}&body=${encodeURIComponent(body)}`;
  }
  return (
    <>
      <Header />
      <main id="main-content" className="nx-page">
        <div className="nx-wrap">
          <p className="nx-kicker">Let’s build what’s next</p>
          <h1>
            Your next stage of growth
            <br />
            starts with a conversation.
          </h1>
          <div className="nx-page-columns">
            <section>
              <p className="nx-intro">
                Tell us what you want to achieve, what is getting in the way, or
                what you are ready to build.
              </p>
              <h2>Book a Growth Strategy Session</h2>
              <p>
                We’ll review your priorities and reply personally to arrange a
                focused conversation. There’s no need to arrive with a technical
                brief.
              </p>
              <h3>What we’ll explore</h3>
              <ul>
                <li>Where your business is today</li>
                <li>Your biggest opportunity or constraint</li>
                <li>The practical next step to move forward</li>
              </ul>
              <a className="nx-text-link" href="mailto:fahad.kr@gmail.com">
                <Mail size={17} />
                fahad.kr@gmail.com
              </a>
            </section>
            <form className="nx-contact-form" onSubmit={submit}>
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={180}
                />
              </label>
              <label>
                Business or website
                <input
                  name="business"
                  autoComplete="organization"
                  required
                  maxLength={200}
                />
              </label>
              <label>
                What can we help with?
                <input
                  name="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="Strategy, AI, digital, content, or a partnership"
                  maxLength={200}
                />
              </label>
              <label>
                What would you like to achieve?
                <textarea name="message" required maxLength={3000} />
              </label>
              <p className="nx-form-note">
                This prepares an email to Fahad. Your email app opens so you can
                review and send it. Nothing is submitted until you send the
                email.
              </p>
              <button type="submit" className="nx-button">
                Prepare my enquiry <ArrowRight size={16} />
              </button>
              {draft && (
                <div className="nx-form-result" role="status">
                  Your enquiry is ready in your email app. If it didn’t open,{" "}
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(draft);
                        setCopied(true);
                      } catch {
                        setCopied(false);
                      }
                    }}
                  >
                    <Copy size={12} style={{ display: "inline" }} />{" "}
                    {copied ? "Copied" : "copy your enquiry"}
                  </button>{" "}
                  and email{" "}
                  <a href="mailto:fahad.kr@gmail.com">fahad.kr@gmail.com</a>.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
