export function playPauseAudio(duration: number, permission: boolean): void {
  const spinAudio = new Audio('sounds/spinning.mp3');
  const winAudio = new Audio('sounds/win.mp3');
  if (permission) {
    spinAudio.play();
    setTimeout(() => {
      spinAudio.pause();
      spinAudio.currentTime = 0;
      winAudio.play();
    }, duration * 1000);
  }
}
