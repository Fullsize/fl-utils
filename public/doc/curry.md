## 方法名称

curry

## 描述

对给定的函数进行柯里化处理。

## 参数

- `fn`：需要进行柯里化的函数。

## 返回值

- 返回一个柯里化后的函数，该函数可以逐步接收参数，并在接收完所有参数后执行原始函数。

## 使用示例

```javascript
// 导入 curry 函数
import {curry} from '@fullsize/utils';

// 示例函数
function sum(a: number, b: number, c: number) {
  return a + b + c;
}

// 对 sum 函数进行柯里化
const curriedSum = curry(sum);

// 调用柯里化后的函数
const result1 = curriedSum(1)(2)(3);
console.log(result1); // Output: 6

// 也可以一次性传入多个参数
const result2 = curriedSum(1, 2)(3);
console.log(result2); // Output: 6

```
