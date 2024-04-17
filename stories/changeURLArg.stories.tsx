import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { changeURLArg } from "../src";
import ShowDocs from "./utl/ShowDocs";
const Page = () => {
  useEffect(() => {
    // 当前URL为 https://example.com?page=1&limit=10
    const oldUrl = window.location.href;

    // 将参数 page 的值更改为 2
    const newUrl = changeURLArg("page", "2", oldUrl);
    console.log(newUrl);
    // Output: https://example.com?page=2&limit=10
  }, []);
  return (
    <>
      <h2>看console.log输出</h2>
    </>
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
