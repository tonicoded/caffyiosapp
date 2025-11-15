import Head from "next/head";
import React from "react";

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: "Data We Collect",
      body: (
        <ul>
          <li>
            <strong>Account:</strong> name, Apple ID identifier, and the email
            you choose to share.
          </li>
          <li>
            <strong>Logs:</strong> coffee entries, photos, notes, caffeine
            estimates, and reactions.
          </li>
          <li>
            <strong>Location:</strong> only when you enable tagging for the atlas
            or map features.
          </li>
        </ul>
      ),
    },
    {
      title: "How It Powers Caffy",
      body: (
        <p>
          We use your data to render analytics, streaks, social feeds, and
          recommendations. Your content is never sold. It is shared only with
          trusted infrastructure providers such as Supabase (database/storage)
          and Apple (authentication).
        </p>
      ),
    },
    {
      title: "Your Controls",
      body: (
        <p>
          You can disable location tagging, delete logs, or request full account
          deletion at any time by emailing{" "}
          <a href="mailto:anthonyvvza@gmail.com">anthonyvvza@gmail.com</a>.
          Turning off permissions in iOS immediately stops further collection.
        </p>
      ),
    },
    {
      title: "Data Retention",
      body: (
        <p>
          We keep account data while your account stays active so you can view
          historical stats. When you delete logs or the entire account, they are
          removed from production storage within 30 days unless legal retention
          requires otherwise.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Caffy — Privacy Policy</title>
        <meta
          name="description"
          content="Understand how Caffy handles your account, coffee logs, and location data."
        />
      </Head>
      <main className="legal">
        <div className="legal__hero">
          <p className="eyebrow">privacy first</p>
          <h1>Privacy Policy</h1>
          <p>
            Brewing memories should feel safe. These notes explain exactly how
            we collect, use, and protect your information across the Caffy app
            and website.
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
            <h2>Questions?</h2>
            <p>
              Email <a href="mailto:anthonyvvza@gmail.com">anthonyvvza@gmail.com</a> and
              we’ll respond as quickly as possible.
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
        ul {
          margin: 0;
          padding-left: 1.5rem;
          list-style: disc;
        }
        li {
          margin-bottom: 0.45rem;
        }
        a {
          color: #ffd7a8;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default PrivacyPage;
