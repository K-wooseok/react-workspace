import { useState } from "react";
import Content from "./context";
import ThemeToggle from "./themeToggle";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <h1>Props-based Theme Example</h1>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Content theme={theme} />
    </div>
  );
}
