import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../../contexts/ThemeContexts";

const ChangeThemeColors = () => {
  const theme = useContext(ThemeContext);

  const [currentTheme, setCurrentTheme] = useState(theme.light);

  useEffect(() => {
    console.log("current theme is: ", currentTheme);
    console.log("theme is: ", theme);
  }, []);

  const toggleTheme = () => {
    console.log("theme is:", currentTheme);
    setCurrentTheme(
      currentTheme.background === theme.light.background
        ? theme.dark
        : theme.light
    );
    console.log("changed theme to ", currentTheme);
  };

  return (
    <button
      style={{
        background: currentTheme.background,
        color: currentTheme.foreground,
      }}
      onClick={toggleTheme}
    >
      {" "}
      Change Theme{" "}
    </button>
  );
};

export default ChangeThemeColors;
