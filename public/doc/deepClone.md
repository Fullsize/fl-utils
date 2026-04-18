# deepClone

## 函数声明

```typescript
function deepClone<T>(obj: T, hash?: WeakMap<any, any>): T;
```

## 描述

`deepClone` 函数用于深度克隆一个对象。该函数通过递归的方式创建一个对象的深拷贝版本，支持处理：

- 普通对象和数组
- `Date`、`RegExp`、`Map`、`Set`
- 循环引用

## 参数

| 参数名 | 类型       | 描述                                     | 默认值         |
| ------ | ---------- | ---------------------------------------- | -------------- |
| `obj`  | `T`        | 要克隆的原始对象                         | —              |
| `hash` | `WeakMap`  | 用于处理循环引用的缓存映射               | `new WeakMap()`|

## 返回值

`T` — 返回对象的深克隆副本。

## 使用示例

### 克隆普通对象

```typescript
const original = {
  name: "Alice",
  address: { city: "New York", zip: 10001 },
};

const cloned = deepClone(original);

cloned.address.city = "Boston";
console.log(original.address.city); // 输出: "New York"（原对象未被修改）
```

### 克隆数组

```typescript
const arr = [1, [2, 3], { a: 4 }];
const clonedArr = deepClone(arr);

clonedArr[1][0] = 99;
console.log(arr[1][0]); // 输出: 2（原数组未被修改）
```

### 处理循环引用

```typescript
const obj: any = { name: "circular" };
obj.self = obj;

const cloned = deepClone(obj);
console.log(cloned.self === cloned); // 输出: true
```
