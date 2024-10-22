## 方法名称

deepMerge

## 函数声明

```typescript
function deepMerge(
  target: { [x: string]: any },
  ...sources: any[]
): { [x: string]: any };
```

## 描述

该函数用于深度合并多个对象。与浅合并不同，该函数会递归地合并对象中的嵌套属性，并处理目标对象中不存在的属性。通过多层次合并，函数确保每个层级的数据都被保留。

## 参数

- `target: { [x: string]: any }`: 必须的初始目标对象。函数会将源对象中的值合并到该目标对象中。
- `...sources: any[]`: 需要合并到目标对象的一个或多个源对象。这些对象会依次合并到目标对象中。

## 返回值

- `{ [x: string]: any }`: 返回合并后的目标对象。目标对象的属性值来自所有源对象的深度合并，源对象的值会覆盖目标对象中的相应值。

## 使用示例

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

// 深度合并 obj1, obj2 和 obj3
const merged = deepMerge(obj1, obj2, obj3);

console.log(merged);
/*
输出:
{
  name: 'John',
  age: 40,
  address: {
    city: 'New York',
    zip: '90001',
    state: 'California'
  },
  hobbies: ['reading', 'traveling']
}
*/
```
