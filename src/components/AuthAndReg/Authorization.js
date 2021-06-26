import React, { Component } from "react";
import "./AuthAndReg.css";
import Panda from "./..//image/Panda.png";

export default class Authorization extends Component {
  state = {
    login: "",
    password: "",
  };

  loginInputAuthorization = (event) => {
    this.setState({ login: event.target.value });
  };
  passInputAuthorization = (event) => {
    this.setState({ password: event.target.value });
  };

  //   handleSubmitLogin = (evt) => {
  //     const { login, password } = this.state;
  //     evt.preventDefault();
  //     authUser(login, password)
  //       .then((resBody) => {
  //       })
  //       .catch((err) => console.log(`Ошибка: ${err}`));
  //   };

  render() {
    return (
      <div className="auth-registration-main-box">
        <img className="image-auth-panda" src={Panda} alt="panda" />
        <div className="auth-window">
          <form
            className="authorization-user"
            onSubmit={this.handleSubmitLogin}
          >
            <h2 className="auth-title">Авторизация</h2>
            <div className="auth-login">
              <label>
                <input
                  className="auth-and-reg-input"
                  onChange={this.loginInputAuthorization}
                  type="text"
                  value={this.state.login}
                  placeholder="User"
                  required
                />
              </label>
            </div>

            <div className="auth-pass">
              <label>
                <input
                  className="auth-and-reg-input"
                  onChange={this.passInputAuthorization}
                  value={this.state.password}
                  placeholder="Password"
                  type="password"
                  required
                />
              </label>
            </div>
            <div className="box-btn-login">
              <button className="btn-registration-login" type="submit">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
