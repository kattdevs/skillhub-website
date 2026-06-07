import { useState, useEffect, useRef, useCallback } from "react";

/**
 * useCountUp — animates a number from 0 to `end` when `active` is set to true.
 * No external dependencies.
 */
export function useCountUp(end, duration = 2000, suffix = "") {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(false);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, end, duration]);

  const start = useCallback(() => setActive(true), []);

  return { display: `${value}${suffix}`, start };
}
