import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { flatten } from "../src";
import ShowDocs from "./utl/ShowDocs";

const FlattenDemo: React.FC = () => {
  const nested = [1, [2, [3, [4]]]];
  const result = flatten(nested);
  const resultDepth2 = flatten(nested, 2);

  return (
    <div>
      <p>原始数组: {JSON.stringify(nested)}</p>
      <p>完全扁平化: {JSON.stringify(result)}</p>
      <p>深度为 2: {JSON.stringify(resultDepth2)}</p>
    </div>
  );
};

const meta: Meta<typeof flatten> = {
  title: "array/flatten",
  component: FlattenDemo,
};

export default meta;
type Story = StoryObj<typeof flatten>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/flatten.md"} />,
};

export const Demo: Story = {
  render: () => <FlattenDemo />,
};
