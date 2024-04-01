const fs = require('fs');
const path = require('path');

// 获取命令行参数中指定的文件夹路径
const folderPath = './src';

if (!folderPath) {
  console.error('请提供要操作的文件夹路径作为参数！');
  process.exit(1);
}

// 获取指定文件夹下的所有文件
const files = fs.readdirSync(folderPath);

// 过滤出除了 index.ts 外的所有文件
const filteredFiles = files.filter(file => file !== 'index.ts');

// 生成导出语句的数组
const exportStatements = filteredFiles.map(file => {
  const fileName = file.split('.')[0]; // 去除文件名的后缀名
  return `export { default as ${fileName} } from './${fileName}';`
});

// 读取现有的 index.ts 文件内容，以便排除重复的导出项
const indexPath = path.join(folderPath, 'index.ts');
let existingContent = '';
try {
  existingContent = fs.readFileSync(indexPath, 'utf8');
} catch (err) {
  // 如果 index.ts 文件不存在，忽略错误
}

// 检查现有的内容中是否已经包含了新的导出语句，如果没有则添加到现有内容后面
const newContent = exportStatements.filter(exportStatement => !existingContent.includes(exportStatement)).join('\n');
const updatedContent = existingContent + (existingContent ? '\n' : '') + newContent;

// 将更新后的内容写入到 index.ts 文件中
fs.writeFileSync(indexPath, updatedContent);

console.log('导出语句已写入到 index.ts 文件中。');
