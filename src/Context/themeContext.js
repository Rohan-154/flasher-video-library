const { createContext, useContext, useState } = require("react");
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  const themeToggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  localStorage.setItem("theme", JSON.stringify(theme));
  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {" "}
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };
