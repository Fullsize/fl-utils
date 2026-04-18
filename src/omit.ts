/**
 * 对象忽略
 * 从对象中排除指定的属性，返回新对象
 * @param obj 源对象
 * @param keys 需要忽略的属性名数组
 * @returns 返回不包含指定属性的新对象
 */
export default function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const keySet = new Set(keys);
  const result = {} as Omit<T, K>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keySet.has(key as K)) {
      (result as any)[key] = obj[key];
    }
  }
  return result;
}
