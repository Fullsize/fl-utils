import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { deepMerge } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App: React.FC = () => {
  const [object1, setObject1] = useState<string>(
    '{"a": 1, "b": {"x": 10, "y": 20}}'
  );
  const [object2, setObject2] = useState<string>(
    '{"b": {"y": 30, "z": 40}, "c": 3}'
  );
  const [mergedObject, setMergedObject] = useState<any>({});

  const handleMerge = () => {
    try {
      const obj1 = JSON.parse(object1);
      const obj2 = JSON.parse(object2);
      const result = deepMerge(obj1, obj2);
      setMergedObject(result);
    } catch (error) {
      alert("Invalid JSON input. Please enter valid JSON objects.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Deep Merge Example</h2>
      <div>
        <textarea
          rows={5}
          style={{ width: "100%", marginBottom: "10px" }}
          placeholder="Enter first JSON object"
          value={object1}
          onChange={(e) => setObject1(e.target.value)}
        />
        <textarea
          rows={5}
          style={{ width: "100%", marginBottom: "10px" }}
          placeholder="Enter second JSON object"
          value={object2}
          onChange={(e) => setObject2(e.target.value)}
        />
        <button onClick={handleMerge}>Merge Objects</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Merged Object:</h3>
        <pre>{JSON.stringify(mergedObject, null, 2)}</pre>
      </div>
    </div>
  );
};
const meta: Meta<typeof deepMerge> = {
  title: "base/deepMerge",
  component: App,
};

export default meta;
type Story = StoryObj<typeof deepMerge>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/deepMerge.md"} />,
};
export const Demo: Story = {
  render: () => <App />,
};
