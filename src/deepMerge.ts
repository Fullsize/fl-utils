/**
 * 深度克隆一个对象
 * 该函数通过递归的方式创建一个对象的深拷贝版本，处理包括循环引用、日期、正则、Map、Set以及普通对象和数组
 * 
 * @param obj {T} - 需要克隆的对象
 * @param hash - 用于处理循环引用的WeakMap，默认为空
 * @returns  - 克隆后的对象
 */
export default function deepClone<T>(obj: T, hash = new WeakMap()): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // 处理循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // 处理 Date
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as any;
  }

  // 处理 RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as any;
  }

  // 处理 Map
  if (obj instanceof Map) {
    const result = new Map();
    hash.set(obj, result);
    obj.forEach((value, key) => {
      result.set(key, deepClone(value, hash));
    });
    return result as any;
  }

  // 处理 Set
  if (obj instanceof Set) {
    const result = new Set();
    hash.set(obj, result);
    obj.forEach((value) => {
      result.add(deepClone(value, hash));
    });
    return result as any;
  }

  // 处理 Array 或普通对象
  const result = Array.isArray(obj) ? [] : {};
  hash.set(obj, result);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      (result as any)[key] = deepClone((obj as any)[key], hash);
    }
  }

  return result as T;
}
