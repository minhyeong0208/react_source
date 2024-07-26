import React, {useState} from 'react'

// Hook : 클래스를 사용하지 않고 function으로 상태값(state)과 생명주기 기능을 사용 가능.
// 함수형 컴포넌트로 상태값 접근과 자식 요소에 접근이 가능
// function HookTest() {

// }

// 화살표 함수 사용
const HookTest = () => {
    // 형식 : const [state, setState] = useState(initialState)
    //        const [데이터, 데이터변경함수] = useState(초기값), 
    // 데이터 변경함수는 set*이 아니어도 된다.
    const [count, setCount] = useState(0);  // Hook이 useState를 지원
    // 이는 클래스에는 없고 function에만 존재한다.

    return(
        <div>
            number : {count} &nbsp;
            <button onClick={() => setCount(count + 2)}>증가 2</button>
        </div>
    );
};

export default HookTest;  // 이걸 써야 다른 자바스크립트에서 import가 가능!