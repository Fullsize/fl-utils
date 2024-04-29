/**
 * 向上取整函数。
 * 将输入的数值 number 向上取整到指定精度 precision。
 * @param number 需要进行向上取整的数值。
 * @param precision 精度，表示要取整到小数点后几位。默认为 0。
 * @returns 返回经过向上取整后的数值。
 */
export default function ceil(number: number, precision: number = 0) {
  if (precision === 0) {
    return Math.ceil(number)
  }
  const scaledNumber = number * Math.pow(10, precision);
  const scaledCeil = Math.ceil(scaledNumber);
  return scaledCeil / Math.pow(10, precision);
}