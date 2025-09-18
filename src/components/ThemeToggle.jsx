import { useApp } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useApp();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}