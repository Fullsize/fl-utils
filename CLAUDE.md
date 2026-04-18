# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build

# Start Storybook development server
pnpm run dev

# Build Storybook static site
pnpm run build-storybook

# Release (semantic-release on master branch)
pnpm run release
```

## Architecture

This is `@fullsize/utils`, a TypeScript utility library bundled with Rollup.

### Source Structure

- `src/index.ts` - Main entry point, exports all utilities
- `src/array/` - Array utilities (chuck, shuffle)
- `src/is/` - Type guards (isArray, isEmpty, isEqual, isFunction, isNull, isNuil, isObject, isPromise, isSymbol)
- `src/math/` - Math utilities (add, ceil)
- `src/base/` - Base utilities (toNumber)
- Root-level utilities: asyncPool, awaitTo, changeURLArg, curry, deconstruction, deepClone, deepMerge, downloadFile, downloadFileAsStream, fibonacci, generateUUID, getQuery, getScale, memo, removeQueryParams, tryCatch

### Build Output

- ES module: `lib/index.js`
- UMD: `lib/index.umd.js`
- Type declarations: `lib/type/index.d.ts`

### External Dependencies

React and qs are external dependencies (not bundled).

### Storybook

Each utility has a corresponding `.stories.tsx` file in `stories/` for documentation and interactive examples.

### Release

Uses semantic-release. Releases trigger automatically on pushes to master branch via GitHub Actions.
