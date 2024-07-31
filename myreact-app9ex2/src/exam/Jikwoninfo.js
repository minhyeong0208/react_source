import React, {useState, useEffect} from "react";

const Jikwoninfo = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch("/web_react/jikwoninfo.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.jikwon); // 여기 items는 이클립스에서 만든 items를 말한다.
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[]);


    if(error){
        return <div>에러 : {error.message}</div>
    }else if(!isLoaded){
        return <div>자료 수신중 ...</div>
    }else{
        return(
            
            <ul> 
                <th>사번</th> <th>직원명</th> <th>부서명</th> <th>직급</th>
                {items.map(item => (
                    <table>
                        <tr>
                           <td>{item.no}</td>  <td>{item.name}</td> <td>{item.bname}</td> <td>{item.jik} </td>
                        </tr>
                    </table>
                ))}
                인원수 : {items.length} 
            </ul>
      
        );
    }
    
}


export default Jikwoninfo;