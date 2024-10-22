import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { getQueryString } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App = () => {
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    // Parse query string from URL when the component mounts
    const params = getQueryString();
    setQueryParams(params);
  }, []);

  return (
    <div>
      <h1>Query Parameters</h1>
      <div>
        {Object.keys(queryParams).length === 0 ? (
          <p>No query parameters found</p>
        ) : (
          <ul>
            {Object.keys(queryParams).map((key) => (
              <li key={key}>
                {key}:{" "}
                {Array.isArray(queryParams[key])
                  ? queryParams[key].join(", ")
                  : queryParams[key]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
const Page = App;
const meta: Meta<typeof getQueryString> = {
  title: "base/getQueryString",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof getQueryString>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/getQueryString.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
