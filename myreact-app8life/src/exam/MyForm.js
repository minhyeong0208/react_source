import { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        menu:'파전'
    })

    const dataChange = (e) => {
        const name = e.target.name;  // form 태그 내의 name 속성명
        const value = e.target.value;
        setFormData({
            ...formData,
            [name] : value
        });
        
    }

    const dataSubmit = (e) => {
        e.preventDefault(); // submit 고유 기능 해제
        const {age} = formData;  // formData 객체에서 age를 추출해 age 변수에 할당

        // 나이 입력 자료 검사
        if(!Number(age) || isNaN(Number(age))) {
            alert('나이는 숫자로 입력하시오!');
        } else {
            alert('처리 성공');
        }
    }

    return(
        <>
            <h3>결과 : {formData.name}, 넌 {formData.age}살 ! 선택한 음식은 {formData.menu}</h3>
            <form onSubmit={dataSubmit}>
                이름 입력 : <input type='text' name='name' onChange={dataChange}/><br/>
                나이 입력: <input type='text' name='age' onChange={dataChange}/><br/>
                메뉴 입력: 
                <select name='menu' value={formData.menu} onChange={dataChange}>
                    <option value='치킨'>치킨</option>
                    <option value='파전'>파전</option>
                    <option value='삼겹살'>삼겹살</option>
                </select>
                <br/>
                <button type='submit'>전송</button>
            </form>
        </>
    ); 
}

export default MyForm;