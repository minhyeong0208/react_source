import { useState, useEffect } from 'react';

const Clock3 = () => {
    // useState로 state를 초기화
    const [date, setDate]  = useState(new Date());

    // useEffect를 사용하면 내부적으로 생명주기 메소드가 처리됨
    useEffect(() => {
        // 클래스의 componentDidMount()를 아래와 같이 기술
        const timerID = setInterval(() => showSigan(), 1000);

        // 클래스의 componentWillUnmount()를 아래와 같이 기술
        return () => {
            clearInterval(timerID);
        }
    }, []);

    const showSigan = () => {  // 자바스크립트 객체
        setDate(new Date());
    }

    return(
        <div>
            <h3>Hello?(Clock3 : 렌더링)</h3>
            <h4>지금은 {new Date().toLocaleTimeString()}</h4>
            <h4>현재 시간은 {date.toLocaleTimeString()}</h4>
        </div>
    );
}

export default Clock3;