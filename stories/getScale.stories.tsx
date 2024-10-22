import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { getScale } from "../src";
import ShowDocs from "./utl/ShowDocs";
const App = () => {
  const [scale, setScale] = useState(getScale());

  useEffect(() => {
    // Update the scale when the window is resized
    const handleResize = () => {
      setScale(getScale());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Scale Calculator</h1>
      <p>Current window width: {document.documentElement.clientWidth}px</p>
      <p>Base width: 1920px</p>
      <p>Calculated Scale: {scale}</p>
    </div>
  );
};
const Page = App;
const meta: Meta<typeof getScale> = {
  title: "base/getScale",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof getScale>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/getScale.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
