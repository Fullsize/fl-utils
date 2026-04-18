import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./index.css";

const inlineCodeStyle = {
  display: "inline-block",
  whiteSpace: "nowrap",
  backgroundColor: "#f5f5f5",
  padding: "2px 4px",
  borderRadius: "4px",
  fontFamily: "monospace",
};

const ShowDocs = (props: any) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(props.md)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const isInline = !match;
          return isInline ? (
            <code style={inlineCodeStyle} {...props}>
              {children}
            </code>
          ) : (
            <SyntaxHighlighter
              style={okaidia}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default ShowDocs;
