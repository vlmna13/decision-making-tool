import { TaskWrapperOptions } from '../home/homeComponents/taskWrapper';
import { normalizeAngle } from './wheelComponents/createWheel';

export function updateWinningValue(
  rotationAngle: number,
  items: TaskWrapperOptions[],
  winValue: HTMLParagraphElement,
) {
  const totalWeight = items.reduce((sum, item) => sum + Number(item.weight), 0);
  let startAngle = normalizeAngle(rotationAngle);
  const pointerAngle = normalizeAngle(-Math.PI / 2);
  items.forEach((item) => {
    const weight = Number(item.weight);
    const angle = (weight / totalWeight) * 2 * Math.PI;
    const endAngle = normalizeAngle(startAngle + angle);
    if (
      (pointerAngle >= startAngle && pointerAngle < endAngle) ||
      (endAngle < startAngle &&
        (pointerAngle >= startAngle || pointerAngle < endAngle))
    ) {
      winValue.textContent = item.title;
    }
    startAngle = endAngle;
  });
}
