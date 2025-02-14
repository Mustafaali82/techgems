import React, { useState } from "react";

const quizQuestions = [
  {
    question: "What time does Elon Musk usually wake up?",
    options: ["5:30 AM", "6:00 AM", "7:00 AM", "8:00 AM"],
    answer: "7:00 AM",
  },
  {
    question: "Which personality co-founded Google?",
    options: ["Elon Musk", "Steve Jobs", "Larry Page", "Bill Gates"],
    answer: "Larry Page",
  },
  {
    question: "Who is the creator of Python?",
    options: ["Linus Torvalds", "Bjarne Stroustrup", "Guido van Rossum", "Dennis Ritchie"],
    answer: "Guido van Rossum",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}!
        </div>
      ) : (
        <div className="question-section">
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <div className="options">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
