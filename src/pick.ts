/**
 * 对象拾取
 * 从对象中选取指定的属性，返回新对象
 * @param obj 源对象
 * @param keys 需要拾取的属性名数组
 * @returns 返回只包含指定属性的新对象
 */
export default function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
