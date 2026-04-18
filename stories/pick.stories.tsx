import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { pick } from "../src";
import ShowDocs from "./utl/ShowDocs";

const PickDemo: React.FC = () => {
  const user = { name: "Alice", age: 30, email: "alice@example.com", role: "admin" };
  const result = pick(user, ["name", "email"]);

  return (
    <div>
      <p>原始对象: {JSON.stringify(user)}</p>
      <p>pick(user, ["name", "email"]): {JSON.stringify(result)}</p>
    </div>
  );
};

const meta: Meta<typeof pick> = {
  title: "object/pick",
  component: PickDemo,
};

export default meta;
type Story = StoryObj<typeof pick>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/pick.md"} />,
};

export const Demo: Story = {
  render: () => <PickDemo />,
};
