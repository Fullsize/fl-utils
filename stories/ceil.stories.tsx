import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ceil } from "../src";
import ShowDocs from "./utl/ShowDocs"; // 若有文档展示组件

const DemoCeilComponent = () => {
  const [number, setNumber] = useState("3.1415");
  const [precision, setPrecision] = useState("2");

  const result = ceil(parseFloat(number), parseInt(precision, 10));

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h2>Ceil Demo</h2>
      <div>
        <label>
          Number:{" "}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Precision:{" "}
          <input
            type="number"
            value={precision}
            onChange={(e) => setPrecision(e.target.value)}
          />
        </label>
      </div>
      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
};

const meta: Meta<typeof ceil> = {
  title: "math/ceil",
  component: DemoCeilComponent,
};

export default meta;

type Story = StoryObj;
export const Doc: Story = {
  render: () => <ShowDocs md="doc/ceil.md" />,
};

export const Demo: Story = {
  render: () => <DemoCeilComponent />,
};
