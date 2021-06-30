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
        actveTarget: "",
        targets: [],
    };

    changeRight = (newActiveComponent) => {
        this.setState({
            rightActiveComponent: newActiveComponent,
        });
    };

    addNewTarget = (nawTarget) => {
        this.setState({
            //добавляет id самостоятельно
            //получает все поля кроме id
            //targets
        })
    }

    handleChangeRight = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
            rightActiveComponent: event.target.value,
        });
    }

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
                            <TargetPlace funcChangeRight={this.changeRight} />
                        </div>
                    </div>
                    <div className="slider">||</div>
                    <div className="right-zone">
                        <div className="scroll-bar">
                            {this.state.rightActiveComponent ===
                                "Assistant" && (
                                <Assistant funcChangeRight={this.changeRight} />
                            )}
                            {this.state.rightActiveComponent ===
                                "NewTargetForm" && (
                                <NewTargetForm
                                    funcChangeRight={this.changeRight}
                                />
                            )}
                            {this.state.rightActiveComponent ===
                                "TargetInfo" && (
                                <TargetInfo
                                    funcChangeRight={this.changeRight}
                                />
                            )}
                            {this.state.rightActiveComponent ===
                                "PaymentSchedule" && (
                                <PaymentSchedule
                                    funcChangeRight={this.changeRight}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
