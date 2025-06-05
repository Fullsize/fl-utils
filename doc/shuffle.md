## 方法名称

shuffle

## 函数声明

```ts
function shuffle<T>(array: T[]): T[];
```

## 描述

`shuffle` 函数用于随机打乱一个数组中元素的顺序。它使用 [Fisher–Yates 洗牌算法](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) 来确保每种排列出现的概率相等。

## 参数

- `array: T[]`：要打乱顺序的原始数组。

## 返回值

- 返回一个新的数组，包含相同的元素但顺序被随机打乱。不会修改原始数组。

## 使用示例

### 示例 1：打乱数字数组

```ts
const original = [1, 2, 3, 4, 5];
const shuffled = shuffle(original);

console.log(shuffled); // 输出示例: [3, 5, 1, 2, 4]，结果每次都可能不同
console.log(original); // 原始数组未被修改: [1, 2, 3, 4, 5]
```

### 示例 2：打乱字符串数组

```ts
const names = ["Alice", "Bob", "Charlie", "David"];
const shuffledNames = shuffle(names);

console.log(shuffledNames); // 输出示例: ["Charlie", "Alice", "David", "Bob"]
```