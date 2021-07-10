import React, { Component } from "react";
import "./Assistant.css";
import Panda from "./image/Panda.png";
import "./TargetList";
export default class Assistant extends Component {
  num() {
    if (this.props.targetCount === 0) {
      return (
        <div>
          <div className="oblako">
            <p className="oblako-text">
              <b>
                Привет! я подскажу тебе как пользоваться этим приложением. Для
                создания новой цели кликни кнопку!
              </b>
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
    } else {
      return (
        <div>
          <div className="oblako">
            <p className="oblako-text">
              <b>
                Количество целей {this.props.targetCount}.<br></br> Для того
                чтобы посмотреть информацию о вкладе необходимы кликнуть на
                цель.
              </b>
            </p>
          </div>
          <div>
            <img className="assistant-panda" src={Panda} alt="panda" />
          </div>
        </div>
      );
    }
  }

  render() {
    return <div className="colorAssist">{this.num()}</div>;
  }
}
