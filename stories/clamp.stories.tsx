import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { clamp } from "../src";
import ShowDocs from "./utl/ShowDocs";

const ClampDemo: React.FC = () => {
  return (
    <div>
      <p>clamp(5, 0, 10): {clamp(5, 0, 10)}</p>
      <p>clamp(-3, 0, 10): {clamp(-3, 0, 10)}</p>
      <p>clamp(15, 0, 10): {clamp(15, 0, 10)}</p>
      <p>clamp(50, 0, 100): {clamp(50, 0, 100)}</p>
    </div>
  );
};

const meta: Meta<typeof clamp> = {
  title: "math/clamp",
  component: ClampDemo,
};

export default meta;
type Story = StoryObj<typeof clamp>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/clamp.md"} />,
};

export const Demo: Story = {
  render: () => <ClampDemo />,
};
