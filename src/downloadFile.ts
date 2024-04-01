/**
 * 下载文件到本地。
 * @param {string} url 文件的下载链接。
 * @param {string} filename 下载后保存的文件名。
 */
export default function downloadFile(url: string, filename: string) {
  // 创建一个隐藏的链接元素
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = filename;

  // 将链接元素添加到文档中
  document.body.appendChild(link);

  // 触发链接元素的点击事件，开始下载
  link.click();

  // 下载完成后移除链接元素
  document.body.removeChild(link);
}
