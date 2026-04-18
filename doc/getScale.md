# getScale

## 函数声明

```typescript
function getScale(containRatio?: boolean, baseWidth?: number): number;
```

## 描述

`getScale` 函数用于计算缩放比例。它根据当前窗口宽度与指定的基准宽度进行比较，并返回一个缩放比例。可以选择是否包含设备的像素比。

## 参数

| 参数名         | 类型      | 描述                                       | 默认值  |
| -------------- | --------- | ------------------------------------------ | ------- |
| `containRatio` | `boolean` | 是否包含设备像素比进行缩放                 | `true`  |
| `baseWidth`    | `number`  | 用于比较的基准宽度                         | `1920`  |

## 返回值

`number` — 返回计算得到的缩放比例，确保返回值至少为 1。

## 使用示例

### 计算默认缩放比例

```typescript
console.log(getScale()); // 输出: 基于 1920 的缩放比例
```

### 不包含设备像素比

```typescript
console.log(getScale(false)); // 输出: 不包含设备像素比的缩放比例
```

### 使用自定义基准宽度

```typescript
console.log(getScale(true, 1366)); // 输出: 基于 1366 的缩放比例
```
