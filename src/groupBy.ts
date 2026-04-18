/**
 * 数组分组
 * 根据指定的键或函数将数组元素分组
 * @param arr 需要分组的数组
 * @param key 分组依据，可以是属性名或函数
 * @returns 返回一个对象，键为分组依据，值为对应的数组
 */
export default function groupBy<T>(
  arr: T[],
  key: keyof T | ((item: T) => string | number)
): Record<string, T[]> {
  return arr.reduce<Record<string, T[]>>((result, item) => {
    const groupKey = typeof key === "function" ? key(item) : String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}
