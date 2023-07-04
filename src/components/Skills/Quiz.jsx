import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      questionText: "Which of these sounds best right now?",
      answerOptions: [
        { answerText: "Moving my body" },
        { answerText: "Getting thoughts out of my head" },
        { answerText: "Talking to someone who gets me" },
        { answerText: "Doing something creative" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult("Quiz results");
    }
  };
  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="w-100">
            {showResult ? (
              <div>
                <div>
                  <div>These are your results</div>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <div>
                    <div>
                      <span>Question {currentQuestion + 1}</span>/
                      {questions.length}
                    </div>
                    <div>{questions[currentQuestion].questionText}</div>
                  </div>
                  <div>
                    {questions[currentQuestion].answerOptions.map((answer) => (
                      <div>
                        <button onClick={handleClick}>
                          {answer.answerText}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
