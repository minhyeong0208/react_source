import GugudanForm from './exam/GugudanForm';
import Jikwon from './exam/Jikwon';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <h3>메인 화면</h3>
      <nav>   
        <Link to="/gugudan">구구단</Link> |   
        <Link to="/jikwon">직원 정보</Link> 
      </nav>
      <hr/>
      <Routes>
        <Route path='/gugudan' element={<GugudanForm/>}></Route> 
        <Route path='/jikwon' element={<Jikwon/>}></Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
