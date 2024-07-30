import React, { memo } from 'react';

const boxstyle = { border:'2px dotted blue', padding:'20px'};

//function Child({name, age}) { ... }

// 화살표 함수 사용
const Child = ({name, age}) => {
    console.log('자녀 나이 변경(렌더링)');
    
    return (
        <div style={boxstyle}>
            <h3>😋 자녀 1</h3>
            <p>이름 : 신통한</p>
            <p>나이 : 10살</p>
            <h3>😋 자녀 2</h3>
            <p>이름 : {name}</p>
            <p>나이 : {age}살</p>
        </div>
    );
}

// export default Child;
export default memo(Child);  // 반환 컴포넌트를 memo로 감싸주면 memo 기능이 활성화됨.