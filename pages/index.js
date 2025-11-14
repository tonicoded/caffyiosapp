import { useEffect, useMemo, useState } from 'react';

const previewImages = [
  { src: '/previews/preview-1.png', alt: 'caffy feed preview' },
  { src: '/previews/preview-2.png', alt: 'caffy streaks preview' },
  { src: '/previews/preview-3.png', alt: 'caffy analytics preview' },
  { src: '/previews/preview-4.png', alt: 'caffy logger preview' },
  { src: '/previews/preview-5.png', alt: 'caffy circles preview' },
  { src: '/previews/preview-6.png', alt: 'caffy stats deep dive' },
  { src: '/previews/preview-7.png', alt: 'caffy onboarding preview' },
  { src: '/previews/preview-8.png', alt: 'caffy home glass view' }
];

const vibePills = ['cozy social', 'latte aesthetic', 'non-toxic'];

export default function Home() {
  const [activePreview, setActivePreview] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActivePreview((prev) => (prev + 1) % previewImages.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const primaryPreview = useMemo(() => previewImages[activePreview], [activePreview]);
  const secondaryPreview = useMemo(
    () => previewImages[(activePreview + 2) % previewImages.length],
    [activePreview]
  );

  return (
    <main>
      <section className="hero-shell">
        <div className="copy-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="caffy logo" width={86} height={86} />
          <span className="tagline">cozy coffee logging</span>
          <h1 className="hero-title">caffy · brew memories together</h1>
          <p className="hero-lede">
            a glassy coffee diary that turns every cup into a shareable ritual with streaks, maps, and
            zero-stress vibes.
          </p>

          <div className="pill-bank">
            {vibePills.map((pill) => (
              <span key={pill} className="pill">{pill}</span>
            ))}
          </div>

          <div className="waitlist-panel">
            <p className="waitlist-label">join the early pour waitlist</p>
            <LaunchListWidget />
            <p className="waitlist-note">first 500 beta testers unlock pro map + latte themes.</p>
          </div>
        </div>

        <DeviceStack
          primary={primaryPreview}
          secondary={secondaryPreview}
          active={activePreview}
          onSelect={setActivePreview}
        />
      </section>
    </main>
  );
}

function DeviceStack({ primary, secondary, active, onSelect }) {
  return (
    <div className="device-col">
      <div className="device-stack">
        <div className="phone-card secondary">
          <div className="phone-screen">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={secondary.src} alt={secondary.alt} />
          </div>
        </div>
        <div className="phone-card primary">
          <div className="phone-screen">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={primary.src} alt={primary.alt} />
          </div>
        </div>
        <div className="preview-dots" role="tablist" aria-label="app preview selector">
          {previewImages.map((_, index) => (
            <button
              key={_.src}
              type="button"
              className={index === active ? 'active' : ''}
              onClick={() => onSelect(index)}
              aria-label={`show preview ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
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
    if (document.getElementById(scriptId)) return;
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
