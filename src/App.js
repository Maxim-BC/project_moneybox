import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Authorization from "./components/Authorization";
import Workplace from "./components/Workplace";
import Registration from "./components/Registration";


class App extends React.Component {
  state = {
    profile: "",
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <Workplace />
        </Route>
        <Route path="/reg">
          <Registration />
        </Route>
        <Route path="/auth">
          <Authorization />
        </Route>
      </div>
    );
  }
}

export default App;
