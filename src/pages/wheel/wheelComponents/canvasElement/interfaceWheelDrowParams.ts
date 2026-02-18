export interface WheelDrawingParams {
  ctx: CanvasRenderingContext2D; // контекст рисования
  centerX: number; // координата X центра колеса
  centerY: number; // координата Y центра колеса
  radius: number; // радиус колеса
}

export interface SectionDrawingParams extends WheelDrawingParams {
  startAngle: number; // начальный угол секции
  angle: number; // угол секции
  color: string; // цвет секции
}

export interface TextDrawingParams extends WheelDrawingParams {
  startAngle: number; // начальный угол секции
  angle: number; // угол секции
  text: string; // еекст для отображения
}
