import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    {
      questionText: "My deal morning routine is...",
      answerOptions: [
        { answerText: "Journaling" },
        { answerText: "A workout or walk" },
        { answerText: "Drinking a cup of coffee or tea" },
        { answerText: "10 minutes of quiet time" },
      ],
    },
    {
      questionText: "My top priority right now is...",
      answerOptions: [
        { answerText: "Feeling connected to others" },
        { answerText: "Achieving my goals" },
        { answerText: "My health and well being" },
        { answerText: "Making life more fun and enjoyable" },
      ],
    },
    {
      questionText: "A goal I'd like to achieve in the near future is...",
      answerOptions: [
        { answerText: "Being part of/contributing to my community" },
        { answerText: "Being kinder to myself" },
        { answerText: "Spending more time on my hobbies" },
        { answerText: "Furthing my education/personal growth" },
      ],
    },
    {
      questionText: "I feel the most motivated when...",
      answerOptions: [
        { answerText: "I finish a good workout" },
        { answerText: "I'm supported and encouraged by others" },
        { answerText: "I feel like I'm fulfilling my purpose in life" },
        { answerText: "I check something important off my to-do list" },
      ],
    },
    {
      questionText: "What I've been struggling with lately...",
      answerOptions: [
        { answerText: "Feeling overwhelmed" },
        { answerText: "Feeling disconnected from others" },
        { answerText: "Feeling disorganized" },
        { answerText: "Not knowing what direction I'm going in" },
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
        <div className="font-sora w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('/img/background5.png')]">
          <div className="w-full h-screen top-20 bg-cover bg-white bg-opacity-30">
            <div className="max-w-[960px] m-auto p-3 flex flex-col gap-8 items-center">
              <div className="max-w-[550px] flex flex-col gap-2 items-center bg-indigo-200 rounded-lg shadow-xl mt-20 p-4">
                <div className="flex items-center justify-center m-auto">
                  <div>
                    {showResult ? (
                      <div>
                        <div>
                          <div>
                            <Link to="/signin">
                              <div className="bg-slate-100 max-w-[200px] hover:bg-slate-200 w-full m-auto text-center rounded-md shadow-xl p-4">
                                Sign in to access
                              </div>
                            </Link>
                          </div>
                          <div>
                            {
                              "Results of this Self Care Quiz will be emailed to you!"
                            }
                          </div>
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
                            {questions[currentQuestion].answerOptions.map(
                              (answer) => (
                                <div key={answer.id}>
                                  <button onClick={handleClick}>
                                    {answer.answerText}
                                  </button>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
