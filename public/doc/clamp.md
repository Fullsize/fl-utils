# clamp

## 函数声明

```typescript
function clamp(value: number, min: number, max: number): number;
```

## 描述

`clamp` 函数将数值限制在指定的最小值和最大值之间。如果值小于最小值返回最小值，大于最大值返回最大值。

## 参数

| 参数名  | 类型     | 描述     | 默认值 |
| ------- | -------- | -------- | ------ |
| `value` | `number` | 需要限制的数值 | — |
| `min`   | `number` | 最小值   | —      |
| `max`   | `number` | 最大值   | —      |

## 返回值

`number` — 返回限制后的数值。

## 使用示例

```typescript
clamp(5, 0, 10);    // 输出: 5（在范围内）
clamp(-3, 0, 10);   // 输出: 0（小于最小值）
clamp(15, 0, 10);   // 输出: 10（大于最大值）
clamp(50, 0, 100);  // 输出: 50（在范围内）
```