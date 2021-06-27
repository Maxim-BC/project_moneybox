import React, { Component } from 'react'
import "./TargetList.css";
import Target from "./Target";

export default class TargetList extends Component {

    state = {
        targets: {

        },
    }

    render() {
        return (
            <div className="target-list">
                <Target funcChangeRight={this.props.funcChangeRight}/>
                <Target funcChangeRight={this.props.funcChangeRight}/>
                <Target funcChangeRight={this.props.funcChangeRight}/>
            </div>
        )
    }
}
