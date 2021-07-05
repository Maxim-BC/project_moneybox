import React, { Component } from "react";
import "./Target.css";
export default class Target extends Component {
    state = {
        target: this.props.target,
    };

    onTargetClick = () => {
        this.props.funcChangeRight("TargetInfo");
        this.props.funcChangeActiveTarget(this.state.target);
    };

    render() {
        return (
            <button
                className="target-btn"
                onClick={() => {
                    this.props.funcChangeRight("TargetInfo");
                    this.props.funcChangeActiveTarget(this.state.target);
                }}
            >
                {this.state.target.targetName}
            </button>
        );
    }
}
