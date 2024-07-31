import React, { useState, useEffect } from "react";

const Jikwon = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [jikwons, setJikwons] = useState([]);

    useEffect(() => {
        fetch('/web_react/json1.jsp', {method:'GET'})
        .then(res => {
            if(!res.ok) {
                throw new Error('network response was not ok');
            }
            return res.json();
        }).then(
            (result) => {
                setIsLoaded(true);
                setJikwons(result.list);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if(error) {
        return <div>err 발생! : {error.message}</div>
    } else if(!isLoaded) {
        return <div>자료 수신 중...</div>
    } else { // 에러가 발생하지 않는 경우, 렌더링.
        return(
            <ul>
                <table>
                    <tr>
                        <th>사번</th><th>직원명</th><th>부서명</th><th>직급</th>
                    </tr>
                    {jikwons.map((jikwon) => (
                        <tr>
                            <td>{jikwon.no}</td>
                            <td>{jikwon.name}</td>
                            <td>{jikwon.buser}</td>
                            <td>{jikwon.jik}</td>
                        </tr>
                    ))}
                    인원수 : {jikwons.length} 
                </table>
            </ul>
        );
    }
}

export default Jikwon;