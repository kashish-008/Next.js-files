import { useState, useEffect } from 'react';

export default function useLoader() {
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

    // Wait 1.7s (loader bar animation duration) then hide
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1700);

    return () => {
      clearInterval(tick);
      clearTimeout(timeout);
    };
  }, []);

  return { visible, count };
}