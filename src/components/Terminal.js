import React, { useEffect, useRef } from "react";
import { Terminal as XTerm } from "xterm";
import "xterm/css/xterm.css";

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new XTerm();
    terminal.open(terminalRef.current);
    terminal.writeln("Welcome to the terminal!");

    return () => terminal.dispose();
  }, []);

  return <div ref={terminalRef} style={{ height: "200px", backgroundColor: "black" }} />;
};

export default Terminal;
