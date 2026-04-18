import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { get } from "../src";
import ShowDocs from "./utl/ShowDocs";

const GetDemo: React.FC = () => {
  const user = {
    name: "Alice",
    address: {
      city: "New York",
      zip: 10001,
    },
    items: [{ name: "A" }, { name: "B" }],
  };

  return (
    <div>
      <pre>user = {JSON.stringify(user, null, 2)}</pre>
      <hr />
      <p>get(user, "name"): {String(get(user, "name"))}</p>
      <p>get(user, "address.city"): {String(get(user, "address.city"))}</p>
      <p>get(user, "address.country"): {String(get(user, "address.country"))}</p>
      <p>get(user, "address.country", "N/A"): {String(get(user, "address.country", "N/A"))}</p>
      <p>get(user, "items[0].name"): {String(get(user, "items[0].name"))}</p>
      <p>get(user, "items[5].name", "default"): {String(get(user, "items[5].name", "default"))}</p>
    </div>
  );
};

const meta: Meta<typeof get> = {
  title: "object/get",
  component: GetDemo,
};

export default meta;
type Story = StoryObj<typeof get>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/get.md"} />,
};

export const Demo: Story = {
  render: () => <GetDemo />,
};
