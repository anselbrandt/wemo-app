import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./Main";
import { ThemeColors } from "./ThemeColors";
import { About } from "./About";
import { Error } from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/colors" exact component={ThemeColors} />
        <Route path="/about" exact component={About} />
        <Route path="/" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
