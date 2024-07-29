import React, { Component } from 'react'

/*
class MyName extends Component {
    // static defaultProps = {  // props에 기본값 부여
    //     name:'기본 이름'
    // }

    render() {
        return(
            <div>
                하이! 내 이름은 <b>{this.props.name}</b>
            </div>
        );
    }
}

MyName.defaultProps = {  // props에 기본값 부여
    name:'기본 이름'
}
*/


// 클래스를 함수로 소스 코드 변환 1
// function MyName(props) {
//     return(
//         <div>하이! 내 이름은 <b>{props.name}</b></div>
//     );
// }

// 클래스를 함수로 소스 코드 변환 2
const MyName = ({name}) => {
    return(
        <div>하이! 내 이름은 <b>{name}</b></div>
    );
}
export default MyName;
