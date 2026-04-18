/**
 * 数组扁平化
 * 将多维数组转换为一维数组
 * @param arr 需要扁平化的数组
 * @param depth 扁平化的深度，默认为 Infinity，即完全扁平化
 * @returns 返回扁平化后的新数组
 */
export default function flatten<T>(arr: any[], depth: number = Infinity): T[] {
  if (depth <= 0) {
    return arr.slice();
  }

  const result: T[] = [];

  const flattenHelper = (array: any[], currentDepth: number) => {
    for (const item of array) {
      if (Array.isArray(item) && currentDepth < depth) {
        flattenHelper(item, currentDepth + 1);
      } else {
        result.push(item);
      }
    }
  };

  flattenHelper(arr, 0);
  return result;
}
