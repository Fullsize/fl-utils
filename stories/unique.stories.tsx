import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { unique } from "../src";
import ShowDocs from "./utl/ShowDocs";

const UniqueDemo: React.FC = () => {
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const result = unique(arr);

  return (
    <div>
      <p>原始数组: {JSON.stringify(arr)}</p>
      <p>去重后: {JSON.stringify(result)}</p>
    </div>
  );
};

const meta: Meta<typeof unique> = {
  title: "array/unique",
  component: UniqueDemo,
};

export default meta;
type Story = StoryObj<typeof unique>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/unique.md"} />,
};

export const Demo: Story = {
  render: () => <UniqueDemo />,
};
