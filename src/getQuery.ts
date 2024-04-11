/**
 * 解析查询字符串或哈希字符串为对象。
 * @param search 可选，指定的查询字符串。如果未提供，则从当前页面的URL中获取。
 * @returns 返回解析后的查询参数对象。
 */
const getQueryString = (search?: string) => {
  // 如果没有提供search参数，则尝试从页面URL的查询字符串或哈希中获取
  search =
    search ||
    window.location.search.substring(1) ||
    window.location.hash.split('?')[1];

  const params: { [x: string]: any } = {};
  if (search) {
    const paramPairs = search.split('&');
    paramPairs.forEach(pair => {
      const [key, value] = pair.split('=');
      const decodedKey = decodeURIComponent(key);
      const decodedValue = value ? decodeURIComponent(value) : '';
      if (decodedKey) {
        // 如果已经存在相同的键，则转换为数组存储
        if (params[decodedKey]) {
          if (Array.isArray(params[decodedKey])) {
            params[decodedKey].push(decodedValue);
          } else {
            params[decodedKey] = [params[decodedKey], decodedValue];
          }
        } else {
          params[decodedKey] = decodedValue;
        }
      }
    });
  }

  return params;
};
export default getQueryString