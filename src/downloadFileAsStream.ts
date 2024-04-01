/**
 * 使用文件流下载文件到本地。
 * @param {Blob} fileData 文件的 Blob 对象或文件流。
 * @param {string} filename 下载后保存的文件名。
 */
export default function downloadFileAsStream(fileData: Blob | MediaSource, filename: string) {
  // 创建一个隐藏的链接元素
  const link = document.createElement('a');
  link.style.display = 'none';

  // 创建一个包含文件流的 URL
  const url = window.URL.createObjectURL(fileData);

  // 设置链接的下载属性和文件名
  link.href = url;
  link.download = filename;

  // 将链接元素添加到文档中
  document.body.appendChild(link);

  // 触发链接元素的点击事件，开始下载
  link.click();

  // 下载完成后移除链接元素和 URL
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
