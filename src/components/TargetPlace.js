import React, { Component } from "react";
import TargetMenu from "./TargetMenu";
import TargetList from "./TargetList";

export default class TargetPlace extends Component {
    state = {
        targets: this.props.targets,
        filteredTargets: this.props.targets,
    };

    changeFilterString = (event) => {
        //console.log(event.target.value)
        const targets = this.props.targets;
        const filteredTargets = targets.filter(target => target.targetName.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log(filteredTargets);
        //event.preventDefault();
        this.setState({ 
            //filterString: event.target.value,
            filteredTargets: filteredTargets
        });
    };

    render() {
        return (
            <div>
                <TargetMenu funcChangeRight={this.props.funcChangeRight} funcChangeFilterString={this.changeFilterString}/>
                <TargetList
                    funcChangeRight={this.props.funcChangeRight}
                    funcChangeActiveTarget={this.props.funcChangeActiveTarget}
                    targets={this.state.filteredTargets}
                />
            </div>
        );
    }
}
