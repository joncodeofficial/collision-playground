export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  fillColor: string = 'gray',
  strokeColor: string = 'black',
  alpha: number = 0.7
) => {
  ctx.save();
  ctx.globalAlpha = alpha; // transparencia solo aquí
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.lineWidth = 0.6;
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
};
