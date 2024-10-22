## 方法名称

deconstruction

## 函数声明

```typescript
function deconstruction(
  data: any[],
  deconstructionJSON: { [x: string]: any }
): any[];
```

## 描述

函数用于根据提供的解构规则对数组中的对象进行重新组装。它通过 `deconstructionJSON` 中的规则，将数据的某些部分提取并重构为新的对象结构，并且保留了原始数据作为返回结果的一部分。

## 参数

- `data: any[]`: 一个数组，包含需要解构和重组的对象。
- `deconstructionJSON: { [x: string]: any }`:
- 解构规则对象，定义了如何从 data 中提取数据并重组为新的结构。
- 规则中每个键名代表重组后对象中的属性名，键值可以是字符串、数字或数组。
- 如果是数组，则该数组中的每个元素表示从原始数据中提取的值，按顺序组成一个新数组。

## 返回值

- `any[]`:返回一个数组，包含重新组装后的对象。每个对象不仅包含提取后的数据，还附带了原始数据。

## 使用示例

```typescript

示例 1：简单数据和解构规则
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
/*
输出:
[
  {
    personName: 'John',
    city: 'New York',
    details: ['John', 30],
    originData: { name: 'John', age: 30, location: 'New York' }
  },
  {
    personName: 'Jane',
    city: 'Los Angeles',
    details: ['Jane', 25],
    originData: { name: 'Jane', age: 25, location: 'Los Angeles' }
  }
]
*/

示例 2：处理缺失的属性和默认值

const data = [
  { name: 'John', age: 30 },
  { name: 'Jane' }
];

const deconstructionJSON = {
  personName: 'name',
  city: 'location', // 'location' 在原始数据中不存在
  details: ['name', 'age', 'location'] // 'location' 在原始数据中不存在
};

const result = deconstruction(data, deconstructionJSON);

console.log(result);
/*
输出:
[
  {
    personName: 'John',
    city: 'location', // 使用默认值 'location'
    details: ['John', 30, 'location'], // 使用默认值 'location'
    originData: { name: 'John', age: 30 }
  },
  {
    personName: 'Jane',
    city: 'location', // 使用默认值 'location'
    details: ['Jane', undefined, 'location'], // 'age' 不存在，使用 undefined
    originData: { name: 'Jane' }
  }
]
*/

```
