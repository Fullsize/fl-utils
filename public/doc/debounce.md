# debounce

## 函数声明

```typescript
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay?: number
): (...args: Parameters<T>) => void;
```

## 描述

`debounce` 函数用于创建防抖函数。在事件被触发后延迟执行，如果在延迟期间再次触发则重新计时。常用于搜索输入、窗口 resize 等场景。

## 参数

| 参数名  | 类型     | 描述               | 默认值 |
| ------- | -------- | ------------------ | ------ |
| `fn`    | `T`      | 需要防抖的函数     | —      |
| `delay` | `number` | 延迟时间，单位毫秒 | `300`  |

## 返回值

`(...args: Parameters<T>) => void` — 返回防抖后的函数。

## 使用示例

### 搜索输入防抖

```typescript
const handleSearch = debounce((query: string) => {
  fetchResults(query);
}, 500);

input.addEventListener("input", (e) => {
  handleSearch(e.target.value);
});
// 用户连续输入时，只会在停止输入 500ms 后才触发请求
```

### 窗口 resize 防抖

```typescript
const handleResize = debounce(() => {
  console.log("Window size:", window.innerWidth, window.innerHeight);
}, 200);

window.addEventListener("resize", handleResize);
```