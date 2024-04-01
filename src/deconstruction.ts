/**
 * 对数据进行解构，并根据提供的 JSON 对象重组数据。
 * @param {any[]} data 要解构的数据数组。
 * @param {Object} deconstructionJSON 解构规则的 JSON 对象。
 * @returns {Object[]} 返回重组后的数据数组。
 */
const deconstruction = (data: any[], deconstructionJSON: { [x: string]: any; }) => {
  return data.map((item) => {
    const json: { [x: string]: any; } = {}; // 创建一个空对象，用于存储重组后的数据
    for (const i in deconstructionJSON) {
      if (Array.isArray(deconstructionJSON[i])) {
        // 如果解构规则中的值是数组，则按照数组中的顺序解构数据
        const arr: any[] = [];
        deconstructionJSON[i].map((a: string | number) => {
          arr.push(item[a] ?? a); // 如果数据中不存在对应的属性，则使用默认值
        });
        json[i] = arr;
      } else {
        // 如果解构规则中的值不是数组，则直接根据键名解构数据
        json[i] = item[deconstructionJSON[i]] ?? deconstructionJSON[i]; // 如果数据中不存在对应的属性，则使用默认值
      }

      json['originData'] = item; // 将原始数据存储到重组后的数据中
    }
    return json; // 返回重组后的数据
  });
};
export default deconstruction