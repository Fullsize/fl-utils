## 方法名称

createUUID

## 函数声明

```typescript
function createUUID(len: number = 36): string;
```

## 描述

`createUUID` 函数用于生成一个随机的 UUID（通用唯一标识符）。该函数默认生成一个带有标准格式的 36 个字符的 UUID，包括连字符分隔符。通过传递不同的 `len` 参数，可以生成自定义长度的字符串（但标准 UUID 的默认长度为 36）。

## 参数

- `len: number = 36`: 可选参数，指定生成的 UUID 的总长度，默认为 36。标准 UUID 的长度是 36 个字符，包含 4 个连字符。

## 返回值

- `string`:返回生成的随机 UUID 字符串。

## 使用示例

```javascript
const uuid = createUUID();
console.log(uuid);
// 输出类似: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
```
