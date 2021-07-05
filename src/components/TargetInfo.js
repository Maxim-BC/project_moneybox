import React, { Component } from 'react'

export default class TargetInfo extends Component {

    state = {target: this.props.activeTarget}


    render() {
        return (
            <div>
                 id {this.props.activeTarget.id} <br/>
                 targetName {this.props.activeTarget.targetName} <br/>
                 sum {this.props.activeTarget.sum} <br/>
                 percent {this.props.activeTarget.percent} <br/>
                 period {this.props.activeTarget.period} <br/>
                 payment: {this.props.activeTarget.payment} <br/>
                 profit: {this.props.activeTarget.profit} <br/>
                 startDate {this.props.activeTarget.startDate} <br/>
            </div>

        )
    }
}
