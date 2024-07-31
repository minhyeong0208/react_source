import React from "react";

// Member 컴포넌트
const Member = ({memberData}) => {  // 배열 memberData 받기
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.junhwa}</td>
        </tr>
    );
}


// Multidata.js의 메인 컴포넌트
const Multidata = () => {
    const members = [
        {irum:'관우', junhwa:'111-1111'},
        {irum:'장비', junhwa:'222-2222'},
        {irum:'유비', junhwa:'333-3333'}
    ];

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                {/* 배열 렌더링 시, 각 요소의 고유 key를 추가 */}
                {members.map((mem, index) => ( // map이 members의 요소를 하나씩 꺼내 mem에 할당
                    <Member key={index} memberData={mem} />
                ))}
            </tbody>
        </table>
    );
}

export default Multidata;