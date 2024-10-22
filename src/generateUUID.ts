/**
 * 生成指定长度的 UUID（Universally Unique Identifier）
 * @param {number} len - 生成的 UUID 长度，默认为 16
 * @returns {string} 生成的 UUID
 */
export default function createUUID(len: number = 36): string {
  const chars = '0123456789abcdef';
  const uuidArray = new Array(len);
  // 使用 crypto API 生成随机数
  for (let i = 0; i < 36; i++) {
    uuidArray[i] = chars[(i === 19 ? 8 : Math.floor(Math.random() * 16))];
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuidArray[i] = '-'; // 添加分隔符
    }
  }

  return uuidArray.join('');
}

