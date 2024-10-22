/**
 * 下载文件到本地。
 * @param {string} url 文件的下载链接。
 * @param {string} filename 下载后保存的文件名。
 */
export default async function downloadFile(url: string, filename: string) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';

  xhr.onload = () => {
    if (xhr.status === 200) {
      const blobUrl = URL.createObjectURL(xhr.response);
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = blobUrl;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } else {
      alert('Failed to download file.');
    }
  };

  xhr.onerror = () => {
    alert('Error during file download.');
  };

  xhr.send();
}
