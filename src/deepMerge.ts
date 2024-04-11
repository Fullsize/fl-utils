/**
 * 深层次合并多个对象到目标对象中
 * @param {Object} target 目标对象，合并结果将存储在该对象中
 * @param {...Object} sources 要合并的多个源对象
 * @returns {Object} 合并后的目标对象
 */
export default function deepMerge(target: { [x: string]: any; }, ...sources: any[]) {
  // 遍历所有源对象
  for (const source of sources) {
    // 检查源对象是否是对象类型且不为null
    if (typeof source !== 'object' || source === null) {
      continue; // 如果不是对象或为null，则跳过当前源对象
    }

    // 遍历源对象的所有键
    for (const key in source) {
      // 检查当前键是否是源对象自身的属性（不包括原型链上的属性）
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        // 如果当前值是对象且不为null，则递归合并
        if (typeof source[key] === 'object' && source[key] !== null) {
          // 如果目标对象中没有当前键，则创建一个空对象
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          // 递归合并对象
          deepMerge(target[key], source[key]);
        } else {
          // 否则直接赋值给目标对象的当前键
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  }

  return target;
}