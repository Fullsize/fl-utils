# isPromise

## 函数声明

```typescript
function isPromise<T>(value: any): value is Promise<T>;
```

## 描述

`isPromise` 函数用于判断给定的值是否为一个 Promise 对象。它通过检查值的类型是否为对象、不为 `null`，并且具有 `then` 方法来判断该值是否是一个 Promise 对象。

## 参数

| 参数名  | 类型  | 描述           | 默认值 |
| ------- | ----- | -------------- | ------ |
| `value` | `any` | 需要检查的值   | —      |

## 返回值

`value is Promise<T>` — 如果给定的值是一个 Promise 对象，则返回 `true`；否则返回 `false`。

## 使用示例

```typescript
console.log(isPromise(Promise.resolve()));  // 输出: true
console.log(isPromise(new Promise(() => {}))); // 输出: true
console.log(isPromise({ then: () => {} })); // 输出: true（具有 then 方法的对象）
console.log(isPromise({}));                 // 输出: false
console.log(isPromise(null));               // 输出: false
console.log(isPromise(123));                // 输出: false
```
