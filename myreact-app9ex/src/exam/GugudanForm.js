import React, { useState } from "react";
import Gugudan from "./Gugudan";

const GugudanForm = () => {
    const [dan, setDan] = useState(2);
    const [submitted, setSubmitted] = useState(false);  // 폼 제출 여부 판단용

    const onSubmit = (e) => {
        e.preventDefault();
        const inputDan = e.target.elements.inputDan.value;  // elements는 폼 내 모든 입력 요소를 참조. name 속성을 통해 접근할 수 있다.
        setDan(inputDan);

        setSubmitted(true);
    }

    return(
        <div>    
            <form onSubmit={onSubmit}>
                단 입력 : 
                <input type="text" name="inputDan"/>
                <button type="submit">확인</button>
            </form>

            {/* 폼이 제출된 경우(좌측의 값이 true인 경우) 구구단 출력(우측의 컴포넌트가 실행됨) */}
            {submitted && <Gugudan dan={dan} />}
        </div>
    );
}

export default GugudanForm;