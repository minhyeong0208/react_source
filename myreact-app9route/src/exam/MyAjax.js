import React, { useState, useEffect } from "react";


// 웹 서버를 띄워두고 진행한다.
const MyAjax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);  // 읽어온 자료가 들어갈 state 변수

    // fetch를 이용해 JSP 자료(Apache server) 읽기
    // AJAX 처리 성공하면 isLoaded, products를 갱신
    // 실패하면 error를 갱신
    useEffect(() => {
        // JS 기본 : SOP(Same Origin Policy, 동일 출처 정책)
        // 다른 출처의 리소스가 필요하다면 CORS를 사용
        // A Server <=> B Server는 CORS 에러가 나지 않는다.
        // CORS 처리 방법은 package.json에 등록 -> "proxy":"http://localhost:80"
        fetch('/web_react/abc.jsp', {method:'GET'})  // 웹 서버의 도메인(80 포트)과 다르다.
        .then(res => {
            if(!res.ok) {
                throw new Error('network response was not ok');
            }
            return res.json();  // 리턴값이 json.
        }).then(  // 리턴한 json 값이 얘가 받음.
            (result) => { // 성공하면 isLoaded 값 변경
                setIsLoaded(true);
                setProducts(result.items);  // 이 items는 json 데이터의 key 값에 해당
            },
            (error) => { // 실패하면 여기 실행
                setIsLoaded(true);
                setError(error);
            }
        )
    },[]);

    // error가 발생하면 에러 메세지를, isLoaded가 false이면, 로딩 메세지를 
    // 그 외에는 products를 출력(렌더링)
    if(error) {
        return <div>err 발생! : {error.message}</div>
    } else if(!isLoaded) {
        return <div>자료 수신 중...</div>
    } else { // 에러가 발생하지 않는 경우, 렌더링.
        return(
            <ul>
                {products.map(item => (
                    <li>
                        {item.code} {item.name} {item.price} 
                    </li>
                ))}
            </ul>
        );
    }
}

export default MyAjax;