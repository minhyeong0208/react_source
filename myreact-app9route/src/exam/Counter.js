import React, { useState } from "react";

const Counter = () => {
    const [member, setMember] = useState(0);

    const increase = () => {
        setMember(member + 1);
    }

    const decrease = () => {
        setMember(member - 1);
    }

    return(
        <div>
            친구 수 : {member}&nbsp;&nbsp;
            <button onClick={increase}>친구 추가</button>&nbsp;&nbsp;
            <button onClick={decrease}>친구 삭제</button>
        </div>
    );
}

export default Counter;