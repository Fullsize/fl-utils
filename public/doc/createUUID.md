# createUUID

## 函数声明

```typescript
function createUUID(len?: number): string;
```

## 描述

`createUUID` 函数用于生成一个随机的 UUID（通用唯一标识符）。该函数默认生成一个带有标准格式的 36 个字符的 UUID，包括连字符分隔符。通过传递不同的 `len` 参数，可以生成自定义长度的字符串。

## 参数

| 参数名 | 类型     | 描述                          | 默认值 |
| ------ | -------- | ----------------------------- | ------ |
| `len`  | `number` | 生成的 UUID 的总长度          | `36`   |

## 返回值

`string` — 返回生成的随机 UUID 字符串。

## 使用示例

### 生成标准 UUID

```typescript
const uuid = createUUID();
console.log(uuid);
// 输出类似: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
```

### 生成自定义长度的 UUID

```typescript
const shortId = createUUID(8);
console.log(shortId);
// 输出类似: 'a3f1b2c4'
```
