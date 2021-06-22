import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import GuestPage from "./pages/GuestPage/GuestPage";
import HomelessVasyaPage from "./pages/HomelessVasyaPage/HomelessVasyaPage";
import MaximPage from "./pages/MaximPage/MaximPage";
import AndreyPage from "./pages/AndreyPage/AndreyPage";
import RomanAbramovichPage from "./pages/RomanAbramovichPage/RomanAbramovichPage";

class App extends React.Component {
  state = {
    profile: "",
  };

  render() {
    return (
      <div className="app">
        <header className="title">
          <h1>Копилка</h1>
        </header>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/guest/">
          <GuestPage />
        </Route>
        <Route path="/user/1">
          <HomelessVasyaPage />
        </Route>
        <Route path="/user/2">
          <MaximPage />
        </Route>
        <Route path="/user/3">
          <AndreyPage />
        </Route>
        <Route path="/user/4">
          <RomanAbramovichPage />
        </Route>
      </div>
    );
  }
}

export default App;
