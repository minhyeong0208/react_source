import React, { Component } from "react";
import store from "../store";

export default class AddNumber extends Component {
    state = {
        size:1
    }

    render() {
        return (
            <div id="use">
                <h2>Add Number</h2>
                {/* + 버튼 클릭 시, size값이 상위 컴포넌트로 전달될 수 있게 onClick을 구현 
                    props로 전달 받은 onClick 함수를 호출하는데 현재 컴포넌트의 state인 size값을 전달한다.
                    onClick 함수는 AddNumberSuper에서 작성해준다. 
                */}
                
                {/* 방법 1 : redux 사용 X
                <input type="button" value="+" onClick={function() {
                    this.props.onClick(this.state.size);   // onClick은 부모 onClick 함수를 호출, 버튼을 클릭(첫 번쨰 onClick)하면 this.props.onClick하게 되고 이는 부모의 onClick 함수를 호출.
                }.bind(this)} /> */}

                {/* 방법 2 : Redux 사용 */}
                <input type="button" value="+" onClick={function() {
                    store.dispatch({type:'INCREMENT', size:this.state.size}); // dispatch(타입, 수정할 값)
                }.bind(this)} />

                {/* 방법 1, 2 공통 */}
                <input type="text" value={this.state.size} onChange={function(e) {
                    this.setState({size:Number(e.target.value)}); // size 값이 변경될 때마다, state 값 변경
                }.bind(this)} />
            </div>
        );
    }
}