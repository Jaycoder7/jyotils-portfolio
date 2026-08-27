'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Destination = 'engineering' | 'photography';

export default function Portal() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (next: Destination) => {
    setDestination(next);
    window.setTimeout(() => router.push(`/${next}`), 780);
  };

  return (
    <main className={`portal ${ready ? 'portal-ready' : ''} ${destination ? `portal-leaving choose-${destination}` : ''}`}>
      <div className="portal-intro" aria-hidden={ready}>
        <div className="intro-mark">JA</div>
        <p>Jyotil Agrawal</p>
        <span>Portfolio · 2026</span>
      </div>

      <header className="portal-header">
        <a href="/" className="portal-brand"><span>J</span> Jyotil Agrawal</a>
        <p>Choose your point of view</p>
        <span className="portal-coordinate">33.9519° N · 83.3576° W</span>
      </header>

      <section className="path-selector" aria-label="Choose which portfolio to view">
        <button className="path path-engineering" onClick={() => choose('engineering')}>
          <span className="path-number">01</span>
          <span className="path-art engineering-art" aria-hidden="true">
            <i className="circuit circuit-one" /><i className="circuit circuit-two" /><i className="circuit circuit-three" />
            <b>01</b>
          </span>
          <span className="path-copy">
            <small>Build · Research · Systems</small>
            <strong>Computer<br />Engineering</strong>
            <em>See the technical portfolio <span>↗</span></em>
          </span>
        </button>

        <div className="path-divider"><span>or</span></div>

        <button className="path path-photography" onClick={() => choose('photography')}>
          <span className="path-number">02</span>
          <span className="path-art photography-art" aria-hidden="true">
            <i /><i /><i /><b>ƒ / 2.8</b>
          </span>
          <span className="path-copy">
            <small>Observe · Frame · Preserve</small>
            <strong>Photo&shy;graphy</strong>
            <em>Enter the visual archive <span>↗</span></em>
          </span>
        </button>
      </section>

      <footer className="portal-footer">
        <span>Two disciplines. One way of seeing.</span>
        <span>Scroll is optional · Curiosity is not</span>
      </footer>

      <div className="portal-transition" aria-hidden="true" />
    </main>
  );
}
