import isNuil from './isNuil'
/**
 * 判断传入的对象是否为数组。
 * @param obj 任意类型的对象，需要判断是否为数组。
 * @return 返回一个布尔值，表示传入的对象是否为数组。如果是数组，则返回true；否则返回false。
 */
export default function isArray(obj: unknown) {
  return isNuil(obj) ? false : Array.isArray(obj)
}