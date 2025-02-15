import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "Who invented the C programming language?",
    options: ["Bjarne Stroustrup", "Dennis Ritchie", "Guido van Rossum", "James Gosling"],
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
  {
    question: "Who is known as the inventor of the World Wide Web?",
    options: ["Tim Berners-Lee", "Sergey Brin", "Alan Turing", "Richard Stallman"],
    answer: "Tim Berners-Lee",
  },
  {
    question: "What is Jordan Walke famous for creating?",
    options: ["TensorFlow", "React.js", "Vue.js", "Angular"],
    answer: "React.js",
  },
  {
    question: "Which programming language did Bjarne Stroustrup develop?",
    options: ["Java", "C++", "C#", "Swift"],
    answer: "C++",
  },
  {
    question: "What was Alan Turing's major contribution to computing?",
    options: ["Developed Unix", "Created the first compiler", "Conceptualized the Turing Machine", "Invented HTML"],
    answer: "Conceptualized the Turing Machine",
  },
  {
    question: "Who co-founded Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    answer: "Bill Gates",
  }
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
