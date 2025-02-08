import React, { useState } from "react";

function Quotes() {
  const defaultQuotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "If you can dream it, you can do it. - Walt Disney",
    "The most dangerous phrase in the language is, 'We've always done it this way. - Grace Hopper",
  ];

  const [quotes] = useState(defaultQuotes);
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="quotes_container">
      <div className="quotes_card">
        <p className="quotes_title">{`“${currentQuote.split(" - ")[0]}”`}</p>
        <p className="quotes_author">
          {currentQuote.split(" - ")[1] &&
            `--- ${currentQuote.split(" - ")[1]}`}
        </p>
      </div>
      <button className="quotes_button" onClick={handleNewQuote}>
        Show Quote
      </button>
    </div>
  );
}

export default Quotes;
