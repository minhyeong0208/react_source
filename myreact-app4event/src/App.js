import React, { useState } from "react";
import Subject from "./mydir/Subject";
import Hello from "./mydir/Func";

function App() {
  const [subject, setSubject] = useState({title:"웹문서", subtitle:"React"});
  const [friends] = useState([
    {num:1, name:'관우', age:33},
    {num:2, name:'장비', age:23}
  ]);

  // 이벤트 핸들러 생성
  const handleChangePage = () => {
    // friends 배열 값 console에 출력
    friends.forEach(friend => {
      console.log(`${friend.num}번 ${friend.name}님 나이는 ${friend.age}살`);
    });

    setSubject(prevSubject => ({  // 이전 상태인 prevSubject(subject)을 받아 변환
      ...prevSubject,   // JS 전개 연산자 사용
      title:'버튼에 의해 제목 변경'
    }));
  }

  return (
    <div className="App">
      이벤트 연습<br/>
      {/* 클래스 컴포넌트 사용 */}
      <Subject 
        title = {subject.title}
        subtitle = {subject.subtitle}
        changePage={handleChangePage}
      />
      {/* title, subtitle, changePage : App 에서 Subject 컴포넌트로 전달되는 props */}


      {/* 함수 컴포넌트 사용 */}
      <br/><br/>
      <Hello
        title = {subject.title}
        friends = {friends}
        changePage={handleChangePage}
      />
    </div>
  );
}

export default App;