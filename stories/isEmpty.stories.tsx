import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { isEmpty } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App = () => {
  const data = {}; // 可以替换为其他值进行测试
  return (
    <div>
      {isEmpty(data) ? (
        <p>No data available.</p>
      ) : (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const Page = App;
const meta: Meta<typeof isEmpty> = {
  title: "base/isEmpty",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof isEmpty>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/isEmpty.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
