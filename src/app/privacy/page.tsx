import { Header, SiteFooter } from "@/components/nexoreya-home";
export const metadata = { title: "Privacy" };
export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main-content" className="nx-page">
        <article className="nx-wrap" style={{ maxWidth: 850 }}>
          <p className="nx-kicker">Privacy</p>
          <h1>Your information, handled with care.</h1>
          <p>
            This website provides information about Nexoreya and a way to
            prepare an email enquiry. The enquiry form runs in your browser. It
            does not submit or store your form entries on our website.
          </p>
          <h2>When you contact us</h2>
          <p>
            If you send an email, we receive the information you choose to
            include, such as your name, email address, business and message. We
            use it to respond to your enquiry and discuss the services you
            requested.
          </p>
          <h2>Website hosting</h2>
          <p>
            Our hosting provider processes technical request information needed
            to serve and secure this website. We have not added advertising
            trackers or analytics cookies to this site.
          </p>
          <h2>Questions and requests</h2>
          <p>
            To ask about information you have shared or request its deletion,
            contact <a href="mailto:fahad.kr@gmail.com">fahad.kr@gmail.com</a>.
            We may retain information where necessary for an ongoing engagement
            or legal obligations.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
