import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { asyncPool } from "../src";
import ShowDocs from "./utl/ShowDocs";
const Page = () => {
  useEffect(() => {
    // 模拟异步任务函数
    function asyncTask(item) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Task ${item} completed`);
          resolve(item);
        }, 1000); // 模拟任务执行时间 1 秒
      });
    }

    // 可迭代的任务列表
    const tasks = [1, 2, 3, 4, 5];

    // 定义迭代器函数
    async function iteratorFn(item) {
      return asyncTask(item);
    }

    // 使用 asyncPool 控制并发数为 2
    async function runTasks() {
      const result = await asyncPool(2, tasks, iteratorFn);
      console.log("All tasks completed:", result);
    }

    runTasks();
  }, []);
  return (
    <>
      <h2>看console.log输出</h2>
    </>
  );
};
const meta: Meta<typeof asyncPool> = {
  title: "base/asyncPool",
  component: Page,
};

export default meta;
type Story = StoryObj<typeof asyncPool>;

export const Doc: Story = {
  render: () => <ShowDocs md={"doc/asyncPool.md"} />,
};
export const Demo: Story = {
  render: () => <Page />,
};
