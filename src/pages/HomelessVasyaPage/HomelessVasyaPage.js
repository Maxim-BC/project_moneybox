import React, { Component } from "react";
import "./HomelessVasyaPage.css";
import { Link } from "react-router-dom";

class HomelessVasyaPage extends Component {
  state = {};
  render() {
    return (
      <div className="homeless-vasya-page">
        <div>
          <h1>Бомж Василий</h1>
        </div>
        <Link to={`/`}>Back</Link>
      </div>
    );
  }
}

export default HomelessVasyaPage;
