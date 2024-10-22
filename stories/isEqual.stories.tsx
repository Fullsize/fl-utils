import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { isEqual } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App = () => {
  const [obj1, setObj1] = useState({ name: "Alice", age: 25 });
  const [obj2, setObj2] = useState({ name: "Alice", age: 25 });
  const [areEqual, setAreEqual] = useState(false);

  const compareObjects = () => {
    setAreEqual(isEqual(obj1, obj2));
  };

  return (
    <div>
      <h1>Object Comparison in React</h1>

      <div>
        <h3>Object 1:</h3>
        <pre>{JSON.stringify(obj1, null, 2)}</pre>
      </div>

      <div>
        <h3>Object 2:</h3>
        <pre>{JSON.stringify(obj2, null, 2)}</pre>
      </div>

      <button onClick={compareObjects}>Compare Objects</button>

      <h2>{areEqual ? "Objects are equal" : "Objects are not equal"}</h2>

      <button onClick={() => setObj1({ name: "Alice", age: 25 })}>
        Set Obj1 to Alice
      </button>
      <button onClick={() => setObj2({ name: "Bob", age: 30 })}>
        Set Obj2 to Bob
      </button>
    </div>
  );
};
const Page = App;
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
