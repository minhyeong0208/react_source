import React, { Component } from "react";
import ShowNumber from "./ShowNumber";

export default class ShowNumberSuper extends Component {
    render() {
        return (
            <div id="super">
                <h2>Show Number Super</h2>
                
                {/* 방법 1 : redux 사용 X             
                ShowNumberSuper의 number : {this.props.number}

                <ShowNumber number={this.props.number} />
                */}

                {/* 방법 2 : Redux 사용 */}
                <ShowNumber /> {/* ShowNumberSuper는 ShowNumber를 포함하고 있다. */}
            </div>
        );
    }
}