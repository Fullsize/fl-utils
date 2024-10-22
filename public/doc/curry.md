## 方法名称

getQueryString

## 函数声明

```typescript
function curry<T extends Func>(fn: T): (...args: any[]) => any;
```

## 描述

`curry` 函数用于将一个接受多个参数的函数转化为可逐步传入参数的柯里化版本。它允许调用者一次传递部分参数，然后返回一个新的函数继续传递剩余参数，直到所有参数传递完毕，最终执行原函数。

## 参数

- `fn: T`: 被柯里化的原始函数，接受多个参数。

## 返回值

- `(...args: any[]) => any`: 返回一个柯里化后的函数。该函数可以逐步接受参数，并在接收到足够的参数后，执行原始函数。

## 使用示例

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const curriedAdd = curry(add);

// 逐步传递参数
console.log(curriedAdd(2)(3)); // 输出: 5

// 一次传递所有参数
console.log(curriedAdd(4, 5)); // 输出: 9
```
