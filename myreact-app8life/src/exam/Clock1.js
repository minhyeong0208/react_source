import React from 'react';

class Clock1 extends React.Component {
    // constructor(props){
    //     super(props);
    // };

    render() {
        return(
            <div>
                <h3>하이!</h3>
                <h4>지금은 {new Date().toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Clock1;