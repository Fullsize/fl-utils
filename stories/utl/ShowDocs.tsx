import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./index.css";
const inlineCodeStyle = {
  display: "inline-block", // 设置为块级元素
  whiteSpace: "nowrap", // 防止换行
  backgroundColor: "#f5f5f5", // 背景色
  padding: "2px 4px", // 内边距
  borderRadius: "4px", // 圆角
  fontFamily: "monospace", // 使用等宽字体
};

const ShowDocs = (props: any) => {
  const [markdown, setMarkdown] = useState("");
  const renderers = {
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      console.log(20, children);
      return inline ? (
        <code style={inlineCodeStyle} {...props}>
          {children}
        </code> // 应用样式
      ) : (
        <SyntaxHighlighter
          style={okaidia} // 选择主题
          language={match ? match[1] : ""}
          PreTag="span"
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    },
  };
  useEffect(() => {
    fetch(props.md)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return <Markdown>{markdown}</Markdown>;
  return <>123</>;
};

export default ShowDocs;
