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
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={styles.quote}>{`“${currentQuote.split(" - ")[0]}”`}</p>
        <p style={styles.author}>
          {currentQuote.split(" - ")[1] && `--- ${currentQuote.split(" - ")[1]}`}
        </p>
      </div>
      <button style={styles.button} onClick={handleNewQuote}>
        Show Quote
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    minHeight: "100vh",
    fontFamily: "'Bellefair',serif",
  },
  card: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "50px 20px",
    backgroundColor: "#E2E2E2",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    transition: "transform 0.3s, box-shadow 0.3s",
    color: "black",
  },
  quote: {
    fontSize: "3rem",
    fontStyle: "italic",
    color: "black",
    marginBottom: "15px",
  },
  author: {
    fontSize: "1.5rem",
    fontWeight: "100",
    color: "black",
    textAlign: "right",
    fontStyle: "italic",
  },
  button: {
    margin: "10px 20px",
    padding: "18px 35px",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#E2E2E2",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    border: "2px solid white",
    fontFamily: "'Bellefair',serif",
  },
};

export default Quotes;
