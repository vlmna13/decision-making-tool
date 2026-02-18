import { TextDrawingParams } from './interfaceWheelDrowParams';

export function drawText(params: TextDrawingParams) {
  const { ctx, centerX, centerY, radius, startAngle, angle, text } = params;
  const textAngle = startAngle + angle / 2; 
  const textRadius = radius * 0.7; 

  ctx.save();
  ctx.translate(
    centerX + Math.cos(textAngle) * textRadius,
    centerY + Math.sin(textAngle) * textRadius,
  );
  ctx.rotate(textAngle);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#000';
  ctx.font = '16px Arial';

  const maxTextLength = 10; 
  const displayText =
    text.length > maxTextLength
      ? text.substring(0, maxTextLength - 1) + '…'
      : text;

  ctx.fillText(displayText, 0, 0);
  ctx.restore();
}
