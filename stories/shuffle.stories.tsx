import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { shuffle } from "../src"; // 请确保这里路径和函数名正确
import ShowDocs from "./utl/ShowDocs";

const App = () => {
  const [output, setOutput] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleShuffle = () => {
    const shuffled = shuffle(output); // 传入原数组副本，避免修改原数组
    setOutput(shuffled);
  };

  return (
    <div>
      <h1>Shuffle Demo</h1>
      <button onClick={handleShuffle}>Shuffle Array</button>
      <pre>{JSON.stringify(output)}</pre>
    </div>
  );
};

const Page = App;

const meta: Meta<typeof Page> = {
  title: "array/shuffle",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/shuffle.md"} />,
};

export const Demo: Story = {
  render: () => <Page />,
};
