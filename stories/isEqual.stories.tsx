import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { isEqual } from "../src";
import ShowDocs from "./utl/ShowDocs";
const Page = () => {
  useEffect(() => {
    // 示例对象
    const obj1 = {
      name: "Alice",
      age: 30,
      address: { city: "New York", zip: 10001 },
    };
    const obj2 = {
      name: "Alice",
      age: 30,
      address: { city: "New York", zip: 10001 },
    };
    const obj3 = { name: "Bob", age: 25 };

    // 比较两个对象
    const result1 = isEqual(obj1, obj2); // true，obj1 和 obj2 的内容相等
    const result2 = isEqual(obj1, obj3); // false，obj1 和 obj3 的内容不相等

    console.log(result1); // 输出 true
    console.log(result2); // 输出 false
  }, []);
  return (
    <>
      <h2>看console.log输出</h2>
    </>
  );
};
const meta: Meta<typeof isEqual> = {
  title: "base/isEqual",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof isEqual>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/isEqual.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
