import React, { useState, useEffect } from "react";

function Quotes() {
  const defaultQuotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "If you can dream it, you can do it. - Walt Disney",
  ];

  // Load quotes from localStorage or fallback to default
  const loadQuotes = () => {
    const savedQuotes = localStorage.getItem("quotes");
    return savedQuotes ? JSON.parse(savedQuotes) : defaultQuotes;
  };

  const [quotes, setQuotes] = useState(loadQuotes);
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Save quotes to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const handleAddQuote = (e) => {
    e.preventDefault();

    if (!newQuote.trim()) {
      alert("Please enter a quote.");
      return;
    }

    const fullQuote = newAuthor ? `${newQuote} - ${newAuthor}` : newQuote;

    setQuotes((prevQuotes) => [...prevQuotes, fullQuote]);
    setNewQuote("");
    setNewAuthor("");
    setShowForm(false);
    alert("Quote added successfully!");
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
      <button
        style={styles.secondaryButton}
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close Form" : "➕ Add Your Own Quote"}
      </button>

      {showForm && (
        <form style={styles.form} onSubmit={handleAddQuote}>
          <textarea
            style={styles.textarea}
            placeholder="Enter your quote here"
            value={newQuote}
            onChange={(e) => setNewQuote(e.target.value)}
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Author (Optional)"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <button style={styles.button} type="submit">
            Add Quote
          </button>
        </form>
      )}
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
  secondaryButton: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "transparent",
    border: "2px solid #007BFF",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  form: {
    marginTop: "20px",
    textAlign: "left",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    fontFamily: "'Roboto', sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    fontFamily: "'Roboto', sans-serif",
    margin: "10px 0",
  },
};

export default Quotes;
