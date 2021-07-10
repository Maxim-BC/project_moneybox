import React, { Component } from "react";

export default class TargetInfo extends Component {
    state = { target: this.props.activeTarget };

    nullName = () => {
        if (!this.props.activeTarget.targetName) {
            return "Ваша цель";
        } else {
            return this.props.activeTarget.targetName;
        }
    };

    render() {
        return (
            <div>
                <div className="name-heading">
                    <h2 className="name">{this.nullName()}</h2>
                </div>
                <div className="general-info">
                    <p>
                        Дата открытия вклада:{" "}
                        {this.props.activeTarget.startDate}
                    </p>
                    <p>Процентная ставка: {this.props.activeTarget.percent}</p>
                    <p>Срок вклада (мес): {this.props.activeTarget.period}</p>
                    <p>Ежемесячный платёж: {this.props.activeTarget.payment}</p>
                    <p>Необходимая сумма: {this.props.activeTarget.sum}</p>
                    <p>Доходность: {this.props.activeTarget.profit}</p>
                </div>
                <div className="down-page">
                    {/* <div>
                        <button className="orange-btn">График платежей</button>
                    </div> */}
                    <div>
                        <button className="red-btn">Удалить цель</button>
                    </div>
                </div>
            </div>
        );
    }
}
