import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { createUUID } from "../src";
import ShowDocs from "./utl/ShowDocs";
const Page = () => {
  const [uuid, setUuid] = useState<string>(""); // 存储生成的 UUID

  const handleGenerateUUID = () => {
    const newUUID = createUUID(); // 调用生成 UUID 函数
    setUuid(newUUID); // 更新状态以显示新的 UUID
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>UUID Generator</h2>
      <button onClick={handleGenerateUUID}>Generate UUID</button>
      {uuid && (
        <div style={{ marginTop: "20px" }}>
          <strong>Generated UUID:</strong> {uuid}
        </div>
      )}
    </div>
  );
};
const meta: Meta<typeof createUUID> = {
  title: "base/createUUID",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof createUUID>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/createUUID.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
