'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type WheelEvent } from 'react';
import { photographs, type Photograph } from './photos';

const placements = [
  { x: 23, y: 37, width: 17, rotation: -3, depth: .8 },
  { x: 48, y: 24, width: 15, rotation: 2, depth: 1.15 },
  { x: 70, y: 34, width: 20, rotation: 1, depth: .65 },
  { x: 81, y: 66, width: 14, rotation: 4, depth: 1.25 },
  { x: 58, y: 73, width: 21, rotation: -2, depth: .75 },
  { x: 33, y: 75, width: 17, rotation: 3, depth: 1.3 },
  { x: 15, y: 66, width: 13, rotation: -4, depth: 1 },
];

type PlacementStyle = CSSProperties & {
  '--x': string;
  '--y': string;
  '--item-width': string;
  '--rotation': string;
  '--depth': number;
};

export default function Photography() {
  const [active, setActive] = useState<Photograph | null>(null);
  const stageRef = useRef<HTMLElement>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', close);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', close);
      document.body.style.overflow = '';
    };
  }, [active]);

  const moveConstellation = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    stageRef.current?.querySelectorAll<HTMLElement>('.constellation-item').forEach((item) => {
      const depth = Number(item.dataset.depth ?? 1);
      item.style.setProperty('--shift-x', `${x * 18 * depth}px`);
      item.style.setProperty('--shift-y', `${y * 14 * depth}px`);
    });
  };

  const resetConstellation = () => {
    stageRef.current?.querySelectorAll<HTMLElement>('.constellation-item').forEach((item) => {
      item.style.setProperty('--shift-x', '0px');
      item.style.setProperty('--shift-y', '0px');
    });
  };

  const rotateConstellation = (event: WheelEvent<HTMLElement>) => {
    event.preventDefault();
    rotationRef.current += event.deltaY * .075;
    stageRef.current?.style.setProperty('--orbit-angle', `${rotationRef.current}deg`);
  };

  return (
    <main className="constellation-site">
      <header className="constellation-nav">
        <nav>
          <span>Archive</span>
          <Link href="/engineering">Engineering</Link>
          <a href="mailto:jyotil.yatin2006@gmail.com">Contact</a>
        </nav>
        <Link href="/" className="constellation-logo">Jyotil<span>®</span></Link>
      </header>

      <section
        className="constellation-stage"
        ref={stageRef}
        onPointerMove={moveConstellation}
        onPointerLeave={resetConstellation}
        onWheel={rotateConstellation}
        aria-label="Photography constellation"
      >
        <div className="constellation-intro">
          <span>{String(photographs.length).padStart(2, '0')} frames</span>
          <strong>Visual<br />Archive</strong>
        </div>

        <div className="constellation-orbit">
          {photographs.map((photo, index) => {
            const placement = placements[index % placements.length];
            const style: PlacementStyle = {
              '--x': `${placement.x}%`,
              '--y': `${placement.y}%`,
              '--item-width': `${placement.width}vw`,
              '--rotation': `${placement.rotation}deg`,
              '--depth': placement.depth,
            };

            return (
              <button
                className="constellation-item"
                key={photo.src}
                style={style}
                data-depth={placement.depth}
                onClick={() => setActive(photo)}
                aria-label={`Open ${photo.title}`}
              >
                <span className="constellation-media" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={95}
                    sizes="(max-width: 700px) 40vw, 22vw"
                    priority={index < 4}
                  />
                  <span className="constellation-caption">
                    <small>{String(index + 1).padStart(3, '0')}</small>
                    <strong>{photo.title}</strong>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="constellation-core" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <footer className="constellation-footer">
        <span>Photography by Jyotil Agrawal</span>
        <span className="constellation-instruction">Scroll to rotate · Select to expand</span>
        <span>Georgia · New York</span>
      </footer>

      {active && (
        <div className="constellation-lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close photograph">Close ×</button>
          <div className="constellation-full-image" onClick={(event) => event.stopPropagation()}>
            <Image src={active.src} alt={active.alt} fill sizes="100vw" unoptimized priority />
          </div>
          <div className="constellation-full-caption">
            <strong>{active.title}</strong>
            <span>{active.location} · {active.year}</span>
          </div>
        </div>
      )}
    </main>
  );
}
