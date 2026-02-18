import { TaskWrapperOptions } from '../home/homeComponents/taskWrapper';
import { createWheel } from './wheelComponents/createWheel';
import { playPauseAudio } from './functionPlayAudio';
import { updateWinningValue } from './functionUpdateWinningValue';

export function animate(
  canvasWheel: HTMLCanvasElement,
  items: TaskWrapperOptions[],
  colors: string[],
  inputElement: HTMLInputElement,
  rotationAngle: { value: number },
  step: { value: number },
  startTime: { value: number | -1 },
  winningValue: HTMLParagraphElement,
  controlWrapper: HTMLDivElement,
) {
  const ctx = canvasWheel.getContext('2d');
  if (!ctx) {
    return;
  }
  const duration = Number(inputElement.value);
  if (startTime.value === -1) {
    startTime.value = performance.now();
    const storedSoundState = localStorage.getItem('soundState');
    const soundPermission = storedSoundState
      ? JSON.parse(storedSoundState).sound
      : true; // по умолчанию звук включён
    playPauseAudio(duration, soundPermission);
  }
  const currentTime = performance.now();
  const elapsedTime = (currentTime - startTime.value) / 1000;
  ctx.clearRect(0, 0, canvasWheel.width, canvasWheel.height);
  if (elapsedTime < duration / 2) {
    step.value += 0.001;
  } else if (elapsedTime < duration) {
    step.value -= 0.001;
    if (step.value < 0.001) step.value = 0.001;
  } else {
    createWheel(canvasWheel, rotationAngle.value, colors, items);
    startTime.value = -1;
    winningValue.classList.add('win');
    updateWinningValue(rotationAngle.value, items, winningValue);
    return;
  }
  rotationAngle.value += step.value;
  if (rotationAngle.value > 2 * Math.PI) {
    rotationAngle.value -= 2 * Math.PI;
  }
  updateWinningValue(rotationAngle.value, items, winningValue);
  createWheel(canvasWheel, rotationAngle.value, colors, items);
  requestAnimationFrame(() =>
    animate(
      canvasWheel,
      items,
      colors,
      inputElement,
      rotationAngle,
      step,
      startTime,
      winningValue,
      controlWrapper,
    ),
  );
}
