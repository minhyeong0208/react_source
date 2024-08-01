import React, { Component } from "react";
import store from "../store";

export default class ShowNumber extends Component {
    state = {number:store.getState.number}  // 값을 store로부터 읽기 위해 getState를 사용
    
    // 방법 2: redux 사용 시, 바인딩이 필요
    constructor(props) {
        super(props);

        // subscribe
        // store의 내용을 구독?
        store.subscribe(function() {
            this.setState({number:store.getState().number});
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h2>Show Number</h2>
                {/* 방법 1 : Redux를 사용하지 않은 경우 활성화
                <input type="text" value={this.props.number} readOnly /> 
                */}

                {/* 방법 2 : Redux 사용 */}
                <input type="text" value={this.state.number} readOnly /> 
            </div>
        );
    }
}