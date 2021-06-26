import React, { Component } from "react";
import "./GuestPage.css";
import { Link } from "react-router-dom";

class NewTargetForm extends Component {
  state = {
    name: "",
    target: "",
    percent: "",
    period: "",
    payment: "",
    profit: "",
  };

  //Отслеживание изменений в инпутах (4 функции) и сохранение их в localStorage:
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
    localStorage.setItem("savedValueName", event.target.value);
  };

  handleChangeTarget = (event) => {
    this.setState({
      target: event.target.value,
    });
    localStorage.setItem("savedValueTarget", event.target.value);
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

  //Расчёт параметров заданной финаносовой цели:
  countTarget = (e) => {
    const { target, percent, period } = this.state;
    e.preventDefault();
    let monthPayment = target / period;

    let totalProfit = (target * percent * period) / 12 / 100;
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
          <label className="name">
            Наименование цели
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
              required
            />
          </label>
          <br />
          <label className="target">
            Сумма для накопления
            <br />
            <input
              type="number"
              value={this.state.target}
              onChange={this.handleChangeTarget}
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
          <button className="countButton">Рассчитать</button>
        </form>
        <div className="results">
          <p className="payment">Ежемесячный платёж</p>
          <p className="paymentResult">{this.state.payment}</p>
          <p className="profit">Доходность вклада</p>
          <p className="profitResult">{this.state.profit}</p>
        </div>
        <button className="saveButton">Сохранить</button>
        <Link to={`/`}>Back</Link>
      </div>
    );
  }
}

export default NewTargetForm;
