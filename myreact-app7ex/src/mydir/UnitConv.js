import React, { useState } from "react";

function Res({text}) { // 할 일 목록 출력용
    return(
      <span>{text}m = {text * 100}cm</span>
    );
  }

function UnitConv() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);   // value를 받아 text를 수정
    }

    return(
        <div>
            <h3>단위 환산 계산기(m to cm)</h3>
              <input onChange={handleChange} value={text}></input> &nbsp;&nbsp;
            <Res text={text} />
        </div>
    );
}

export default UnitConv;