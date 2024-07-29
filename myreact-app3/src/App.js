import './App.css';
import MyName from './mydir/MyName'

function App() {
  return (
    <div className="App">
        <h3>✨메인 영역✨</h3><br/>
        컴포넌트에서 사용하는 데이터는 props와 state가 있다.<br/>
        props : 부모 컴포넌트가 자식 컴포넌트에 주는 값 : 단방향, 수정 불가<br/>
        state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경 가능<br/>
        <b>props나 state 값이 변경되면 컴포넌트는 리렌더링한다.</b>
        <hr/><hr/>
        <MyName />
        <br />
        <MyName name='히히'/> 
    </div>
  );
}

export default App;
