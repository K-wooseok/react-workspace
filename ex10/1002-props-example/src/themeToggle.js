function ThemeToggle({ toggleTheme, theme }) {
  return <button onClick={toggleTheme}>{theme}</button>;
}

export default ThemeToggle;
