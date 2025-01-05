import React, { useState } from "react";

function Quotes() {
  const defaultQuotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "If you can dream it, you can do it. - Walt Disney",
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
          {currentQuote.split(" - ")[1] && `- ${currentQuote.split(" - ")[1]}`}
        </p>
      </div>
      <button style={styles.button} onClick={handleNewQuote}>
        Show Another Quote
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
  },
  card: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  quote: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    color: "#333",
    marginBottom: "15px",
  },
  author: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#555",
    textAlign: "right",
  },
  button: {
    margin: "10px 20px",
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Quotes;
