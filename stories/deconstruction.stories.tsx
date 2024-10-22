import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { deconstruction } from "../src";
import ShowDocs from "./utl/ShowDocs";
const Page = () => {
  const [data, setData] = useState<any[]>([
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "San Francisco" },
  ]);

  const [deconstructionPattern, setDeconstructionPattern] = useState({
    userId: "id",
    userDetails: ["name", "city"],
    defaultAge: "age",
    message: ["Hello", "Welcome"],
  });

  const transformedData = deconstruction(data, deconstructionPattern);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data Deconstruction Example</h2>
      <h3>Original Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h3>Deconstruction Pattern:</h3>
      <pre>{JSON.stringify(deconstructionPattern, null, 2)}</pre>

      <h3>Transformed Data:</h3>
      <pre>{JSON.stringify(transformedData, null, 2)}</pre>
    </div>
  );
};

const meta: Meta<typeof deconstruction> = {
  title: "base/deconstruction",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof deconstruction>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/deconstruction.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
