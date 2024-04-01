/**
 * 解析查询字符串或哈希字符串为对象。
 * @param search 可选，指定的查询字符串。如果未提供，则从当前页面的URL中获取。
 * @returns 返回解析后的查询参数对象。
 */
import qs from 'qs'
const getQueryString = (search?: string) => {
  // 如果没有提供search参数，则尝试从页面URL的查询字符串或哈希中获取
  search =
    search ||
    window.location.search.substring(1) ||
    window.location.hash.split('?')[1];
  // 使用qs库解析查询字符串
  return qs.parse(search);
};
export default getQueryString