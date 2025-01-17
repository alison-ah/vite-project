import React from "react";
import Button from "./Button";

const Quote = () => {
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState("");

    const fetchApi = () => {
        fetch("http://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch((error) => {
                console.error("Error fetching quote:", error);
            });
    };

    return (
        <div>
            <Button callApi={fetchApi} />

            <div id="insertQuoteHere">{quote ? `"${quote}"` : "Load quote..."}</div>
            <div id="insertQuoteAuthor">{author ? `- ${author}` : ""}</div>
        </div>
    );
};

export default Quote;
