import React from "react";
import Button from "./Button";

const Quote = () => {
    const [Quote, setQuote] = React.useState("");

    const fetchApi = () => {
    
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            });
    };

    return (
        <div>
            <Button callApi={fetchApi} />
            <p>{Quote}</p>
        </div>
    );

}

export default Quote;