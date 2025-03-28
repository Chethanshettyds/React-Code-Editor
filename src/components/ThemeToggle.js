import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
