import isNuil from './isNuil'
/**
 * 检查一个对象是否为函数。
 * @param obj 未知类型的对象，需要被检查是否为函数。
 * @returns 返回一个布尔值，如果对象是函数则为true，否则为false。
 */
export default function isFunction(obj: unknown) {
  return isNuil(obj) ? false : typeof obj === 'function';
}