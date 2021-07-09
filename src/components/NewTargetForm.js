import React, { Component } from "react";
import "./NewTargetForm.css";
import { Link } from "react-router-dom";

class NewTargetForm extends Component {
    state = {
        targetName: "test",
        sum: "",
        percent: "",
        period: "",
        payment: "",
        profit: "",
        startDate: "",
        calculateBtnActive: false,
        saveBtnActive: false,
    };

    //Отслеживание изменений в инпутах (4 функции) и сохранение их в localStorage:
    handleChangeTargetName = (event) => {
        this.setState({
            targetName: event.target.value,
        });
        localStorage.setItem("savedValueTargetName", event.target.value);
    };

    handleChangeSum = (event) => {
        this.setState({
            sum: event.target.value,
        });
        localStorage.setItem("savedValueSum", event.target.value);
    };

    handleChangePercent = (event) => {
        this.setState({
            percent: event.target.value,
        });
        localStorage.setItem("savedValuePercent", event.target.value);
    };

    handleChangePeriod = (event) => {
        this.setState({
            period: event.target.value,
        });
        localStorage.setItem("savedValuePeriod", event.target.value);
    };

    handleChangeStartDate = (event) => {
        this.setState({
            startDate: event.target.value,
        });
        localStorage.setItem("savedValueStartDate", event.target.value);
    };

    //Расчёт параметров заданной финаносовой цели:
    countTarget = (e) => {
        const { sum, percent, period } = this.state;
        e.preventDefault();
        let monthPayment = sum / period;

        let totalProfit = (sum * percent * period) / 12 / 100;
        this.setState({
            payment: monthPayment.toFixed(2),
            profit: totalProfit.toFixed(2),
        });
    };

    render() {
        return (
            <div className="new-target-form-contaner">
                <div className="new-target">
                    <form onSubmit={this.countTarget}>
                        <h2>Новая цель</h2>
                        <label className="target-form-input">
                            <input
                                type="text"
                                value={this.state.targetName}
                                onChange={this.handleChangeTargetName}
                                placeholder="Наименование цели"
                                required
                            />
                        </label>
                        <label className="target-form-input">
                            <input
                                type="number"
                                value={this.state.sum}
                                onChange={this.handleChangeSum}
                                placeholder="Сумма для накопления, руб."
                                required
                            />
                        </label>
                        <div className="target-form-input-numbres">
                            <label className="target-form-input left-number">
                                <input
                                    type="number"
                                    min="0.1"
                                    step="0.01"
                                    value={this.state.percent}
                                    onChange={this.handleChangePercent}
                                    placeholder="Ставка, %"
                                    required
                                />
                            </label>
                            <label className="target-form-input">
                                <input
                                    type="number"
                                    min="1"
                                    step="1"
                                    value={this.state.period}
                                    onChange={this.handleChangePeriod}
                                    placeholder="Срок, мес."
                                    required
                                />
                            </label>
                        </div>
                        <label className="target-form-input">
                            <input
                                type="date"
                                value={this.state.startDate}
                                onChange={this.handleChangeStartDate}
                            />
                        </label>
                        <button className="new-target-btn new-target-btn-disactive">
                            Рассчитать
                        </button>
                    </form>
                    <div className="results">
                        <p className="payment">Ежемесячный платёж</p>
                        <p className="paymentResult">{this.state.payment}</p>
                        <p className="profit">Доходность вклада</p>
                        <p className="profitResult">{this.state.profit}</p>
                    </div>
                    <button
                        className="new-target-btn new-target-btn-disactive"
                        onClick={() =>
                            this.props.funcAddNewTarget({
                                targetName: this.state.targetName,
                                sum: this.state.sum,
                                percent: this.state.percent,
                                period: this.state.period,
                                payment: this.state.payment,
                                profit: this.state.profit,
                                startDate: this.state.startDate,
                            })
                            
                        }
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        );
    }
}

export default NewTargetForm;
