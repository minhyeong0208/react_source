import React, { useState } from "react";

const Gugudan = () => {
    const [dan, setDan] = useState(0);
    const num = [1,2,3,4,5,6,7,8,9];

    const onChange = (e) => {
        setDan(e.target.value);
    }

    const onClick = () => {
        setDan(dan)
        console.log(dan);
    }

    return(
        <div>    
            단 입력 : 
            <input type="text" value={dan} onChange={onChange}/>
            {/*<button onClick={onClick}>계산</button>*/}

            {num.map((num, index) => (
                <div>{dan} *{num} = {num * dan}</div>
            ))}
        </div>
    );
}


export default Gugudan;