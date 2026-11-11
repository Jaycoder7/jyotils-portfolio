'use client';

import { useState } from 'react';

export function SolarStudy() {
  const [angle, setAngle] = useState(22);
  const radians = angle * Math.PI / 180;
  return (
    <figure className="tracking-study">
      <figcaption>Sun Tracking System</figcaption>
      <svg viewBox="0 0 480 200" role="img" aria-label="Illustration of a solar panel turning to face the sun">
        <path d="M91 153 Q240 -95 389 153" fill="none" stroke="#74978b" strokeDasharray="3 7" />
        <circle cx={240 + 156 * Math.sin(radians)} cy={171 - 148 * Math.cos(radians)} r="12" fill="#f1ce80" />
        <path d="M240 131v45m-37 0h74" stroke="#c0d8cd" strokeWidth="4" />
        <g transform={`rotate(${angle} 240 131)`}>
          <rect x="165" y="119" width="150" height="17" rx="2" fill="#609687" stroke="#e5f6ec" />
          {[190,215,240,265,290].map(x => <path key={x} d={`M${x} 119v17`} stroke="#d7eade" />)}
        </g>
      </svg>
      <label>Explore panel tilt <output>{angle}°</output>
        <input type="range" min="-60" max="60" value={angle} onChange={event => setAngle(Number(event.target.value))} />
      </label>
    </figure>
  );
}
