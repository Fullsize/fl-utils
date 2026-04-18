/**
 * 生成指定范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @param floating 是否返回浮点数，默认为 false
 * @returns 返回范围内的随机数
 */
export default function random(min: number, max: number, floating: boolean = false): number {
  const result = Math.random() * (max - min) + min;
  return floating ? result : Math.floor(result);
}
