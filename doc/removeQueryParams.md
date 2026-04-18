# removeQueryParams

## 函数声明

```typescript
function removeQueryParams(paramName: string): void;
```

## 描述

`removeQueryParams` 函数用于从当前 URL 中删除指定的查询参数。如果未提供参数名，则删除所有查询参数。该函数会使用 `history.replaceState` 来更新地址栏 URL。

## 参数

| 参数名      | 类型     | 描述                           | 默认值 |
| ----------- | -------- | ------------------------------ | ------ |
| `paramName` | `string` | 要删除的查询参数名称           | —      |

## 返回值

`void` — 该函数没有返回值，但会更新当前页面的 URL。

## 使用示例

### 删除指定参数

```typescript
// 假设当前 URL 是 https://example.com?page=1&size=10
removeQueryParams("page");
// URL 更新为: https://example.com?size=10
```

### 删除所有参数

```typescript
// 假设当前 URL 是 https://example.com?page=1&size=10
removeQueryParams("");
// URL 更新为: https://example.com
```
