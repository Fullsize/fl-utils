# deconstruction

## 函数声明

```typescript
function deconstruction(
  data: any[],
  deconstructionJSON: { [x: string]: any }
): any[];
```

## 描述

`deconstruction` 函数用于根据提供的解构规则对数组中的对象进行重新组装。它通过 `deconstructionJSON` 中的规则，将数据的某些部分提取并重构为新的对象结构，并且保留了原始数据作为返回结果的一部分。

## 参数

| 参数名              | 类型                    | 描述                                           | 默认值 |
| ------------------- | ----------------------- | ---------------------------------------------- | ------ |
| `data`              | `any[]`                 | 包含需要解构和重组的对象数组                   | —      |
| `deconstructionJSON`| `{ [x: string]: any }`  | 解构规则对象，定义了如何从 data 中提取数据并重组 | —      |

## 返回值

`any[]` — 返回一个数组，包含重新组装后的对象。每个对象不仅包含提取后的数据，还附带了原始数据（`originData` 字段）。

## 使用示例

### 简单数据和解构规则

```typescript
const data = [
  { name: "John", age: 30, location: "New York" },
  { name: "Jane", age: 25, location: "Los Angeles" },
];

const deconstructionJSON = {
  personName: "name",
  city: "location",
  details: ["name", "age"],
};

const result = deconstruction(data, deconstructionJSON);

console.log(result);
// 输出:
// [
//   {
//     personName: 'John',
//     city: 'New York',
//     details: ['John', 30],
//     originData: { name: 'John', age: 30, location: 'New York' }
//   },
//   {
//     personName: 'Jane',
//     city: 'Los Angeles',
//     details: ['Jane', 25],
//     originData: { name: 'Jane', age: 25, location: 'Los Angeles' }
//   }
// ]
```

### 处理缺失的属性

```typescript
const data = [
  { name: 'John', age: 30 },
  { name: 'Jane' }
];

const deconstructionJSON = {
  personName: 'name',
  city: 'location',
  details: ['name', 'age', 'location']
};

const result = deconstruction(data, deconstructionJSON);
// 缺失的属性会使用 undefined 或键名作为默认值
```
