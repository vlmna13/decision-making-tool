import { SectionDrawingParams } from './interfaceWheelDrowParams';

export function drawSection(params: SectionDrawingParams) {
  const { ctx, centerX, centerY, radius, startAngle, angle, color } = params;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, startAngle + angle);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = 'rgb(255 255 255 / 25%)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}
