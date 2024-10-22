import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { changeURLArg } from "../src";
import ShowDocs from "./utl/ShowDocs";
const Page = () => {
  const [paramName, setParamName] = useState("");
  const [paramValue, setParamValue] = useState("");
  const [updatedUrl, setUpdatedUrl] = useState(window.location.href);

  const handleChangeUrl = () => {
    const newUrl = changeURLArg(paramName, paramValue);
    setUpdatedUrl(newUrl);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Change URL Parameter</h2>
      <div>
        <input
          type="text"
          placeholder="Parameter Name"
          value={paramName}
          onChange={(e) => setParamName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Parameter Value"
          value={paramValue}
          onChange={(e) => setParamValue(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleChangeUrl}>Change URL</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Updated URL:</h3>
        <p>{updatedUrl}</p>
      </div>
    </div>
  );
};
const meta: Meta<typeof changeURLArg> = {
  title: "base/changeURLArg",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof changeURLArg>;

export const Doc = {
  render: () => <ShowDocs md={"doc/changeURLArg.md"} />,
};
export const Demo = {
  render: () => <Page />,
};
