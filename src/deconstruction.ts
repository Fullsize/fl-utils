import { deepMerge } from './index'
/**
 * 对数据进行解构，并根据提供的 JSON 对象重组数据。
 * @param {any[]} data 要解构的数据数组。
 * @param {Object} deconstructionJSON 解构规则的 JSON 对象。
 * @returns {Object[]} 返回重组后的数据数组。
 */
const deconstruction = (
  data: any[],
  deconstructionJSON: { [x: string]: any },
) => {
  if (
    !Array.isArray(data) ||
    data.length === 0 ||
    data.some((item) => item === null || item === undefined)
  ) {
    return [];
  }
  return data.map((item: { [x: string]: any }) => {
    const json: any = { ...item }; // 复制 item 到 json
    for (const key in deconstructionJSON) {
      const value = deconstructionJSON[key];
      if (Array.isArray(value)) {
        json[key] = value.map((field: string) => item[field] ?? field);
      } else {
        json[key] = item[value] ?? null;
      }
    }
    json['originData'] = item; // 将原始数据添加到 json 中

    return deepMerge(item, json);
  });
};
export default deconstruction