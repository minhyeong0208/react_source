import { legacy_createStore as createStore } from 'redux';

// 리듀서 함수 : 애플리케이션 상태를 변환하는 함수 : A 상태 -> B 상태
//              state와 action을 전달받아 상태를 변환 후, 반환
// 역할 1) action 타입 분석
// 역할 2) 이전 상태를 다음 상태로 교체
// 역할 3) 다음 상태를 반환

// 방법 2 : Redux 사용
// createStore(리듀서함수)
export default createStore(function(state, action){
    // state : 데이터
    // action : 데이터에 가해지는 행위
    if(state === undefined) {
        return {number:0};  // number 초기화
    }

    if(action.type === 'INCREMENT') {  // 역할 1 -> 타입명은 고정되어 있지 않다.
        return { ...state, number:state.number + action.size }; // 역할 2 : 기존의 state 값(...state)에서 number 값을 변경
    }
    return state; // 역할 3
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// createStore 두 번째 매개변수는 REDUX_DEVTOOLS를 사용하기 위한 지정값