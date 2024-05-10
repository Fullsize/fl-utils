/**
 * 检查一个值是否为Symbol类型。
 * @param value 待检查的值。
 * @returns 布尔值，表示值是否为Symbol类型。
 */
export default function isSymbol(value: unknown): boolean {
  // 使用 typeof 检查值的类型是否为 'symbol'
  return typeof value === 'symbol';
}