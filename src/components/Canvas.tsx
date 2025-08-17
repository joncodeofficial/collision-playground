import { useRef } from 'react';
import { useGlobalStates } from '../context/GlobalContext';
import { useLoop } from '../hooks/useLoop';
import { drawCircle } from '../utils/drawCircle';
import { useMouse, useWindowSize } from '@uidotdev/usehooks';
import Module from '../constants';
import { useStart } from '../hooks/useStart';
import { drawBackground } from '../utils/drawBackground';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { dimensions } = useGlobalStates();
  const size = useWindowSize();
  const mouse = useMouse();

  useStart(() => {
    console.log('Starting...');
  });

  useLoop(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    drawBackground(ctx, width, height);

    drawCircle(
      ctx,
      mouse[0].x - (window.innerWidth * dimensions[0]) / 100,
      mouse[0].y - (window.innerHeight * dimensions[1]) / 100,
      100
    );

    const isColliding = !!Module?._CircleToCircleCollision(
      width * 0.25,
      height * 0.5,
      100,
      mouse[0].x - (window.innerWidth * dimensions[0]) / 100,
      mouse[0].y - (window.innerHeight * dimensions[1]) / 100,
      100
    );

    if (isColliding) {
      drawCircle(ctx, width * 0.25, height * 0.5, 100, 'tomato', 'black');
    } else drawCircle(ctx, width * 0.25, height * 0.5, 100);
  });

  return (
    <canvas
      id='canvas'
      ref={canvasRef}
      width={size.width ?? window.innerWidth}
      height={size.height ?? window.innerHeight}
    />
  );
};

export default Canvas;
