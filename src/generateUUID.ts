/**
 * 生成指定长度的 UUID（Universally Unique Identifier）
 * @param {number} len - 生成的 UUID 长度，默认为 16
 * @returns {string} 生成的 UUID
 */
export default function generateUUID(len: number = 16) {
  let dt = new Date().getTime(); // 获取当前时间戳
  const chars = '0123456789abcdef'; // 可用于生成 UUID 的字符集合
  let uuid = ''; // 存储生成的 UUID
  for (let i = 0; i < len; i++) {
    const r = (dt + Math.random() * 16) % 16 | 0; // 生成 0-15 之间的随机数
    dt = Math.floor(dt / 16); // 更新时间戳
    uuid += chars[r]; // 根据随机数从字符集合中取字符并添加到 UUID 中
  }
  return uuid; // 返回生成的 UUID
}
