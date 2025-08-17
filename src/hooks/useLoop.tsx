import { useEffect, useRef } from 'react';

export const useLoop = (drawFrame: (time: number, delta: number) => void) => {
  const frameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const loop = (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      drawFrame(time, delta);

      frameIdRef.current = requestAnimationFrame(loop);
    };

    frameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (frameIdRef.current != null) cancelAnimationFrame(frameIdRef.current);
    };
  }, [drawFrame]);
};
