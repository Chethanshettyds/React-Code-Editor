import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import Terminal from "./components/Terminal";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

const App = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <div className="editor-container">
        <CodeEditor code={code} setCode={setCode} />
        <Preview code={code} />
      </div>
      <Terminal />
    </div>
  );
};

export default App;
