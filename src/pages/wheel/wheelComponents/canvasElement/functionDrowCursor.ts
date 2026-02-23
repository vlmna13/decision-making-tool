import { WheelDrawingParams } from './interfaceWheelDrowParams';

export function drawCursor(params: WheelDrawingParams) {
  const { ctx, centerX, centerY, radius } = params;
  const cursorSize = 22;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - radius + cursorSize);
  ctx.lineTo(centerX - cursorSize / 2, centerY - radius - 4);
  ctx.lineTo(centerX + cursorSize / 2, centerY - radius - 4);
  ctx.closePath();
  const gradient = ctx.createLinearGradient(
    centerX - cursorSize / 2,
    centerY - radius,
    centerX + cursorSize / 2,
    centerY - radius + cursorSize,
  );
  gradient.addColorStop(0, '#c4b5f5');
  gradient.addColorStop(1, '#7c5cbf');
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = 'rgb(255 255 255 / 60%)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}
