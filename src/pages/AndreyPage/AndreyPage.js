import React, { Component } from "react";
import "./AndreyPage.css";
import { Link } from "react-router-dom";

class AndreyPage extends Component {
  state = {};
  render() {
    return (
      <div className="andrey-page">
        <div>
          <h1>Андрей</h1>
        </div>
        <Link to={`/`}>Back</Link>
      </div>
    );
  }
}

export default AndreyPage;
