import React, { Component } from "react";

class Subject extends Component {
    render() {
        const clickHandler = () => {
            console.log('두 번째 버튼 클릭 성공!');
        }

        // 텍스트 박스의 keyUp 이벤트 핸들러
        const keyUpHandler = (e) => {  // 이벤트가 발생했을 때 정보를 가진 e
            console.log('텍스트 키업 이벤트 성공!');
            console.log('입력한 값 : ', e.target.value); // 입력한 값을 console에 출력
        }

        return(
            <header>
                <h3>머리글 : {this.props.title}</h3>
                {this.props.subtitle}
                <br/>
                button event : 
                <button onClick={ 
                    function(){  // 버튼을 클릭하면
                        this.props.changePage();  // 해당 함수를 수행. -> console 창에 출력되고 title이 변경됨.
                    }.bind(this) 
                }>{this.props.subtitle}</button>

                <br/><br/>

                <button onClick={clickHandler}>버튼 2</button><br/>
                <input type="text" onKeyUp={keyUpHandler}></input>
            </header>
        );
    }
}

export default Subject; 