import Head from "next/head";
import React from "react";

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Caffy — Privacy Policy</title>
        <meta
          name="description"
          content="Learn how Caffy handles your account data, coffee logs, and location preferences."
        />
      </Head>
      <main className="legal-page">
        <section>
          <h1>Privacy Policy</h1>
          <p>
            Caffy is built to celebrate coffee moments with friends while
            protecting your data. This policy explains what we collect and why.
          </p>
        </section>

        <section>
          <h2>What We Collect</h2>
          <ul>
            <li>Account info you provide (name, Apple ID, contact email).</li>
            <li>Coffee logs you create, including optional notes and media.</li>
            <li>
              Location data only when you enable tagging for the global map,
              stored with your consent.
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use It</h2>
          <p>
            Data powers your analytics dashboard, streak calculations, social
            map, and personalized recommendations. We do not sell your data. We
            share it only with infrastructure providers (like Supabase and Apple
            Sign In) required to operate the service.
          </p>
        </section>

        <section>
          <h2>Your Choices</h2>
          <p>
            You can remove location tagging, delete coffee logs, or request
            account deletion at any time by emailing{" "}
            <a href="mailto:hello@caffy.app">hello@caffy.app</a>. Turning off
            permissions in iOS instantly stops further collection.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Have questions? Reach us at{" "}
            <a href="mailto:privacy@caffy.app">privacy@caffy.app</a>.
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
        ul {
          padding-left: 1.25rem;
        }
        section + section {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default PrivacyPage;
