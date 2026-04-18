/**
 * 数组去重
 * 移除数组中的重复元素
 * @param arr 需要去重的数组
 * @returns 返回去重后的新数组
 */
export default function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
