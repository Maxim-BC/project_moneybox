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
        targets: localStorage.getItem("targets") === null ? [] : JSON.parse(localStorage.getItem("targets")),
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

    getMaxTargetID = (targets) => {
        let ids = [];
        targets.forEach((element) => {
            ids.push(element.id);
        });
        return targets.length === 0 ? 1 : Math.max(...ids);
    };

    addNewTarget = (newTarget) => {
        const oldTargets = this.state.targets;
        const newTargetWithID = {
            id: this.getMaxTargetID(oldTargets) + 1,
            ...newTarget,
        };
        this.setState({
            targets: [newTargetWithID, ...oldTargets],
        });
    };

    delTargetByID = (delTargetID) => {
        const oldTargets = this.state.targets;
        const newTargets = oldTargets.filter(
            (target) => target.id !== delTargetID
        );
        this.setState({
            targets: newTargets,
        });
    };

    handleChangeRight = (event) => {
        event.preventDefault();
        this.setState({
            rightActiveComponent: event.target.value,
        });
    };

    componentDidUpdate(prevState) {
        if (this.state.targets !== prevState.targets) {
            localStorage.setItem('targets', JSON.stringify(this.state.targets))
        }        
    }


    
    

    render() {
        return (
            <>
                <div className="main-container">
                    <div className="left-zone">
                        <div className="scroll-bar">
                            <TargetPlace
                                funcChangeRight={this.changeRight}
                                funcChangeActiveTarget={this.changeActiveTarget}
                                targets={this.state.targets}
                                targetCount={this.state.targets.length}
                            />
                        </div>
                    </div>
                    <div className="slider">||</div>
                    <div className="right-zone">
                        <div className="scroll-bar">
                            {this.state.rightActiveComponent ===
                                "Assistant" && (
                                <Assistant
                                    funcChangeRight={this.changeRight}
                                    targetCount={this.state.targets.length}
                                />
                            )}
                            {this.state.rightActiveComponent ===
                                "NewTargetForm" && (
                                <NewTargetForm
                                    funcChangeRight={this.changeRight}
                                    funcAddNewTarget={this.addNewTarget}
                                />
                            )}
                            {this.state.rightActiveComponent ===
                                "TargetInfo" && (
                                <TargetInfo
                                    funcChangeRight={this.changeRight}
                                    activeTarget={this.state.activeTarget}
                                    funcDelTargetByID={this.delTargetByID}
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
