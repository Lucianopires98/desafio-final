import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Ods from "./components/Ods";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalstyles";
import { lightTheme, darkTheme } from "./components/theme";
import * as S from "./components/Header/style.js";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <S.ThemeIcon onClick={themeToggler} />
        <Header />
        <Routes>
          <Route path="/ods" element={<Ods />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<About />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
