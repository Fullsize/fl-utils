import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { downloadFile } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string>(
    "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
  );
  const [filename, setFilename] = useState<string>("sample.pdf");

  const handleDownload = () => {
    downloadFile(fileUrl, filename);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Download Example</h2>
      <div>
        <input
          type="text"
          placeholder="Enter file URL"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter filename"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button onClick={handleDownload}>Download File</button>
      </div>
    </div>
  );
};

const meta: Meta<typeof downloadFile> = {
  title: "base/downloadFile",
  component: App,
};

export default meta;
type Story = StoryObj<typeof downloadFile>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/downloadFile.md"} />,
};
export const Demo: Story = {
  render: () => <App />,
};
