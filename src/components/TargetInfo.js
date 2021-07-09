import React, { Component } from "react";

export default class TargetInfo extends Component {
    state = { target: this.props.activeTarget };

    render() {
        return (
            <div>
                <div className="name-heading">
                    <h2>{this.props.activeTarget.targetName}</h2>
                </div>
                <div className="general-info">
                    <p>
                        Дата открытия вклада:{" "}
                        {this.props.activeTarget.startDate}
                    </p>
                    <p>Дата закрытия вклада: {/* Вычислить  */}</p>
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
                        <button
                            className="red-btn"
                            onClick={() => {
                                this.props.funcDelTargetByID(this.props.activeTarget.id);
                                this.props.funcChangeRight('Assistant')
                            }}
                        >
                            Удалить цель
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
