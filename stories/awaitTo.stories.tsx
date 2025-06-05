import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { awaitTo } from "../src"; // 请根据实际路径调整

const AsyncComponent = () => {
  const [result, setResult] = useState<string>("");

  const fetchSuccess = async () => {
    const [err, data] = await awaitTo(
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
      )
    );
    if (err) {
      setResult(`❌ Error: ${(err as Error).message}`);
    } else {
      setResult(`✅ Success: ${JSON.stringify(data)}`);
    }
  };

  const fetchFail = async () => {
    const [err, data] = await awaitTo(
      fetch("https://invalid.api.endpoint/test").then((res) => res.json()),
      { hint: "请求失败，检查网络或接口地址" }
    );
    if (err) {
      setResult(
        `❌ Error: ${(err as any).message || err} | Hint: ${(err as any).hint}`
      );
    } else {
      setResult(`✅ Success: ${JSON.stringify(data)}`);
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>awaitTo() 异步错误处理示例</h2>
      <button onClick={fetchSuccess} style={{ marginRight: 8 }}>
        正常请求
      </button>
      <button onClick={fetchFail}>错误请求</button>
      <pre style={{ marginTop: 16 }}>{result}</pre>
    </div>
  );
};

const meta: Meta<typeof AsyncComponent> = {
  title: "utils/awaitTo",
  component: AsyncComponent,
};

export default meta;
type Story = StoryObj<typeof AsyncComponent>;

export const Demo: Story = {
  render: () => <AsyncComponent />,
};
