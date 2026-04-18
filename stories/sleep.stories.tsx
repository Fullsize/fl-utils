import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { sleep } from "../src";
import ShowDocs from "./utl/ShowDocs";

const SleepDemo: React.FC = () => {
  const [status, setStatus] = React.useState("等待中...");

  const handleClick = async () => {
    setStatus("开始等待...");
    await sleep(2000);
    setStatus("等待结束！");
  };

  return (
    <div>
      <p>状态: {status}</p>
      <button onClick={handleClick}>等待 2 秒</button>
    </div>
  );
};

const meta: Meta<typeof sleep> = {
  title: "async/sleep",
  component: SleepDemo,
};

export default meta;
type Story = StoryObj<typeof sleep>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/sleep.md"} />,
};

export const Demo: Story = {
  render: () => <SleepDemo />,
};
