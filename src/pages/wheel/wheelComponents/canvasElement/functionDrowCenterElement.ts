import { WheelDrawingParams } from './interfaceWheelDrowParams';

export function drawCenterElement(params: WheelDrawingParams) {
  const { ctx, centerX, centerY, radius } = params;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.1, 0, 2 * Math.PI);
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 0.1);
  gradient.addColorStop(0, '#c4b5f5');
  gradient.addColorStop(1, '#5c4a9a');
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = 'rgb(255 255 255 / 50%)';
  ctx.lineWidth = 2;
  ctx.stroke();
}
