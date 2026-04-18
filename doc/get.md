# get

## 函数声明

```typescript
function get(obj: Record<string, any>, path: string, defaultValue?: any): any;
```

## 描述

`get` 函数根据路径字符串安全获取嵌套对象属性，避免访问未定义属性时报错。路径不存在时返回默认值。

## 参数

| 参数名         | 类型                 | 描述                               | 默认值  |
| -------------- | -------------------- | ---------------------------------- | ------- |
| `obj`          | `Record<string, any>` | 源对象                            | —       |
| `path`         | `string`             | 属性路径，支持 "a.b.c" 或 "a[0].b" | —       |
| `defaultValue` | `any`                | 路径不存在时的默认值               | `undefined` |

## 返回值

`any` — 返回路径对应的值或默认值。

## 使用示例

### 基本用法

```typescript
const user = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001,
  },
};

get(user, "name");           // 输出: "Alice"
get(user, "address.city");   // 输出: "New York"
get(user, "address.zip");    // 输出: 10001
```

### 安全访问不存在的路径

```typescript
get(user, "address.country");         // 输出: undefined
get(user, "address.country", "N/A");  // 输出: "N/A"
get(user, "phone.number", "无");      // 输出: "无"
```

### 数组路径

```typescript
const data = { items: [{ name: "A" }, { name: "B" }] };

get(data, "items[0].name");  // 输出: "A"
get(data, "items[1].name");  // 输出: "B"
get(data, "items[5].name", "default");  // 输出: "default"
```