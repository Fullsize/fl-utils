# getQueryString

## 函数声明

```typescript
function getQueryString(search?: string): { [x: string]: any };
```

## 描述

`getQueryString` 函数用于解析 URL 中的查询字符串，并将其转换为一个键值对对象。支持从当前页面 URL 中自动获取查询参数，也可以传入自定义的查询字符串进行解析。

## 参数

| 参数名   | 类型     | 描述                                           | 默认值 |
| -------- | -------- | ---------------------------------------------- | ------ |
| `search` | `string` | 需要解析的查询字符串，未提供时从当前页面 URL 获取 | —      |

## 返回值

`{ [x: string]: any }` — 返回一个对象，包含解析后的查询字符串键值对。如果某个键在查询字符串中有多个值，则该键对应的值为一个数组。

## 使用示例

### 从当前 URL 解析

```typescript
// 假设当前 URL 是 https://example.com/?name=John&age=30&name=Jane
const queryParams = getQueryString();

console.log(queryParams);
// 输出:
// {
//   name: ['John', 'Jane'],
//   age: '30'
// }
```

### 解析自定义查询字符串

```typescript
const params = getQueryString("id=123&status=active");
console.log(params);
// 输出: { id: '123', status: 'active' }
```
