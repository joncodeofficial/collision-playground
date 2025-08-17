export const drawBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  // Fill background color
  ctx.fillStyle = '#282A36';
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = 'gray'; // grid color
  ctx.lineWidth = 0.2;
  const spacing = 45; // space between lines

  // Vertical lines
  for (let x = 0; x <= width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Horizontal lines
  for (let y = 0; y <= height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};
