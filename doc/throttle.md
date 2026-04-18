# throttle

## 函数声明

```typescript
function throttle<T extends (...args: any[]) => any>(
  fn: T,
  interval?: number
): (...args: Parameters<T>) => void;
```

## 描述

`throttle` 函数用于创建节流函数。在指定时间间隔内只执行一次，不管触发多少次。常用于滚动事件、鼠标移动等高频事件。

## 参数

| 参数名     | 类型     | 描述                   | 默认值 |
| ---------- | -------- | ---------------------- | ------ |
| `fn`       | `T`      | 需要节流的函数         | —      |
| `interval` | `number` | 时间间隔，单位毫秒     | `300`  |

## 返回值

`(...args: Parameters<T>) => void` — 返回节流后的函数。

## 使用示例

### 滚动事件节流

```typescript
const handleScroll = throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 100);

window.addEventListener("scroll", handleScroll);
// 每 100ms 最多执行一次
```

### 拖拽事件节流

```typescript
const handleMouseMove = throttle((e) => {
  updatePosition(e.clientX, e.clientY);
}, 16); // 约 60fps

element.addEventListener("mousemove", handleMouseMove);
```