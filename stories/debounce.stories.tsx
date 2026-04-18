import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { debounce } from "../src";
import ShowDocs from "./utl/ShowDocs";

const DebounceDemo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [debouncedCount, setDebouncedCount] = React.useState(0);

  const handleClick = React.useMemo(() => {
    return debounce(() => {
      setDebouncedCount((c) => c + 1);
    }, 500);
  }, []);

  return (
    <div>
      <p>点击次数: {count}</p>
      <p>防抖后执行次数: {debouncedCount}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          handleClick();
        }}
      >
        快速点击测试防抖
      </button>
    </div>
  );
};

const meta: Meta<typeof debounce> = {
  title: "function/debounce",
  component: DebounceDemo,
};

export default meta;
type Story = StoryObj<typeof debounce>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/debounce.md"} />,
};

export const Demo: Story = {
  render: () => <DebounceDemo />,
};
