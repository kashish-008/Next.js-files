"use client";
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let n = 0;
    const tick = setInterval(() => {
      n += Math.floor(Math.random() * 12) + 4;
      if (n >= 100) {
        n = 100;
        clearInterval(tick);
      }
      setCount(n);
    }, 60);

    setTimeout(() => {
      gsap.to('.loader', {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.in',
        onComplete: () => setVisible(false),
      });
    }, 1700);

    return () => clearInterval(tick);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader fixed inset-0 bg-black z-[9000] flex flex-col items-center justify-center gap-6">
      <div className="w-[200px] h-px bg-border-hi relative overflow-hidden">
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gold animate-loader-fill"></div>
      </div>
      <div className="font-mono text-[0.75rem] tracking-[0.2em] text-white-dim flex gap-2">
        <span id="loaderCount" className="text-gold min-w-[2ch]">
          {String(count).padStart(2, '0')}
        </span>
        <span className="loader-label">/ Loading</span>
      </div>
    </div>
  );
}