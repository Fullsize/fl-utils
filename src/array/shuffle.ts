import deepMerge from "../deepMerge";
/**
 * 将数组中的元素随机打乱，生成一个新的数组
 * 此函数不会修改输入的原始数组
 * 
 * @param array<T> 要打乱的数组
 * @returns 打乱后的数组
 */
export default function shuffle<T>(array: T[]): T[] {
  const result = deepMerge(array); // 复制一份数组，避免修改原数组
  for (let i = result.length - 1; i > 0; i--) {
    // 生成 0 到 i 之间的随机索引
    const j = Math.floor(Math.random() * (i + 1));
    // 交换元素 result[i] 和 result[j]
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
