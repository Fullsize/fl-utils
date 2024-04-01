/**
 * 获取当前窗口的缩放比例。
 * @param containRatio 是否保持比例，默认为true。如果为true，则会考虑设备的像素比进行缩放。
 * @param baseWidth 基准宽度，默认为1920，用于计算缩放比例。
 * @returns 返回计算后的缩放比例，向上取整。
 */
const getScale = (containRatio = true, baseWidth = 1920) => {
  const currentScale = document.documentElement.clientWidth / baseWidth;
  const formattedScale = Math.max(currentScale, 1); // 确保缩放比例至少为1
  const resultScale = containRatio ? formattedScale * window.devicePixelRatio : formattedScale;
  return Math.ceil(resultScale);
};
export default getScale;
