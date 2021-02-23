import { createContext } from "react";

const themes = {
  light: {
    foreground: "#ffffee",
    background: "#220000",
  },
  dark: {
    foreground: "#002200",
    background: "#ffffee",
  },
};

//const ThemeContext = React.createContext(themes.light);
const ThemeContext = createContext(null);

export { themes };
export default ThemeContext;
