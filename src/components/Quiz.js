import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "Who created the C programming language?",
    options: [
      "Bjarne Stroustrup",
      "Dennis Ritchie",
      "James Gosling",
      "Ken Thompson",
    ],
    answer: "Dennis Ritchie",
  },
  {
    question: "Who is known as the father of the World Wide Web?",
    options: ["Vint Cerf", "Tim Berners-Lee", "Robert Kahn", "Marc Andreessen"],
    answer: "Tim Berners-Lee",
  },
  {
    question: "Who co-founded Google?",
    options: ["Elon Musk", "Bill Gates", "Sergey Brin", "Mark Zuckerberg"],
    answer: "Sergey Brin",
  },
  {
    question: "Who developed the Python programming language?",
    options: [
      "Guido van Rossum",
      "Larry Page",
      "Linus Torvalds",
      "Grace Hopper",
    ],
    answer: "Guido van Rossum",
  },
  {
    question: "Who is the creator of Linux?",
    options: [
      "Richard Stallman",
      "Linus Torvalds",
      "Dennis Ritchie",
      "Ken Thompson",
    ],
    answer: "Linus Torvalds",
  },
];

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < shuffledQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-container">
          <h2>
            Your Score: {score} / {shuffledQuestions.length}
          </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h3>{shuffledQuestions[currentQuestion]?.question}</h3>
          <div className="options-container">
            {shuffledQuestions[currentQuestion]?.options.map(
              (option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedOption === option ? "selected" : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
