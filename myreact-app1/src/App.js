import React, { Component } from 'react';
import './App.css';
import Navdata from './mydir/Navdata';

// 클래스 컴포넌트. 조립식 프로그래밍 가능
// 이경우 Component를 상속받아야하므로 import 해야 한다.
class Subject extends Component {
  render() {
    return (
      <header>
        <h3>머리글 : 웹 문서</h3>
      </header>
    );
  }
}

// 함수 컴포넌트
function Welcome(props) {
  return (
    <article>
      글 기사 내용<br/>
      {props.who} {/* 부모 속성으로부터 받은 값을 매개변수로 가져올 수 있다. */}
    </article>
  );
}

function App() {
  return (
    <div className="App">
      🎶연습용🎶             {/* JSX 주석 사용 방법 */}
      <Subject></Subject> {/* Component 호출 */}
      <br></br> {/* JSX의 경우, 태그를 열었으면 반드시 닫아야 한다 */}
      <Welcome></Welcome>
      <br/> {/* Welcome과 App 중 App이 부모, 부모가 자식한테 값을 줄 수 있다. 이것을 prop */}
      <Welcome who='minhy'></Welcome>
      <br/>
      <Navdata msg="출발"></Navdata>
    </div>
  );
}

export default App; // App이라는 함수를 export -> index.js에서 import
