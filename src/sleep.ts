/**
 * 延时函数
 * 返回一个 Promise，在指定时间后 resolve
 * @param ms 延迟时间，单位毫秒
 * @returns 返回一个 Promise
 */
export default function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
