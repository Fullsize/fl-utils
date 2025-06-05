/**
 * 检查一个值是否为 null 或 undefined。
 * @param obj 一个未知类型的值，需要被检查是否为 null 或 undefined。
 * @returns 返回一个布尔值，如果值为 null 或 undefined，则返回 true，否则返回 false。
 */
export default function isNuil(obj: unknown) {
  return obj === null || obj === undefined
}