/**
 * 检查一个值是否为对象。
 * @param obj 未知类型的值，待检查是否为对象。
 * @returns 返回一个布尔值，表示该值是否为对象。如果是对象则返回true，否则返回false。
 */
export default function isObject(obj: unknown): boolean {
  return typeof obj === 'object'
}