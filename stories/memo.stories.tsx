import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { memo } from "../src";
import ShowDocs from "./utl/ShowDocs";
const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  return num * 1000; // 模拟耗时计算
};

const memoizedCalculation = memo(expensiveCalculation);

const Calculator: React.FC = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Result: {memoizedCalculation(number)}</p>
    </div>
  );
};

// 使用示例
const App: React.FC = () => {
  return <Calculator />;
};

const Page = App;
const meta: Meta<typeof memo> = {
  title: "base/memo",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof memo>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/memo.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
