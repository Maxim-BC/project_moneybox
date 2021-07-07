import React, { Component } from "react";

export default class TargetInfo extends Component {
    state = { target: this.props.activeTarget };

    render() {
        return (
            <div>
                <div className="name-heading">
                    <h2>TargetInfo</h2>
                </div>
                <div className="general-info">
                    <p>Дата открытия вклада:</p>
                    <p>Дата закрытия вклада:</p>
                    <p>Процентная ставка:</p>
                    <p>Срок вклада (мес):</p>
                    <p>Ежемесячный платёж:</p>
                    <p>Необходимая сумма:</p>
                    <p>Доходность:</p>
                </div>
                <div className="down-page">
                    <div>
                        <button className="orange-btn">График платежей</button>
                    </div>
                    <div>
                        <button className="red-btn">Удалить цель</button>
                    </div>
                </div>
                id {this.props.activeTarget.id} <br />
                targetName {this.props.activeTarget.targetName} <br />
                sum {this.props.activeTarget.sum} <br />
                percent {this.props.activeTarget.percent} <br />
                period {this.props.activeTarget.period} <br />
                payment: {this.props.activeTarget.payment} <br />
                profit: {this.props.activeTarget.profit} <br />
                startDate {this.props.activeTarget.startDate} <br />
            </div>
        );
    }
}
