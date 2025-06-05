import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import deepClone from "../src/deepClone"; // 确保路径正确
import ShowDocs from "./utl/ShowDocs";

const App: React.FC = () => {
  // 直接用对象，不用 JSON 字符串
  const [originalObj, setOriginalObj] = useState<any>({
    name: "Alice",
    date: new Date(),
    map: new Map([["k", "v"]]),
    set: new Set([1, 2, 3]),
    nested: { a: [1, 2], b: { c: 3 } },
  });

  const [cloned, setCloned] = useState<any>({});

  const handleClone = () => {
    const result = deepClone(originalObj);
    setCloned(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Deep Clone Example (Map, Set supported)</h2>
      <button onClick={handleClone}>Clone Object</button>
      <div style={{ marginTop: 20 }}>
        <h3>Original Object:</h3>
        <pre>{JSON.stringify(safeSerialize(originalObj), null, 2)}</pre>

        <h3>Cloned Object:</h3>
        <pre>{JSON.stringify(safeSerialize(cloned), null, 2)}</pre>
      </div>
    </div>
  );
};

// 为了能打印 Map 和 Set，做个简单转换
function safeSerialize(obj: any) {
  if (obj instanceof Map) {
    return { __type: "Map", value: [...obj.entries()] };
  }
  if (obj instanceof Set) {
    return { __type: "Set", value: [...obj.values()] };
  }
  if (obj instanceof Date) {
    return { __type: "Date", value: obj.toISOString() };
  }
  if (typeof obj === "object" && obj !== null) {
    const newObj: any = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      newObj[key] = safeSerialize(obj[key]);
    }
    return newObj;
  }
  return obj;
}

function reviveSpecialTypes(obj: any): any {
  if (obj && typeof obj === "object") {
    if ("__map__" in obj) {
      return new Map(obj.__map__);
    }
    if ("__set__" in obj) {
      return new Set(obj.__set__);
    }
    if ("__date__" in obj) {
      return new Date(obj.__date__);
    }
    for (const key in obj) {
      obj[key] = reviveSpecialTypes(obj[key]);
    }
  }
  return obj;
}

const meta: Meta<typeof deepClone> = {
  title: "base/deepClone",
  component: App,
};

export default meta;
type Story = StoryObj<typeof deepClone>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/deepClone.md"} />,
};

export const Demo: Story = {
  render: () => <App />,
};
