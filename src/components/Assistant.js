import React, { Component } from "react";
import "./Assistant.css";
import Panda from "./image/Panda.png";
import "./TargetList";
export default class Assistant extends Component {


  render() {
    return (
      
      <div>
       
        <div className="oblako">
          <p className="oblako-text">
            Привет! я подскажу тебе как пользоваться этим приложением. Для
            создания новой цели кликни кнопку
          </p>

          <div
            onClick={() => this.props.funcChangeRight("NewTargetForm")}
            className="plus-assistant"
          >
            +
          </div>
        </div>
        <img className="assistant-panda" src={Panda} alt="panda" />
      </div>
    );
  }
}