/**
 * 从当前URL中删除指定的查询参数。
 * @param paramName 要删除的查询参数名称。如果未提供参数名，则删除所有查询参数。
 */
export default function removeQueryParams(paramName: string) {
  // 获取当前URL的查询部分
  let searchParams = new URLSearchParams(window.location.search);

  // 如果未提供参数名，删除所有查询参数
  if (!paramName) {
    searchParams = new URLSearchParams();
  } else {
    // 检查是否存在要删除的查询参数
    if (searchParams.has(paramName)) {
      // 删除指定的查询参数
      searchParams.delete(paramName);
    }
  }

  // 获取更新后的查询部分
  const newSearchParams = searchParams.toString();

  // 使用replaceState来更新地址栏URL并保留历史记录
  const newURL =
    window.location.pathname + (newSearchParams ? '?' + newSearchParams : '');
  history.replaceState({}, document.title, newURL);
}
