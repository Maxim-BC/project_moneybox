import React, { Component } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

class MainPage extends Component {
  state = {
    profile: "",
  };
  changeProfile = (event) => {
    this.setState({ profile: event.target.value });
  };
  render() {
    return (
      <div className="main-page">
        <h1>Главное меню</h1>
        <label>
          Профиль:
          <select defaultValue="" onChange={this.changeProfile}>
            <option value="" disabled>
              Выберите профиль
            </option>
            <option value="guest">Гость</option>
            <option value="user/1">Бомж Василий</option>
            <option value="user/2">Максим</option>
            <option value="user/3">Андрей</option>
            <option value="user/4">Роман Абрамович</option>
          </select>
        </label>
        <div className="btn-next">
          <Link to={`/${this.state.profile}`} disabled={!this.state.profile}>
            Next
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
