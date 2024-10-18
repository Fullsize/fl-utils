import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { curry } from "../src";
import ShowDocs from "./utl/ShowDocs";
import Markdown from "react-markdown";
function multiply(a: number, b: number, c: number): number {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
const Page = () => {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [c, setC] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    // Convert inputs to numbers
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    // Use the curried function
    if (!isNaN(numA) && !isNaN(numB) && !isNaN(numC)) {
      const calculatedResult = curriedMultiply(numA)(numB)(numC);
      setResult(calculatedResult);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Curried Multiply Example</h2>
      <div>
        <input
          type="text"
          placeholder="Enter first number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter second number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter third number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Result:</h3>
        <p>{result !== null ? result : "Enter values to calculate"}</p>
      </div>
    </div>
  );
};
const meta: Meta<typeof curry> = {
  title: "base/curry",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof curry>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/curry.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
