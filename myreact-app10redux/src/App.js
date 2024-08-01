import './App.css';
import React, { Component } from 'react';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

class App extends Component {
    state = {number:0};

    render() {
        return(
            <div id='use'>
            <h2>Main</h2>
            {/* App 소유 state변수 number에 size(AddNumberSuper가 전달한 값)을 더한다. */}
            
            {/* 방법 1 : redux 사용 X        
            <AddNumberSuper onClick={function(size) {  // props 이름이 onClick
                this.setState({number:this.state.number + size});
            }.bind(this)} />
            App의 number : {this.state.number}

            <ShowNumberSuper number={this.state.number}/>
            */}

            {/* 방법 2 : Redux 사용 */}
            <AddNumberSuper />
            <ShowNumberSuper />
            </div>
        );
    }
}

export default App;