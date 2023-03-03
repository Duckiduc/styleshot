export function createFrame(width: number, height: number): HTMLCanvasElement {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
  canvas.width = width;
  canvas.height = height;

  // Draw frame
  const padding = 50;
  const frameWidth = width + padding * 2;
  const frameHeight = height + padding * 2;
  const frameRadius = 30;
  const frameGradient = ctx.createRadialGradient(
    frameWidth / 2, frameHeight / 2, frameWidth / 4,
    frameWidth / 2, frameHeight / 2, frameWidth / 2
  );
  frameGradient.addColorStop(0, '#ffffff');
  frameGradient.addColorStop(1, '#e5e5e5');

  ctx.fillStyle = frameGradient;
  ctx.fillRect(0, 0, frameWidth, frameHeight);
  ctx.save();

  // Draw rounded rectangle
  ctx.beginPath();
  ctx.moveTo(padding + frameRadius, padding);
  ctx.lineTo(width + padding - frameRadius, padding);
  ctx.quadraticCurveTo(width + padding, padding, width + padding, padding + frameRadius);
  ctx.lineTo(width + padding, height + padding - frameRadius);
  ctx.quadraticCurveTo(width + padding, height + padding, width + padding - frameRadius, height + padding);
  ctx.lineTo(padding + frameRadius, height + padding);
  ctx.quadraticCurveTo(padding, height + padding, padding, height + padding - frameRadius);
  ctx.lineTo(padding, padding + frameRadius);
  ctx.quadraticCurveTo(padding, padding, padding + frameRadius, padding);
  ctx.closePath();
  ctx.clip();

  // Draw inner shadow
  const shadowBlur = 50;
  const shadowOffset = 10;
  const shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowColor = shadowColor;
  ctx.shadowOffsetX = shadowOffset;
  ctx.shadowOffsetY = shadowOffset;
  ctx.shadowBlur = shadowBlur;
  ctx.fillRect(padding - shadowOffset, padding - shadowOffset, width + shadowOffset * 2, height + shadowOffset * 2);

  ctx.restore();
  return canvas;
}
