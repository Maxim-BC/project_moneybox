import React, { Component } from 'react'
import "./Target.css";
export default class Target extends Component {

    state = {
        name: "TargetInfo",
    }

    render() {
        return (
            <button className="target-btn" onClick={()=>this.props.funcChangeRight(this.state.name)}>
                {this.state.name}
            </button>
        )
    }
}
