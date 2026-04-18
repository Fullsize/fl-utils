# deepMerge

## 函数声明

```typescript
function deepMerge(
  target: { [x: string]: any },
  ...sources: any[]
): { [x: string]: any };
```

## 描述

`deepMerge` 函数用于深度合并多个对象。与浅合并不同，该函数会递归地合并对象中的嵌套属性，确保每个层级的数据都被保留。

## 参数

| 参数名     | 类型                 | 描述                                         | 默认值 |
| ---------- | -------------------- | -------------------------------------------- | ------ |
| `target`   | `{ [x: string]: any }` | 初始目标对象，合并结果将存储在该对象中       | —      |
| `...sources`| `any[]`             | 需要合并到目标对象的一个或多个源对象         | —      |

## 返回值

`{ [x: string]: any }` — 返回合并后的目标对象。源对象的值会覆盖目标对象中的相应值。

## 使用示例

### 合并多个对象

```typescript
const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const obj2 = {
  age: 40,
  address: {
    zip: "90001",
    state: "California",
  },
};

const obj3 = {
  hobbies: ["reading", "traveling"],
};

const merged = deepMerge(obj1, obj2, obj3);

console.log(merged);
// 输出:
// {
//   name: 'John',
//   age: 40,
//   address: {
//     city: 'New York',
//     zip: '90001',
//     state: 'California'
//   },
//   hobbies: ['reading', 'traveling']
// }
```
