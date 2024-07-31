import React from "react";

const Gugudan = ({dan}) => {
    const num = [1,2,3,4,5,6,7,8,9];
    return( 
        <div>
            {num.map((num, index) => (
                <div>{dan} * {num} = {num * dan}</div>
            ))}
        </div>
    );
}


export default Gugudan;