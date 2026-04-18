import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { omit } from "../src";
import ShowDocs from "./utl/ShowDocs";

const OmitDemo: React.FC = () => {
  const user = { name: "Alice", age: 30, email: "alice@example.com", role: "admin" };
  const result = omit(user, ["role"]);

  return (
    <div>
      <p>原始对象: {JSON.stringify(user)}</p>
      <p>omit(user, ["role"]): {JSON.stringify(result)}</p>
    </div>
  );
};

const meta: Meta<typeof omit> = {
  title: "object/omit",
  component: OmitDemo,
};

export default meta;
type Story = StoryObj<typeof omit>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/omit.md"} />,
};

export const Demo: Story = {
  render: () => <OmitDemo />,
};
