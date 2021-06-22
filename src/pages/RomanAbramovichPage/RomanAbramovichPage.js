import React, { Component } from "react";
import "./RomanAbramovichPage.css";
import { Link } from "react-router-dom";

class RomanAbramovichPage extends Component {
  state = {};
  render() {
    return (
      <div className="roman-abramovich-page">
        <div>
          <h1>Роман Абромович</h1>
        </div>
        <Link to={`/`}>Back</Link>
      </div>
    );
  }
}

export default RomanAbramovichPage;
