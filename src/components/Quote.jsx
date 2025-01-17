import React from "react";
import Button from "./Button";

const Quote = () => {
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState("");

    const fetchApi = () => {
        fetch("https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js")
            .then((response) => response.json())
            .then((data) => {
                const quotes = eval(data);
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex];

                setQuote(randomQuote.text);
                setAuthor(randomQuote.author);
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
