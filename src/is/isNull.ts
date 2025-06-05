/**
 * 检查一个值是否为 null 
 * 该函数接受一个未知类型的参数，并返回一个布尔值，
 * 表示该参数是否为 null 
 * @param obj 一个未知类型的值，可以是任何类型。
 * @returns 布尔值。如果参数为 null，则返回 true；
 * 否则，返回 false。
 */
export default function isNull(obj: unknown): boolean {
  return obj === null
}