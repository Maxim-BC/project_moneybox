import React, { Component } from "react";
import "./NewTargetForm.css";
import { Link } from "react-router-dom";

class NewTargetForm extends Component {
    state = {
        targetName: "",
        sum: "",
        percent: "",
        period: "",
        payment: "",
        profit: "",
        startDate: "",
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
            <div className="guest-page">
                <h5>Гость</h5>
                <form onSubmit={this.countTarget}>
                    <h1>Новая цель</h1>
                    <label className="targetName">
                        Наименование цели
                        <br />
                        <input
                            type="text"
                            value={this.state.targetName}
                            onChange={this.handleChangeTargetName}
                            required
                        />
                    </label>
                    <br />
                    <label className="sum">
                        Сумма для накопления
                        <br />
                        <input
                            type="number"
                            value={this.state.sum}
                            onChange={this.handleChangeSum}
                            required
                        />
                    </label>
                    <div className="inputsPercentPeriod">
                        <label className="percent">
                            Ставка
                            <br />
                            <input
                                type="number"
                                value={this.state.percent}
                                onChange={this.handleChangePercent}
                                required
                            />
                        </label>
                        <br />
                        <label className="period">
                            Срок
                            <br />
                            <input
                                type="number"
                                min="1"
                                step="1"
                                value={this.state.period}
                                onChange={this.handleChangePeriod}
                                required
                            />
                        </label>
                    </div>
                    <label className="startDate">
                        Дата начала накоплений
                        <br />
                        <input
                            type="date"
                            value={this.state.startDate}
                            onChange={this.handleChangeStartDate}
                        />
                    </label>
                    <button className="countButton">Рассчитать</button>
                </form>
                <div className="results">
                    <p className="payment">Ежемесячный платёж</p>
                    <p className="paymentResult">{this.state.payment}</p>
                    <p className="profit">Доходность вклада</p>
                    <p className="profitResult">{this.state.profit}</p>
                </div>
                <button className="saveButton" onClick={()=>this.props.funcAddNewTarget(this.state)}>Сохранить</button>
                <Link to={`/`}>Back</Link>
            </div>
        );
    }
}

export default NewTargetForm;
