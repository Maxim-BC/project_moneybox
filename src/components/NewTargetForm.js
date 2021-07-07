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
          <label>
            <input
              className="targetName"
              placeholder="Наименование цели"
              type="text"
              value={this.state.targetName}
              onChange={this.handleChangeTargetName}
              required
            />
          </label>
          <br />
          <label>
            <input
              className="sum"
              placeholder="Сумма для накопления"
              type="number"
              value={this.state.sum}
              onChange={this.handleChangeSum}
              required
            />
          </label>
          <div className="inputsPercentPeriod">
            <label>
              <input
                className="percent"
                placeholder="Процентная ставка"
                type="number"
                value={this.state.percent}
                onChange={this.handleChangePercent}
                required
              />
            </label>
            <br />
            <label>
              <input
                className="period"
                placeholder="Период накопления в месяцах"
                type="number"
                min="1"
                step="1"
                value={this.state.period}
                onChange={this.handleChangePeriod}
                required
              />
            </label>
          </div>
          <label>
            <input
              className="startDate"
              placeholder="Дата начала накоплений"
              type="date"
              value={this.state.startDate}
              onChange={this.handleChangeStartDate}
            />
          </label>
          <br />
          <button className="countButton">Рассчитать</button>
        </form>
        <div className="results">
          <p className="payment">Ежемесячный платёж</p>
          <p className="paymentResult">{this.state.payment}</p>
          <p className="profit">Доходность вклада</p>
          <p className="profitResult">{this.state.profit}</p>
        </div>
        <button className="saveButton">Сохранить</button>
        <br />
        <Link to={`/`}>Back</Link>
      </div>
    );
  }
}

export default NewTargetForm;
