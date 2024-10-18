import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { downloadFileAsStream } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App: React.FC = () => {
  const handleDownload = () => {
    // 创建一个文本 Blob
    const text = "Hello, this is a sample text file!";
    const blob = new Blob([text], { type: "text/plain" });

    // 调用下载函数
    downloadFileAsStream(blob, "sample.txt");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Download Example</h2>
      <button onClick={handleDownload}>Download Text File</button>
    </div>
  );
};

const meta: Meta<typeof downloadFileAsStream> = {
  title: "base/downloadFileAsStream",
  component: App,
};

export default meta;
type Story = StoryObj<typeof downloadFileAsStream>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/downloadFileAsStream.md"} />,
};
export const Demo: Story = {
  render: () => <App />,
};
