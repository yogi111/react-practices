import React from "react";

const validation = (props) => {
    let message;
    if(props.inputlength < 5) {
        message = <p>Text is too short.</p>
    } else {
        message = <p>Text long enough.</p>
    }
    return (
        <div>
            {message}
        </div>
    )
};

export default validation;
