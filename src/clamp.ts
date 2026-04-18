/**
 * 数值限制
 * 将数值限制在指定的最小值和最大值之间
 * @param value 需要限制的数值
 * @param min 最小值
 * @param max 最大值
 * @returns 返回限制后的数值
 */
export default function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
