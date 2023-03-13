import React, { useState, useEffect } from 'react'

const Quote = () => {

    const url = "https://api.quotable.io/random";
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [count, setCount] = useState(0);

    async function getQuote() {

        const response = await fetch(url);
        const data = await response.json();
        const colors = ['red', 'green', 'blue', 'deeppink', 'orange', 'purple', 'cornflowerblue'];

        document.querySelector('#quote-block').animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], 2000);
        document.documentElement.style.setProperty('--main-color', colors[count]);

        count == colors.length - 1 ? setCount(0) : setCount(count + 1);


        setTimeout(() => {

            setText(data.content);
            setAuthor(data.author);
        }, 1000);

    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div id="quote">
            <figure id="quote-box">
                <blockquote id="quote-block">
                    <div id="text">
                        <i className="fa fa-quote-left"></i>
                        <span>{text}</span>
                    </div>
                    <figcaption id="author">- {author}</figcaption>
                </blockquote>
                <div className='buttons'>
                    <a id="tweet-quote" href="twitter.com/intent/tweet">
                        <i class="fa fa-tumblr"></i>
                    </a>
                    <button id="new-quote" onClick={getQuote}>New Quote</button>
                </div>
            </figure>
        </div>
    );
};

export default Quote