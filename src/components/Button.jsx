// components/button.jsx: Será el botón que hará que cambie el estado de light a dark
import { useState } from "react";
import { useTheme } from "../themes/ThemeContext";

export default function Button() {
  const { theme, changeTheme } = useTheme();

  return (
    <button onClick={changeTheme}>
      Cambiar a {theme === "light" ? "dark" : "light"}
    </button>
  );
}
