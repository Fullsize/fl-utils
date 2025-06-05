import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { fibonacci, tryCatch } from "../src";
import ShowDocs from "./utl/ShowDocs";

const FibonacciDemo = () => {
  const [n, setN] = useState(0);
  const [result, setResult] = useState<number | string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setN(val);
    try {
      const fib = fibonacci(val);
      setResult(fib);
    } catch (err: any) {
      setResult(err.message);
    }
  };

  return (
    <div>
      <h2>Fibonacci Demo</h2>
      <input
        type="number"
        value={n}
        min={0}
        onChange={handleChange}
        placeholder="Enter a non-negative number"
      />
      <p>Result: {result}</p>
    </div>
  );
};

const meta: Meta<typeof fibonacci> = {
  title: "base/fibonacci",
  component: FibonacciDemo,
};

export default meta;

type Story = StoryObj;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/fibonacci.md"} />,
};

export const Demo: Story = {
  render: () => <FibonacciDemo />,
};
