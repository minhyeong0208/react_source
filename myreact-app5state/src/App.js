/* eslint-disable */
import './App.css'
import React , { useState } from 'react';

function App() {
  // 일반 데이터
  let name = '하이 JSX  사용법 : 일반 데이터';
  
  // state는 변수. const, let 등으로 선언한 변수와 달리 값이 변하면 
  // 관련있는 컴포넌트들이 재랜더링되어 화면이 바뀐다.

  // state 데이터  -> 일반 변수와 다름
  let [title, setTitleFunc] = useState('자바스크립트');  // 문자열 기억
  let [title2, setTitleFunc2] = useState(['React', 'Vue']);  // 배열 자료 기억

  // 이벤트 처리 함수 1(inner function)
  function dataUpdate() {
    // let newArr = [...title];  // 전개 연산자에 의해 문자열이 문자로 낱개 문자로 분리되어 배열로 복사.  ex. 자, 바, 스, 크, 립, 트
    // console.log(newArr);

    title = 'React🎶🎶'
    setTitleFunc(title);  // title state는 setTitleFunc 함수로 값 수정, 자바스크립트 => React
    // console.log(title);
  }

  function dataUpdate2() {
    let newArr2 = [...title2];
    console.log(newArr2);

    newArr2[1] = "Hello, World";  // newArr[1] 값 변경
    setTitleFunc2(newArr2);   // title2 값을 변경하기 위해 setTitleFunc2 함수 선언
  }

  // 이벤트 처리 2
  let [count, setCount] = useState(0);


  return (
    <div className="App">
      <div className='black_bar'>
        <h3>React state 이해(Hook이 제공하는)</h3>
      </div>
      
      <div className='list'>
        <h3>{title}</h3>
        <span>{name}</span><br/> 
        <p>state 확인</p>
        <button onClick={dataUpdate}>타이틀 변경</button>
        <hr/>
      </div>

      <div className='list'>
        <h3>title2[0] : {title2[0]}</h3>
        <h3>title2[1] : {title2[1]}</h3><br/> 
        <p>state 확인</p>
        <button onClick={dataUpdate2}>타이틀 2 변경</button>
        <hr/>
      </div>

      <div>
        이모티콘 클릭 : <span onClick={() => {setCount(count + 1)}}>🎶</span>{count} 번 클릭
      </div>
    </div>
  );
}

export default App;
