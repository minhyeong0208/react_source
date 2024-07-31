import React from 'react';
import MyTest from './exam/Test';
import About from './exam/About';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Counter from './exam/Counter';
import Input1 from './exam/Input1';
import Input2 from './exam/Input2';
import MultiData from './exam/Multidata';
import MyAjax from './exam/MyAjax';

function App() {
  return (
    <Router>
    <div className="App">
      <h3>route 연습용 메인 화면</h3>
      <MyTest />
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a 태그로 전환 : 요청명 개념으로 이해 */}
        <Link to="/">Test화면</Link> |  {/* 하이퍼링크이며, 이 Link는 Route의 path와 매핑하고 실질적으로 실행될 컴포넌트는 elememt의 값인 MyTest이다. */}
        <Link to="/about">About보기</Link> |   
        <Link to="/counter">친구 추가/삭제</Link> |   
        <Link to="/input1">자료입력 1</Link> |
        <Link to="/input2">자료입력 2</Link> |
        <Link to="/multidata">배열 자료</Link> |
        <Link to="/ajax">AJAX 요청</Link>
      </nav>
      <hr/>
      <Routes>
        {/* 동적 라우팅을 구현 가능 */}
        <Route path='/' element={<MyTest/>}></Route> 
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/counter' element={<Counter/>}></Route> 
        <Route path='/input1' element={<Input1/>}></Route> 
        <Route path='/input2' element={<Input2/>}></Route> 
        <Route path='/multidata' element={<MultiData/>}></Route> 
        <Route path='/ajax' element={<MyAjax/>}></Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
