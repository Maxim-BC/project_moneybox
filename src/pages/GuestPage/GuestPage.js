import React, { Component } from "react";
import "./GuestPage.css";
import { Link } from "react-router-dom";

class GuestPage extends Component {
  state = {};
  render() {
    return (
      <div className="guest-page">
        <div>
          <h1>Гость</h1>
        </div>
        <Link to={`/`}>Back</Link>
      </div>
    );
  }
}

export default GuestPage;
