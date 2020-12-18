import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { ThemeColors } from "./ThemeColors";
import { About } from "./About";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/colors" exact component={ThemeColors} />
      <Route path="/about" exact component={About} />
    </BrowserRouter>
  );
}

export default App;
