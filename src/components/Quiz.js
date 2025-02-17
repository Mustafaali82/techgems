import React, { useState, useEffect, useCallback } from "react";

const questions = [
  {
    question: "Who invented the C programming language?",
    options: [
      "Bjarne Stroustrup",
      "Dennis Ritchie",
      "Guido van Rossum",
      "James Gosling",
    ],
    answer: "Dennis Ritchie",
  },
  {
    question: "What year was Python first released?",
    options: ["1989", "1991", "1995", "2000"],
    answer: "1991",
  },
  {
    question: "Who is the co-founder of Google?",
    options: ["Mark Zuckerberg", "Larry Page", "Bill Gates", "Steve Jobs"],
    answer: "Larry Page",
  },
  {
    question: "What company did Linus Torvalds create Linux while working at?",
    options: ["IBM", "Microsoft", "University of Helsinki", "Red Hat"],
    answer: "University of Helsinki",
  },
  {
    question: "Which programming language did Grace Hopper help develop?",
    options: ["COBOL", "Python", "Ruby", "Java"],
    answer: "COBOL",
  },
];

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, []);

  // Memoize handleNextQuestion to avoid re-creating it
  const handleNextQuestion = useCallback(() => {
    if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(10);
    } else {
      setShowResult(true);
    }
  }, [currentQuestion, shuffledQuestions.length]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleNextQuestion]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(handleNextQuestion, 1000);
  };

  const restartQuiz = () => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setTimeLeft(10);
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
          <div className="question-timer">{timeLeft}</div>
          <h3 className="question">
            {shuffledQuestions[currentQuestion]?.question}
          </h3>
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
