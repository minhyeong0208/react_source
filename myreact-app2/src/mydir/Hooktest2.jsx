import React, {useState, useEffect} from 'react'
import '../App.css'
import pic1 from '../pic.png';  // 이미지 읽기

// function HookTest() {
//     ...
// }

// export default HookTest2


// 위 주석 처리한 부분과 동일
export default function HookTest2() {
    const [item, setItem] = useState(0);  // 동적 변수 -> 데이터 수정 시, 함수를 통해 수정한다.
//  const a = 1;  // 정적 변수 -> 변수의 값을 직접 수정해야함.

    const incrementItem = () => setItem(item + 1);  // 이름이 없는 함수의 주소를 가지고 있음.
    const decrementItem = () => setItem(item - 1);

    useEffect(() => {
        let a = 1;
        console.log(a);  // 변수 a 사용
    }, []);

    // key:value 형식의 JSON 데이터
    let st = {color : 'blue', textAlign: 'center', fontSize:'15pt'};


    /* JSX 문법 적용 영역 */
    return( 
        <div className='App'>
            <div>
                number : {item}&nbsp;
                <button onClick={incrementItem}>증가</button>&nbsp;
                <button onClick={decrementItem}>감소</button>
            </div>

            {/* CSS 적용 : style 속성 값은 { } 안에 작성 */}
            <h3 className="blackbar">React의 이해</h3> {/* CSS 적용 1 : class 속성을 통해 .css 파일에 스타일 작성 */}
            <h3 style={{color:'red'}}>ECMA에 대한 선행학습 필요</h3>  {/* CSS 적용 2 : 인라인 방식 */}
            <h3 style={st}>CSS 적용 방식에 대한 이해</h3> {/* CSS 적용 3 : 변수에 JSON 타입으로 style을 작성 */}
        
            {/* 이미지 적용 1 : src 디렉토리 내 파일 */}
            <div>
                <img src={pic1} alt='첫 번째 이미지' />
            </div>

            {/* 이미지 적용 2 : css 파일의 background-img 사용 */}
            <div className='img_bg'></div>

            {/* 이미지 적용 3 :  public 디렉토리 내 파일 */}
            <img src={`${process.env.PUBLIC_URL}/imgs/pic3.png`} alt='public 폴더 이미지 읽기'/>
        </div>
    );
}