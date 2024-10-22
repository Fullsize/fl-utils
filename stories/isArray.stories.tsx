import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { isArray } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const checkIfArray = () => {
    try {
      const parsedValue = JSON.parse(inputValue);
      const isArrayResult = isArray(parsedValue);
      setResult(`Is the input an array? ${isArrayResult}`);
    } catch (error) {
      setResult("Invalid input. Please enter a valid JSON array or value.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Array Check Tool</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a JSON array (e.g., [1, 2, 3])"
      />
      <button onClick={checkIfArray}>Check if Array</button>
      <p>{result}</p>
    </div>
  );
};

const Page = App;
const meta: Meta<typeof isArray> = {
  title: "base/isArray",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof isArray>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/isArray.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
