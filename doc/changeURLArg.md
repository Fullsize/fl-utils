# changeURLArg

## 函数声明

```typescript
function changeURLArg(name?: string, val?: string, href?: string): string;
```

## 描述

`changeURLArg` 函数用于修改或添加 URL 中的查询参数。该函数可以根据提供的参数名和对应的值，修改 URL 中已存在的参数值，或者向 URL 添加新的查询参数。如果没有提供 URL，默认会使用当前页面的 URL。

## 参数

| 参数名 | 类型     | 描述                                                   | 默认值 |
| ------ | -------- | ------------------------------------------------------ | ------ |
| `name` | `string` | 要修改或添加的查询参数的名称                           | —      |
| `val`  | `string` | 要修改或添加的查询参数的值                             | —      |
| `href` | `string` | 要修改的 URL，未提供时使用当前页面的 `window.location.href` | —      |

## 返回值

`string` — 返回修改后的 URL。如果未提供 `name` 或 `val` 参数，返回原始的 `href` 或当前页面的 URL。

## 使用示例

### 修改 URL 中已存在的参数

```typescript
const updatedURL = changeURLArg(
  "page",
  "2",
  "https://example.com?page=1&size=10"
);
console.log(updatedURL);
// 输出: 'https://example.com?page=2&size=10'
```

### 向 URL 添加新的参数

```typescript
const updatedURL = changeURLArg(
  "sort",
  "asc",
  "https://example.com?page=1&size=10"
);
console.log(updatedURL);
// 输出: 'https://example.com?page=1&size=10&sort=asc'
```

### 处理没有参数的 URL

```typescript
const updatedURL = changeURLArg("category", "books", "https://example.com");
console.log(updatedURL);
// 输出: 'https://example.com?category=books'
```
