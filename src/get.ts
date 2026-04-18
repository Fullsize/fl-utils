/**
 * 安全获取嵌套对象属性
 * 根据路径字符串获取对象中的值，避免访问未定义属性时报错
 * @param obj 源对象
 * @param path 属性路径，支持 "a.b.c" 或 "a[0].b" 格式
 * @param defaultValue 路径不存在时的默认值
 * @returns 返回路径对应的值或默认值
 */
export default function get(obj: Record<string, any>, path: string, defaultValue?: any): any {
  if (typeof obj !== "object" || obj === null) {
    return defaultValue;
  }

  const keys = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = obj;

  for (const key of keys) {
    if (result == null) {
      return defaultValue;
    }
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}
