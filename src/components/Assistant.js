import React, { Component } from "react";
import "./Assistant.css";
import Panda from "./image/Panda.png";
import forCloud from "./image/for_cloud.png";
import "./TargetList";
export default class Assistant extends Component {
    render() {
        return (
            <div className="assistant-place">
                <div className="cloud">
                    <p>
                        {this.props.targetCount === 0
                            ? "Привет! Я подскажу тебе как пользоваться этим приложением. Для создания новой цели кликни кнопку"
                            : `Количество созданных целей: ${this.props.targetCount}, выбери одну из них для просмотра информации о вкладе.`}
                    </p>
                    <div onClick={() => this.props.funcChangeRight("NewTargetForm")} className="plus-assistant">
                        +
                    </div>
                </div>
                          <div className="for-cloud"><img className="" src={forCloud} alt="" /></div>
                <div>
                    <img className="assistant-panda" src={Panda} alt="panda" />
                </div>
            </div>
        );
    }
}
