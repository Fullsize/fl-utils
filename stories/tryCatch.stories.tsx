import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { tryCatch } from "../src";
import ShowDocs from "./utl/ShowDocs";

const App = () => {
  const [output, setOutput] = useState<string>("");

  const handleSync = () => {
    const [err, res] = tryCatch(() => JSON.parse('{"valid":true}')) as [
      Error | null,
      any,
    ];
    setOutput(
      err ? `Error: ${err.message}` : `Success: ${JSON.stringify(res)}`
    );
  };

  const handleSyncError = () => {
    const [err, res] = tryCatch(() => JSON.parse("{oops}")) as [
      Error | null,
      any,
    ];
    setOutput(
      err ? `Error: ${err.message}` : `Success: ${JSON.stringify(res)}`
    );
  };

  const handleAsync = async () => {
    const [err, res] = (await tryCatch(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return res.json();
    })) as [Error | null, any];
    setOutput(
      err ? `Error: ${err.message}` : `Success: ${JSON.stringify(res)}`
    );
  };

  return (
    <div>
      <h1>tryCatch Demo</h1>
      <button onClick={handleSync}>Run Sync Success</button>
      <button onClick={handleSyncError}>Run Sync Error</button>
      <button onClick={handleAsync}>Run Async</button>
      <pre>{output}</pre>
    </div>
  );
};

const Page = App;

const meta: Meta<typeof Page> = {
  title: "base/tryCatch",
  component: Page,
};

export default meta;
type Story = StoryObj;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/tryCatch.md"} />,
};

export const Demo: Story = {
  render: () => <Page />,
};
