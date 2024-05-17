/**
 * 将给定的数组拆分成多个小数组。
 * @param list 要拆分的数组。
 * @param size 每个小数组的长度，默认为2。
 * @returns 返回一个由拆分后的小数组组成的二维数组。
 */
export default function chuck<T>(list: T[], size = 2): T[][] {
  if (size >= list.length) {
    return [list]
  }
  const maxStep = Math.ceil(list.length / size)
  return new Array(maxStep).fill(null).map((_item, i) => list.slice(i * size, i * size + size))
}