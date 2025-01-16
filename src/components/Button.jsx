import React from "react";

const Button = (props) => {
    return <button onClick={props.callApi}>
        Click to generate a new motivational quote.
    </button>;
}

export default Button;