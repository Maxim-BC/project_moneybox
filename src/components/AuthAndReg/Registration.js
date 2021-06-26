import React, { Component } from "react";
import "./AuthAndReg.css";
import Panda from "./..//image/Panda.png";

export default class Registration extends Component {
  state = {
    name: "",
    email: "",
    birthdate: "",
    typeInputBirthdate: "text",
    password: "",
    replayPassword: "",
    messageError: "",
  };

  handleNameInputChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmailInputChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassInputChange = (event) => {
    this.setState({ password: event.target.value });
    if (event.target.value.length < 5) {
      this.setState({ messageError: "Короткий пароль!" });
    } else this.setState({ messageError: "" });
  };
  handleReplayPassInputChange = (event) => {
    this.setState({ replayPassword: event.target.value });
    if (event.target.value === this.state.password) {
      this.setState({ messageError: "" });
    } else this.setState({ messageError: "Пароли не совпадают!" });
  };
  handleInputBirthdate = (event) => {
    this.setState({
      birthdate: event.target.value,
    });
  };
  handleSave = () => {
    localStorage.setItem("savedState", JSON.stringify(this.state));
  };

  focusInputBirthdate = () => {
    this.setState({ typeInputBirthdate: "Date" });
  };

  blurInputBirthdate = () => {
    this.setState({ typeInputBirthdate: "text" });
  };
  handleSubmit = (evt) => {
    const { name, email, birthdate, password, replayPassword, messageError } =
      this.state;
    evt.preventDefault();
    if (replayPassword !== password) {
      this.setState({ messageError: "Пароли не совпадают!" });
    }
    if (password.length < 5) {
      this.setState({ messageError: "Короткий пароль!" });
    }
    if (name.length < 3) {
      this.setState({ messageError: "Короткое имя!" });
    }
    // if (messageError === "") {
    //   registerUser(name, password, email, birthdate)
    //     .then((resBody) =>
    //       this.setState({
    //         messageBtnNext: resBody.message,
    //       })
    //     )
    //     .catch((err) => console.log(`Ошибка: ${err}`));
    // } else {
    //   this.setState({
    //     showErrors: true,
    //   });
    // }
  };

  render() {
    return (
      <div className="auth-registration-main-box">
        <img className="image-registration-panda" src={Panda} alt="panda" />
        <div className="reg-window">
          <form
            className="registration-user"
            onSubmit={this.handleSubmit}
            onChange={this.handleSave}
          >
            <h2 className="auth-title">Регистрация</h2>
            <div className="box-registration-input">
              <label>
                <input
                  className="auth-and-reg-input"
                  onChange={this.handleNameInputChange}
                  type="text"
                  value={this.state.name}
                  required
                  placeholder="Имя"
                />
              </label>
            </div>
            <div className="box-registration-input">
              <label>
                <input
                  className="auth-and-reg-input"
                  onChange={this.handleEmailInputChange}
                  type="email"
                  value={this.state.email}
                  placeholder="E-mail"
                  required
                />
              </label>
            </div>

            <div className="box-registration-input">
              <label>
                <input
                  className="auth-and-reg-input"
                  onChange={this.handleInputBirthdate}
                  value={this.state.birthdate}
                  onFocus={this.focusInputBirthdate}
                  onBlur={this.blurInputBirthdate}
                  placeholder="Дата рождения"
                  type={this.state.typeInputBirthdate}
                  required
                />
              </label>
            </div>
            <div className="box-registration-input">
              <label>
                <input
                  className="auth-and-reg-input"
                  onChange={this.handlePassInputChange}
                  value={this.state.password}
                  type="password"
                  placeholder="Пароль"
                  required
                />
              </label>
            </div>
            <div className="box-registration-input">
              <label>
                <input
                  className="auth-and-reg-input"
                  onChange={this.handleReplayPassInputChange}
                  value={this.state.replayPassword}
                  type="password"
                  placeholder="Подтверждение пароля"
                  required
                />
              </label>
            </div>
            <p className="box-message-error">{this.state.messageError}</p>
            <div className="box-btn-registration">
              <button className="btn-registration-login" type="submit">
                Зарегестрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
