import { useEffect, useMemo, useState } from 'react';

const previewImages = [
  { src: '/previews/preview-1.png', alt: 'caffy live feed preview' },
  { src: '/previews/preview-2.png', alt: 'caffy streaks preview' },
  { src: '/previews/preview-3.png', alt: 'caffy analytics preview' },
  { src: '/previews/preview-4.png', alt: 'caffy logger preview' },
  { src: '/previews/preview-5.png', alt: 'caffy circles preview' },
  { src: '/previews/preview-6.png', alt: 'caffy stats preview' },
  { src: '/previews/preview-7.png', alt: 'caffy onboarding preview' },
  { src: '/previews/preview-8.png', alt: 'caffy home view preview' }
];

const ideaPoints = [
  'log coffees with photo drops, handles, and cozy stats.',
  'share a glassy feed with reactions, pings, and one circle for free.',
  'unlock pro for world map, advanced analytics, custom types, and premium themes.',
  'built with swiftui + supabase · launching via testflight + product hunt.'
];

const featureHighlights = [
  {
    title: 'core idea',
    copy: 'caffy treats coffee as a ritual, not a calorie. it makes every cup shareable, trackable, and social.'
  },
  {
    title: 'why it sticks',
    copy: 'daily habit + cute streaks + glass ui = retention. social loops + pro perks = revenue.'
  },
  {
    title: 'mvp in 4 weeks',
    copy: 'week 1 ui/auth/logging · week 2 feed/map/circle · week 3 stats/profile · week 4 polish + beta.'
  }
];

const pillLabels = ['cozy', 'social', 'latte aesthetic', 'non-toxic', 'glass ui'];

export default function Home() {
  const [activePreview, setActivePreview] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActivePreview((prev) => (prev + 1) % previewImages.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const phoneImage = useMemo(() => previewImages[activePreview], [activePreview]);

  return (
    <main>
        <div className="background-glow one" />
        <div className="background-glow two" />
        <section className="canvas">
          <div className="hero-panel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="caffy logo" width={90} height={90} />
          <p className="eyebrow">cozy coffee logging</p>
          <h1 className="hero-title">caffy — where coffee becomes memories</h1>
          <p className="hero-sub">
            a warm, latte-toned lifestyle app for logging every cup, mapping cafés with friends, and
            keeping streaks alive without the techy noise.
          </p>
          <div className="pill-row">
            {pillLabels.map((label) => (
              <span className="pill" key={label}>{label}</span>
            ))}
          </div>

          <ul className="idea-points">
            {ideaPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="whitelist-block">
            <p className="whitelist-label">join the early pour waitlist</p>
            <LaunchListWidget />
            <p className="whitelist-note">early beta invites, zero spam.</p>
          </div>

          <div className="feature-grid">
            {featureHighlights.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <span>{feature.title}</span>
                <p>{feature.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-panel">
          <div className="phone-shell" aria-live="polite">
            <div className="phone-screen">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={phoneImage.src} alt={phoneImage.alt} />
            </div>
          </div>
          <div className="preview-dots" role="tablist" aria-label="app preview selector">
            {previewImages.map((_, index) => (
              <button
                key={_.src}
                type="button"
                className={index === activePreview ? 'active' : ''}
                onClick={() => setActivePreview(index)}
                aria-label={`show preview ${index + 1}`}
              />
            ))}
            </div>
          </div>
      </section>
    </main>
  );
}

function LaunchListWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const scriptId = 'launchlist-widget-script';
    if (document.getElementById(scriptId)) {
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://getlaunchlist.com/js/widget.js';
    script.defer = true;
    document.body.appendChild(script);
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="whitelist placeholder">
        loading the waitlist…
      </div>
    );
  }

  return (
    <div className="whitelist">
      <div className="launchlist-widget" data-key-id="0za9nj" data-height="180px" />
    </div>
  );
}
