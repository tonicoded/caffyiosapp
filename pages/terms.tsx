import Head from "next/head";
import React from "react";

const TermsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Caffy — Terms of Service</title>
        <meta
          name="description"
          content="Read the terms that govern your use of the Caffy mobile app and website."
        />
      </Head>
      <main className="legal-page">
        <section>
          <h1>Terms of Service</h1>
          <p>
            Welcome to Caffy. By creating an account or using the app you agree
            to these terms. If you disagree, do not use the service.
          </p>
        </section>

        <section>
          <h2>Use of the App</h2>
          <p>
            Caffy is a social coffee journal meant for personal, non-commercial
            use. You promise to log truthful content, respect community
            guidelines, and refrain from spam, harassment, or reverse
            engineering.
          </p>
        </section>

        <section>
          <h2>Accounts & Security</h2>
          <p>
            You are responsible for safeguarding your Apple ID or any linked
            login credentials. Notify us immediately if you suspect unauthorized
            access.
          </p>
        </section>

        <section>
          <h2>Content</h2>
          <p>
            You own your coffee logs and grant Caffy a license to display them
            within the app. We may remove content that violates these terms or
            local laws.
          </p>
        </section>

        <section>
          <h2>Location Features</h2>
          <p>
            Location tagging is optional. When enabled, you consent to sharing
            approximate coordinates to power the global map and friend feeds.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these terms. Continued use after changes means you
            accept the revised terms.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions? Email <a href="mailto:legal@caffy.app">legal@caffy.app</a>
            .
          </p>
        </section>
      </main>
      <style jsx>{`
        .legal-page {
          max-width: 720px;
          margin: 0 auto;
          padding: 4rem 1.5rem 6rem;
          font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
            sans-serif;
          color: #1f1b16;
          line-height: 1.6;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }
        h2 {
          margin-top: 2.5rem;
          margin-bottom: 0.5rem;
        }
        section + section {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default TermsPage;
