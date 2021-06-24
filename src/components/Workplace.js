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
    };

    render() {
        return (
            <>Это WorkPlace <br/>
                <div className="main-container">
                    <div className="left-zone">
                        <TargetPlace />
                    </div>
                    <div className="slider">||</div>
                    <div className="right-zone">
                        <Assistant />
                        <NewTargetForm />
                        <TargetInfo />
                        <PaymentSchedule />
                    </div>
                </div>
            </>
        );
    }
}
