import React from 'react';
import MyTest from './exam/Test';
import About from './exam/About';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h3>route 연습용 메인 화면</h3>
      <MyTest />
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a 태그로 전환 : 요청명 개념으로 이해 */}
        <Link to="/">Test화면</Link>  {/* 하이퍼링크이며, 이 Link는 Route의 path와 매핑하고 실질적으로 실행될 컴포넌트는 elememt의 값인 MyTest이다. */}
        <Link to="/About">About보기</Link>
      </nav>

      <Routes>
        {/* 동적 라우팅을 구현 가능 */}
        <Route path='/' element={<MyTest/>}></Route> 
        <Route path='/About' element={<About/>}></Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
