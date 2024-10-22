## 方法名称

memo

## 函数声明

```typescript
function memo<T extends (...args: any[]) => any>(fn: T): T;
```

## 描述

`memo` 函数用于实现函数的记忆化，缓存函数的调用结果以提升性能。对于相同的输入参数，它只会计算一次，后续相同参数的调用会直接返回缓存的结果，而不是重新执行函数。

## 参数

- `fn: T`: 要进行记忆化处理的函数。该函数必须接受任意数量的参数并返回任意类型的结果。

## 返回值

- 返回一个新的函数，该函数是传入函数 fn 的记忆化版本。调用时会检查缓存，以决定是返回缓存结果还是执行原函数。

## 使用示例

### 示例 1：简单的加法函数

```typescript
const add = (a: number, b: number): number => a + b;
const memoizedAdd = memo(add);

console.log(memoizedAdd(2, 3)); // 输出: 5，计算并缓存结果
console.log(memoizedAdd(2, 3)); // 输出: 5，直接返回缓存结果
console.log(memoizedAdd(3, 4)); // 输出: 7，计算并缓存结果
```

### 示例 2：带有不同参数的函数

```typescript
const multiply = (x: number, y: number): number => x * y;
const memoizedMultiply = memo(multiply);

console.log(memoizedMultiply(2, 5)); // 输出: 10，计算并缓存结果
console.log(memoizedMultiply(2, 5)); // 输出: 10，直接返回缓存结果
console.log(memoizedMultiply(5, 2)); // 输出: 10，计算并缓存结果，因为参数顺序不同
```
