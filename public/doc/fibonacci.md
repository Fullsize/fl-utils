# fibonacci

## 函数声明

```typescript
function fibonacci(n: number): number;
```

## 描述

`fibonacci` 函数用于计算第 `n` 个斐波那契数。该序列以 0 和 1 开头，每个后续数值是前两个数值之和。此函数使用迭代方法，避免递归带来的性能问题。

## 参数

| 参数名 | 类型     | 描述                              | 默认值 |
| ------ | -------- | --------------------------------- | ------ |
| `n`    | `number` | 斐波那契序列中的位置，从 0 开始   | —      |

## 返回值

`number` — 第 `n` 个斐波那契数。

## 异常

如果输入为负整数，将抛出 `Error`。

## 使用示例

```typescript
fibonacci(0);   // 输出: 0
fibonacci(1);   // 输出: 1
fibonacci(2);   // 输出: 1
fibonacci(5);   // 输出: 5
fibonacci(10);  // 输出: 55
```
