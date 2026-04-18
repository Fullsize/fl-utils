# @fullsize/utils

A JavaScript/TypeScript utility library providing common functions for everyday development.

## Installation

```bash
npm install @fullsize/utils
# or
pnpm install @fullsize/utils
```

## Features

### Array Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `chuck` | Split array into smaller chunks | [chuck.md](public/doc/chuck.md) |
| `flatten` | Flatten nested arrays | [flatten.md](public/doc/flatten.md) |
| `groupBy` | Group array elements by key | [groupBy.md](public/doc/groupBy.md) |
| `shuffle` | Randomly shuffle array elements | [shuffle.md](public/doc/shuffle.md) |
| `unique` | Remove duplicate elements | [unique.md](public/doc/unique.md) |

### Type Guards

| Function | Description | Docs |
|----------|-------------|------|
| `isArray` | Check if value is an array | [isArray.md](public/doc/isArray.md) |
| `isEmpty` | Check if value is empty | [isEmpty.md](public/doc/isEmpty.md) |
| `isEqual` | Deep equality check | [isEqual.md](public/doc/isEqual.md) |
| `isFunction` | Check if value is a function | [isFunction.md](public/doc/isFunction.md) |
| `isNull` | Check if value is null | [isNull.md](public/doc/isNull.md) |
| `isNuil` | Check if value is null or undefined | [isNuil.md](public/doc/isNuil.md) |
| `isObject` | Check if value is an object | [isObject.md](public/doc/isObject.md) |
| `isPromise` | Check if value is a Promise | [isPromise.md](public/doc/isPromise.md) |
| `isSymbol` | Check if value is a Symbol | [isSymbol.md](public/doc/isSymbol.md) |

### Math Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `add` | Addition with precision | [add.md](public/doc/add.md) |
| `ceil` | Ceiling with precision | [ceil.md](public/doc/ceil.md) |
| `clamp` | Clamp number between min and max | [clamp.md](public/doc/clamp.md) |
| `fibonacci` | Calculate nth Fibonacci number | [fibonacci.md](public/doc/fibonacci.md) |
| `random` | Generate random number in range | [random.md](public/doc/random.md) |

### Object Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `deepClone` | Deep clone objects | [deepClone.md](public/doc/deepClone.md) |
| `deepMerge` | Deep merge objects | [deepMerge.md](public/doc/deepMerge.md) |
| `deconstruction` | Deconstruct and reassemble data | [deconstruction.md](public/doc/deconstruction.md) |
| `get` | Safely get nested object property | [get.md](public/doc/get.md) |
| `omit` | Omit specified properties from object | [omit.md](public/doc/omit.md) |
| `pick` | Pick specified properties from object | [pick.md](public/doc/pick.md) |

### Function Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `curry` | Curry a function | [curry.md](public/doc/curry.md) |
| `debounce` | Debounce function calls | [debounce.md](public/doc/debounce.md) |
| `memo` | Memoize function results | [memo.md](public/doc/memo.md) |
| `once` | Function that only executes once | [once.md](public/doc/once.md) |
| `throttle` | Throttle function calls | [throttle.md](public/doc/throttle.md) |

### Async Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `asyncPool` | Limit concurrent async tasks | [asyncPool.md](public/doc/asyncPool.md) |
| `awaitTo` | Convert Promise to error/data tuple | [awaitTo.md](public/doc/awaitTo.md) |
| `sleep` | Promise-based delay | [sleep.md](public/doc/sleep.md) |
| `tryCatch` | Wrap sync/async with error handling | [tryCatch.md](public/doc/tryCatch.md) |

### URL Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `changeURLArg` | Modify URL query parameters | [changeURLArg.md](public/doc/changeURLArg.md) |
| `getQueryString` | Parse query string to object | [getQueryString.md](public/doc/getQueryString.md) |
| `removeQueryParams` | Remove URL query parameters | [removeQueryParams.md](public/doc/removeQueryParams.md) |

### DOM Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `downloadFile` | Download file via XHR | [downloadFile.md](public/doc/downloadFile.md) |
| `downloadFileAsStream` | Download file as Blob stream | [downloadFileAsStream.md](public/doc/downloadFileAsStream.md) |
| `getScale` | Calculate window scale ratio | [getScale.md](public/doc/getScale.md) |

### Misc Utilities

| Function | Description | Docs |
|----------|-------------|------|
| `createUUID` | Generate UUID | [createUUID.md](public/doc/createUUID.md) |
| `toNumber` | Convert value to number | [toNumber.md](public/doc/toNumber.md) |

## Usage

```typescript
import { deepClone, curry, asyncPool, tryCatch } from "@fullsize/utils";

// Deep clone an object
const cloned = deepClone({ a: 1, b: { c: 2 } });

// Curry a function
const add = (a: number, b: number) => a + b;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)); // 3

// Control concurrent async tasks
const results = await asyncPool(3, urls, fetchUrl);

// Error handling with tryCatch
const [err, data] = tryCatch(() => JSON.parse(str));
if (err) {
  console.error(err);
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build library
pnpm run build

# Start Storybook dev server
pnpm run dev

# Build Storybook static site
pnpm run build-storybook
```

## License

UNLICENSED - Private package

## Repository

[GitHub](https://github.com/Fullsize/fl-utils)