import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { throttle } from "../src";
import ShowDocs from "./utl/ShowDocs";

const ThrottleDemo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [throttledCount, setThrottledCount] = React.useState(0);

  const handleMove = React.useMemo(() => {
    return throttle(() => {
      setThrottledCount((c) => c + 1);
    }, 500);
  }, []);

  return (
    <div>
      <p>移动次数: {count}</p>
      <p>节流后执行次数: {throttledCount}</p>
      <div
        style={{ width: 200, height: 100, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}
        onMouseMove={() => {
          setCount((c) => c + 1);
          handleMove();
        }}
      >
        在此区域移动鼠标
      </div>
    </div>
  );
};

const meta: Meta<typeof throttle> = {
  title: "function/throttle",
  component: ThrottleDemo,
};

export default meta;
type Story = StoryObj<typeof throttle>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/throttle.md"} />,
};

export const Demo: Story = {
  render: () => <ThrottleDemo />,
};
