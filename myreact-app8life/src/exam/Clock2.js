import React, {Component} from 'react';

class Clock2 extends Component {
    // 클래스 컴포넌트는 props로 기본 constructor를 호출해야 한다.
    constructor(props) {
        super(props)

        this.state = {date:new Date()} // state를 생성자에서 지정
    }

    // 마운트(Mount)
    
    showSigan() {
        this.setState({
            date:new Date()
        })
    }

    // 컴포넌트 출력 자료가 DOM에 렌더링 된 후에 실행되기 때문에 타이머 따위의 작업을 하기에 적당한 메소드이다.
    componentDidMount() {  // 시스템에 의한 콜백
        // setInterval() : 어떤 코드를 일정 시간 간격을 두고 반복 호출 가능
        this.timerID = setInterval(  // 1초에 한 번씩 첫 번째 인자의 화살표 함수 수행.
            () => this.showSigan(), 1000
        );
    }

    componentWillUnmount() {  // 시스템에 의한 콜백
        // 사용된 메모리 등의 작업 마무리
        // SPA를 개발할 때는 메모리 누수(leak)를 방지하는 작업이 필요.
        // clearInterval() : setInterval을 멈추는 용도
        clearInterval(this.timerID); // setInterval() 해제
    }

    render() {
        return(
            <div>
                <h3>Hello?(Clock2 : 렌더링)</h3>
                <h4>지금은 {new Date().toLocaleTimeString()}</h4>
                <h4>현재 시간은 {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Clock2;