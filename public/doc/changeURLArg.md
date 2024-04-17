## 方法名称

changeURLArg

## 描述

用于更改URL参数的值或添加新的参数。

## 参数

- `name`：要更改的参数名称。如果未提供，则不执行任何操作并返回原始URL。
- `val`：参数的新值。如果name提供但val未提供，则不执行任何操作并返回原始URL。
- `href`：要操作的URL字符串。如果未提供，则使用当前页面的URL。

## 返回值

- 返回一个新的URL，其中指定的参数名称具有新的参数值。
- 如果指定的参数不存在，则会添加新的参数。

## 使用示例

```javascript
// 导入 changeURLArg 方法
import { changeURLArg } from "@fullsize/utils";

// 当前URL为 https://example.com?page=1&limit=10
const oldUrl = window.location.href;

// 将参数 page 的值更改为 2
const newUrl = changeURLArg("page", "2", oldUrl);
console.log(newUrl);
// Output: https://example.com?page=2&limit=10
```
