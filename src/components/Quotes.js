import React, { useState } from "react";

function Quotes() {
  const defaultQuotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "If you can dream it, you can do it. - Walt Disney",
    "The most dangerous phrase in the language is, 'We've always done it this way. - Grace Hopper",
    "Some people don’t like change, but you need to embrace change if the alternative is disaster. - Elon Musk",
    "Stay hungry, stay foolish. - Steve Jobs",
    "It’s easier to ask forgiveness than it is to get permission. - Grace Hopper",
    "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein",
    "Talk is cheap. Show me the code - Linus Torvalds",
    "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. -  Bill Gates",
    "Bad programmers worry about the code. Good programmers worry about data structures and their relationships - Linus Torvalds"
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
