/**
 * 更改URL参数的值。
 * @param name 要更改的参数名称。如果未提供，则不执行任何操作并返回原始URL。
 * @param val 参数的新值。如果name提供但val未提供，则不执行任何操作并返回原始URL。
 * @param href 要操作的URL字符串。如果未提供，则使用当前页面的URL。
 * @returns 返回一个新的URL，其中指定的参数名称具有新的参数值。如果指定的参数不存在，则会添加新的参数。
 */
export default function changeURLArg(name?: string, val?: string, href?: string): string {
  if (!name || !val) {
    // 如果未提供参数名称或参数值，则直接返回原始URL
    return href || window.location.href;
  }

  const url = href || window.location.href;
  const pattern = new RegExp(`${name}=([^&]*)`);
  const replaceText = `${name}=${val}`;

  if (url.match(pattern)) {
    // 如果URL中存在指定的参数，则替换其值
    return url.replace(pattern, replaceText);
  } else if (url.includes('?')) {
    // 如果URL中已存在参数，则在后面添加新的参数
    return `${url}&${replaceText}`;
  } else {
    // 如果URL中没有参数，则在问号后面添加新的参数
    return `${url}?${replaceText}`;
  }
}
