import React, { Component } from "react";
import "./TargetList.css";
import "./Workplace.css";
import Target from "./Target";

export default class TargetList extends Component {
    state = {
        targets: this.props.targets,
    };

    render() {
        return (
                
                <>
                {this.props.targetCount === 0 ? <div className="targets-not-found">Пока Вы не создали <br />ни одной цели</div> :
                <div className="target-list">
                    {this.props.targets.map((target) => (
                        <Target
                            key={target.id}
                            funcChangeRight={this.props.funcChangeRight}
                            funcChangeActiveTarget={
                                this.props.funcChangeActiveTarget
                            }
                            target={target}
                        />
                    ))}
                </div>
                }
                </>
        );
    }
}
