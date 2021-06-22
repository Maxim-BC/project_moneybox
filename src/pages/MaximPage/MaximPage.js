import React, { Component } from "react";
import "./MaximPage.css";
import { Link } from "react-router-dom";

class MaximPage extends Component {
  state = {};
  render() {
    return (
      <div className="maxim-page">
        <div>
          <h1>Максим</h1>
        </div>
        <Link to={`/`}>Back</Link>
      </div>
    );
  }
}

export default MaximPage;
