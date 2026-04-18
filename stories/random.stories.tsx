import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { random } from "../src";
import ShowDocs from "./utl/ShowDocs";

const RandomDemo: React.FC = () => {
  const [randomInt, setRandomInt] = React.useState(0);
  const [randomFloat, setRandomFloat] = React.useState(0);

  return (
    <div>
      <p>随机整数(1-10): {randomInt}</p>
      <button onClick={() => setRandomInt(random(1, 10))}>生成随机整数</button>
      <hr />
      <p>随机浮点数(0-1): {randomFloat.toFixed(4)}</p>
      <button onClick={() => setRandomFloat(random(0, 1, true))}>生成随机浮点数</button>
    </div>
  );
};

const meta: Meta<typeof random> = {
  title: "math/random",
  component: RandomDemo,
};

export default meta;
type Story = StoryObj<typeof random>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/random.md"} />,
};

export const Demo: Story = {
  render: () => <RandomDemo />,
};
