import React, { Component } from "react";
import "./TargetMenu.css";
export default class TargetMenu extends Component {



    render() {
        return (
            <div className="menu-container">
                <div className="menu-add-btnplace">
                    <div onClick={()=>this.props.funcChangeRight("NewTargetForm")} className="plus-button">+</div>
                </div>
                <div className="menu-find-input">
                    <input placeholder="Поиск"  onChange={this.props.funcChangeFilterString}></input>
                </div>
            </div>
        );
    }
}
