import React, { Component } from "react";
import "./Workplace.css";
import TargetPlace from "./TargetPlace";
import Assistant from "./Assistant";
import NewTargetForm from "./NewTargetForm";
import TargetInfo from "./TargetInfo";
import PaymentSchedule from "./PaymentSchedule";

export default class Workplace extends Component {
  state = {
    rightActiveComponent: "Assistant",
    activeTarget: "",
    targets: [
      {
        id: 1,
        targetName: "Автомобиль",
        sum: 3000000,
        percent: 0.01,
        period: 18,
        payment: 8333.33,
        profit: 1231,
        startDate: "2021-06-30",
      },
      {
        id: 2,
        targetName: "Дача",
        sum: 100000,
        percent: 0.01,
        period: 12,
        payment: 8333.33,
        profit: 1231,
        startDate: "2021-06-30",
      },
      {
        id: 3,
        targetName: "Вилла",
        sum: 100000,
        percent: 0.01,
        period: 12,
        payment: 8333.33,
        profit: 1231,
        startDate: "2021-06-30",
      },
      {
        id: 4,
        targetName: "Полет в космос",
        sum: 100000,
        percent: 0.01,
        period: 12,
        payment: 8333.33,
        profit: 1231,
        startDate: "2021-06-30",
      },
      {
        id: 5,
        targetName: "Купить Google",
        sum: 100000,
        percent: 0.01,
        period: 12,
        payment: 8333.33,
        profit: 1231,
        startDate: "2021-06-30",
      },
      {
        id: 6,
        targetName: "Смартфон",
        sum: 100000,
        percent: 0.01,
        period: 12,
        payment: 8333.33,
        profit: 1231,
        startDate: "2021-06-30",
      },
      {
        id: 7,
        targetName: "Смартфон",
        sum: 100000,
        percent: 0.01,
        period: 12,
        payment: 8333.33,
        profit: 1231,
        startDate: "2021-06-30",
      },
    ],
  };

  changeRight = (newActiveComponent) => {
    this.setState({
      rightActiveComponent: newActiveComponent,
    });
  };

  changeActiveTarget = (newActiveTarget) => {
    this.setState({
      activeTarget: newActiveTarget,
    });
  };

  addNewTarget = (newTarget) => {
    this.setState({
      targets: newTarget,
    });
  };

  handleChangeRight = (event) => {
    event.preventDefault();
    this.setState({
      rightActiveComponent: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <select onChange={this.handleChangeRight}>
            <option value="Assistant">Assistant</option>
            <option value="NewTargetForm">NewTargetForm</option>
            <option value="TargetInfo">TargetInfo</option>
            <option value="PaymentSchedule">PaymentSchedule</option>
          </select>
        </div>
        <br />
        <div className="main-container">
          <div className="left-zone">
            <div className="scroll-bar">
              <TargetPlace
                funcChangeRight={this.changeRight}
                funcChangeActiveTarget={this.changeActiveTarget}
                targets={this.state.targets}
              />
            </div>
          </div>
          <div className="slider">||</div>
          <div className="right-zone">
            <div className="scroll-bar">
              {this.state.rightActiveComponent === "Assistant" && (
                <Assistant
                  funcChangeRight={this.changeRight}
                  targetCount={this.state.targets.length}
                />
              )}
              {this.state.rightActiveComponent === "NewTargetForm" && (
                <NewTargetForm
                  funcChangeRight={this.changeRight}
                  funcDddNewTarget={this.addNewTarget}
                />
              )}
              {this.state.rightActiveComponent === "TargetInfo" && (
                <TargetInfo
                  funcChangeRight={this.changeRight}
                  activeTarget={this.state.activeTarget}
                />
              )}
              {this.state.rightActiveComponent === "PaymentSchedule" && (
                <PaymentSchedule funcChangeRight={this.changeRight} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
