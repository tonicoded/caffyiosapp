import Head from "next/head";
import React from "react";

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: "Use of Caffy",
      body: (
        <p>
          Caffy is a social coffee journal for personal use. You agree to keep
          your account secure, avoid spam or abusive behavior, and follow any
          cafe/local laws when logging or sharing content.
        </p>
      ),
    },
    {
      title: "Accounts & Security",
      body: (
        <p>
          You are responsible for the Apple ID or other credentials connected to
          Caffy. Notify us immediately if your device or account may be
          compromised so we can help secure it.
        </p>
      ),
    },
    {
      title: "Content & Intellectual Property",
      body: (
        <p>
          You own the photos, notes, and logs you create. You grant Caffy a
          license to display that content inside the app so your analytics,
          atlas pins, and social feeds function. We may remove content that
          violates these terms or applicable law.
        </p>
      ),
    },
    {
      title: "Location Features",
      body: (
        <p>
          Location tagging is optional. When enabled, you consent to sharing the
          approximate location of your log to power the map and friend
          experiences. Disable permissions in iOS at any time to stop sharing
          new data.
        </p>
      ),
    },
    {
      title: "Changes & Availability",
      body: (
        <p>
          Caffy may evolve over time. We can modify these terms, features, or
          discontinue parts of the service. Continued use after updates means
          you accept the revised terms.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Caffy — Terms of Service</title>
        <meta
          name="description"
          content="Review the terms that govern your use of the Caffy app and website."
        />
      </Head>
      <main className="legal">
        <div className="legal__hero">
          <p className="eyebrow">terms &amp; conduct</p>
          <h1>Terms of Service</h1>
          <p>
            These terms outline your rights and responsibilities when using
            Caffy. Please read them carefully—by logging a coffee, you agree to
            everything on this page.
          </p>
        </div>

        <div className="legal__content">
          {sections.map((section) => (
            <section key={section.title} className="legal__card">
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}
          <section className="legal__card">
            <h2>Contact</h2>
            <p>
              Need clarification? Email{" "}
              <a href="mailto:anthonyvvza@gmail.com">anthonyvvza@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
      <style jsx>{`
        .legal {
          min-height: 100vh;
          padding: 5rem 1.5rem 6rem;
          color: #fefcf8;
          background: radial-gradient(
              circle at top,
              rgba(255, 234, 209, 0.18),
              transparent 55%
            ),
            linear-gradient(135deg, #1b120c 0%, #352013 60%, #20130c 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .legal__hero {
          max-width: 760px;
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0.5rem;
        }
        h1 {
          font-size: clamp(2.5rem, 6vw, 3.25rem);
          margin-bottom: 1rem;
        }
        .legal__hero p {
          color: rgba(255, 255, 255, 0.78);
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .legal__content {
          width: 100%;
          max-width: 900px;
          display: grid;
          gap: 1.5rem;
        }
        .legal__card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 1.75rem;
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 60px rgba(10, 5, 0, 0.35);
        }
        h2 {
          margin-bottom: 0.75rem;
          font-size: 1.35rem;
        }
        a {
          color: #ffd7a8;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default TermsPage;
