import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your JavaScript code here");

  return (
    <CodeMirror
      value={code}
      height="300px"
      theme={oneDark}
      extensions={[javascript()]}
      onChange={(value) => setCode(value)}
    />
  );
};

export default CodeEditor;
