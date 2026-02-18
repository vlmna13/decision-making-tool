import { TaskWrapperOptions } from '../../home/homeComponents/taskWrapper';
import { drawSection } from './canvasElement/functionDrawSection';
import { drawText } from './canvasElement/functionDrawText';
import { drawCenterElement } from './canvasElement/functionDrowCenterElement';
import { drawCursor } from './canvasElement/functionDrowCursor';
export function normalizeAngle(angle: number): number {
  return (angle + 2 * Math.PI) % (2 * Math.PI);
}
export function createWheel(
  canvasWheel: HTMLCanvasElement,
  rotationAngle: number = 0,
  colors: string[],
  items: TaskWrapperOptions[],
) {
  const ctx = canvasWheel.getContext('2d');
  if (!ctx) {
    return;
  }
  const width = canvasWheel.width;
  const height = canvasWheel.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2;
  const totalWeight = items.reduce((sum, item) => sum + Number(item.weight), 0);
  let startAngle = normalizeAngle(rotationAngle);

  items.forEach((item, index) => {
    const weight = Number(item.weight);
    const angle = (weight / totalWeight) * 2 * Math.PI;
    const endAngle = normalizeAngle(startAngle + angle);
    drawSection({
      ctx,
      centerX,
      centerY,
      radius,
      startAngle,
      angle,
      color: colors[index],
    });
    const minAngleForText = 0.1;
    if (angle >= minAngleForText) {
      drawText({
        ctx,
        centerX,
        centerY,
        radius,
        startAngle,
        angle,
        text: item.title,
      });
    }

    startAngle = endAngle;
  });
  drawCenterElement({ ctx, centerX, centerY, radius });
  drawCursor({ ctx, centerX, centerY, radius });
  return canvasWheel;
}
