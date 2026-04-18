import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { groupBy } from "../src";
import ShowDocs from "./utl/ShowDocs";

const GroupByDemo: React.FC = () => {
  const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 30 },
  ];

  const byAge = groupBy(users, "age");
  const byEvenOdd = groupBy([1, 2, 3, 4, 5, 6], (n) => (n % 2 === 0 ? "even" : "odd"));

  return (
    <div>
      <p>按年龄分组:</p>
      <pre>{JSON.stringify(byAge, null, 2)}</pre>
      <p>按奇偶分组:</p>
      <pre>{JSON.stringify(byEvenOdd, null, 2)}</pre>
    </div>
  );
};

const meta: Meta<typeof groupBy> = {
  title: "array/groupBy",
  component: GroupByDemo,
};

export default meta;
type Story = StoryObj<typeof groupBy>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/groupBy.md"} />,
};

export const Demo: Story = {
  render: () => <GroupByDemo />,
};
