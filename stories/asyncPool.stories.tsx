import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { asyncPool } from "../src";
import ShowDocs from "./utl/ShowDocs";
const Page = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);

    // Simulated tasks (e.g., fetching data from an API).
    const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const iteratorFn = async (task) => {
      // Simulate a network request with a delay.
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Task ${task} completed`);
        }, 1000 * Math.random()); // Random delay between 0 and 1 second.
      });
    };

    try {
      // Using asyncPool with a pool limit of 3.
      const results = await asyncPool(3, tasks, iteratorFn);
      setResults(results);
    } catch (error) {
      console.error("Error in asyncPool:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Async Pool Example</h2>
      <button onClick={handleStart} disabled={loading}>
        {loading ? "Processing..." : "Start Tasks"}
      </button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};
const meta: Meta<typeof asyncPool> = {
  title: "base/asyncPool",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof asyncPool>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/asyncPool.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
