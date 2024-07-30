import Clock1 from './exam/Clock1'
import Clock2 from './exam/Clock2'
import Clock3 from './exam/Clock3'
import MyComponent from './exam/MyComponent.js'
import MyComponent2 from './exam/MyComponent2'
import MyForm from './exam/MyForm'


function App() {
  return (
    <>
      <h3>React 생명주기 연습용 : 디지털 시계</h3>
      <Clock1 />
      <hr />
      <Clock2 />
      <hr />
      <Clock3 />
      <hr />
      <MyComponent />
      <hr />
      <MyComponent2 />
      <hr /><hr />
      <b>생명주기와 상관 ㄴ. Form 작업</b><br />
      <h3>사용자와 웹 페이지 간 상호 작용</h3>
      <MyForm />

    </>
  );
}

export default App;
