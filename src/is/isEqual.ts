/**
 * 检查两个对象是否相等，支持多层嵌套。
 * @param {Object} obj1 第一个对象。
 * @param {Object} obj2 第二个对象。
 * @returns {boolean} 如果两个对象相等，则返回true；否则返回false。
 */
export default function isEqual(obj1: { [x: string]: any; }, obj2: { [x: string]: any; }) {
  // 如果两个对象都不是对象类型，则直接比较它们的值是否相等
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  // 获取两个对象的键名数组
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // 如果两个对象的键名数量不相等，则它们不相等
  if (keys1.length !== keys2.length) {
    return false;
  }

  // 检查每个键名对应的值是否相等
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    // 递归比较嵌套对象的值
    if (!isEqual(val1, val2)) {
      return false;
    }
  }

  // 如果所有键名对应的值都相等，则两个对象相等
  return true;
}
