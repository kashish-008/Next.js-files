"use client";
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseDown = () => cursor.classList.add('clicking');
    const onMouseUp = () => cursor.classList.remove('clicking');

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.13;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.13;
      cursor.style.transform = `translate(${cursorPos.current.x - 22}px, ${cursorPos.current.y - 22}px)`;
      requestAnimationFrame(animate);
    };

    const handleHoverIn = (e) => {
      if (e.target.closest('a, button, .signal-link, .project-row, .edu-card, .skill-pills-row span, .cert-link, .nav-chapter, .cert-card')) {
        cursor.classList.add('hovering');
      }
    };
    const handleHoverOut = (e) => {
      if (e.target.closest('a, button, .signal-link, .project-row, .edu-card, .skill-pills-row span, .cert-link, .nav-chapter, .cert-card')) {
        cursor.classList.remove('hovering');
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleHoverIn);
    document.addEventListener('mouseout', handleHoverOut);
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleHoverIn);
      document.removeEventListener('mouseout', handleHoverOut);
    };
  }, []);

  return (
    <div ref={cursorRef} id="cursor" className="cursor fixed top-0 left-0 w-11 h-11 pointer-events-none z-[9999] mix-blend-difference">
      <div ref={innerRef} className="cursor-inner w-full h-full border border-white rounded-full"></div>
    </div>
  );
}