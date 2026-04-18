# random

## 函数声明

```typescript
function random(min: number, max: number, floating?: boolean): number;
```

## 描述

`random` 函数生成指定范围内的随机数，支持整数和浮点数。

## 参数

| 参数名     | 类型      | 描述                   | 默认值  |
| ---------- | --------- | ---------------------- | ------- |
| `min`      | `number`  | 最小值                 | —       |
| `max`      | `number`  | 最大值                 | —       |
| `floating` | `boolean` | 是否返回浮点数         | `false` |

## 返回值

`number` — 返回范围内的随机数。

## 使用示例

### 随机整数

```typescript
random(1, 10);    // 输出: 1 到 10 之间的随机整数
random(0, 100);   // 输出: 0 到 100 之间的随机整数
```

### 随机浮点数

```typescript
random(0, 1, true);    // 输出: 0 到 1 之间的随机浮点数
random(1.5, 2.5, true); // 输出: 1.5 到 2.5 之间的随机浮点数
```

### 随机数组索引

```typescript
const arr = ["a", "b", "c", "d", "e"];
const index = random(0, arr.length - 1);
console.log(arr[index]); // 随机取数组元素
```