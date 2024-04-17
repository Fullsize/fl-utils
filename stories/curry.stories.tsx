import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { curry } from "../src";
import ShowDocs from "./utl/ShowDocs";
import Markdown from "react-markdown";
const Page = () => {
  useEffect(() => {
    // 示例函数
    function sum(a: number, b: number, c: number) {
      return a + b + c;
    }

    // 对 sum 函数进行柯里化
    const curriedSum = curry(sum);

    // 调用柯里化后的函数
    const result1 = curriedSum(1)(2)(3);
    console.log(result1); // Output: 6

    // 也可以一次性传入多个参数
    const result2 = curriedSum(1, 2)(3);
    console.log(result2); // Output: 6
  }, []);
  return (
    <>
      <h2>看console.log输出</h2>
    </>
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
