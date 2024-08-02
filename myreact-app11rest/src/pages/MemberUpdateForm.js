import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm() {
    // "/members/:num/edit" num 값 읽기
    const {num} = useParams();  // useParams: 파라미터를 읽을 때 사용

    // 수정할 정보 state로 관리
    const [state, setState] = useState({
        num: 0,
        name:"",
        addr:""
    });

    useEffect(() => {
        // Ajax 요청(GET 방식) 설정 : 수정 자료 읽기
        axios.get("/members/" + num) // 7행에서 읽은 num 값 삽입
        .then(res => {
            // 서버로부터 응답된 데이터를 이용하여 state를 수정
            // res.date는 {num:1, name:'공기밥', addr:'강남구'}
            setState(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [num])

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate();

    // 수정 버튼 클릭에 대한 이벤트 핸들러
    const handleSave = () => {
        // AJAX 요청(PUT 방식) 설정 : update
        axios.put("/members/" + num, state) 
        .then(res => {
            navigate("/members")  // 수정 후 목록보기  
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <>
        <h3>회원 정보 수정</h3>
        <div>
            <label>이름 : </label>
            <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
            <label>주소 : </label>
            <input type="text" name="addr" onChange={handleChange} />
        </div>
        <button onClick={handleSave}>수정 확인</button>
        </>
    );
}