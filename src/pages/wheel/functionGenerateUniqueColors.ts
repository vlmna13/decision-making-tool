export function generateUniqueColors(count: number): string[] {
  const colors = new Set<string>();
  const hueShift = Math.floor(Math.random() * 360);
  for (let i = 0; i < count; i++) {
    const hue = (i * (360 / count) + hueShift) % 360;
    const color = `hsl(${hue}, 70%, 50%)`;
    colors.add(color);
  }
  return Array.from(colors);
}
