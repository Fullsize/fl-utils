import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { once } from "../src";
import ShowDocs from "./utl/ShowDocs";

const OnceDemo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [executedTimes, setExecutedTimes] = React.useState(0);

  const initialize = React.useMemo(() => {
    return once(() => {
      setExecutedTimes((c) => c + 1);
      return "已初始化";
    });
  }, []);

  return (
    <div>
      <p>点击次数: {count}</p>
      <p>实际执行次数: {executedTimes}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          initialize();
        }}
      >
        点击调用 once 函数
      </button>
    </div>
  );
};

const meta: Meta<typeof once> = {
  title: "function/once",
  component: OnceDemo,
};

export default meta;
type Story = StoryObj<typeof once>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/once.md"} />,
};

export const Demo: Story = {
  render: () => <OnceDemo />,
};
