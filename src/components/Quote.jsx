import React, {useState} from "react";
import Button from "./Button";

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";
   
    const fetchApi = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(quotesUrl);
            const quotes = await response.json();
            selectRandomQuote(quotes);
        } catch (error) {
            setError("There was an error. Please try again later.");
            console.log("There was an error", error);
        }
        setLoading(false);
      };
    
    const selectRandomQuote = function (quotes) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        displayQuote(randomQuote);
    };

    const displayQuote = function (randomQuote) {
        setAuthor(randomQuote.author);
        setQuote(randomQuote.text);
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
