import React, { Component } from 'react'
import TargetMenu from "./TargetMenu";
import TargetList from "./TargetList";

export default class TargetPlace extends Component {
    render() {
        return (
            <div>
                <TargetMenu funcChangeRight={this.props.funcChangeRight}/>
                <TargetList funcChangeRight={this.props.funcChangeRight}/> 
            </div>
        )
    }
}
