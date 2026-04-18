/**
 * 防抖函数
 * 在事件被触发后延迟执行，如果在延迟期间再次触发则重新计时
 * @param fn 需要防抖的函数
 * @param delay 延迟时间，单位毫秒，默认 300ms
 * @returns 返回防抖后的函数
 */
export default function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}
