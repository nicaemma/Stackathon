import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TbCircleLetterA,
  TbCircleLetterB,
  TbCircleLetterC,
  TbCircleLetterD,
  TbLetterA,
  TbLetterB,
  TbLetterC,
  TbLetterD,
} from "react-icons/tb";

const Quiz = () => {
  const questions = [
    {
      questionText: "Which of these sounds best right now?",
      answerOptions: [
        { option: "A", answerText: "Moving my body" },
        { option: "B", answerText: "Getting thoughts out of my head" },
        { option: "C", answerText: "Talking to someone who gets me" },
        { option: "D", answerText: "Doing something creative" },
      ],
    },
    {
      questionText: "My ideal morning routine is...",
      answerOptions: [
        { option: "A", answerText: "Journaling" },
        { option: "B", answerText: "A workout or walk" },
        { option: "C", answerText: "Drinking a cup of coffee or tea" },
        { option: "D", answerText: "10 minutes of quiet time" },
      ],
    },
    {
      questionText: "My top priority right now is...",
      answerOptions: [
        { option: "A", answerText: "Feeling connected to others" },
        { option: "B", answerText: "Achieving my goals" },
        { option: "C", answerText: "My health and well being" },
        { option: "D", answerText: "Making life more fun and enjoyable" },
      ],
    },
    {
      questionText: "A goal I'd like to achieve in the near future is...",
      answerOptions: [
        {
          option: "A",
          answerText: "Being part of/contributing to my community",
        },
        { option: "B", answerText: "Being kinder to myself" },
        { option: "A", answerText: "Spending more time on my hobbies" },
        { option: "D", answerText: "Furthing my education/personal growth" },
      ],
    },
    {
      questionText: "I feel the most motivated when...",
      answerOptions: [
        { option: "A", answerText: "I finish a good workout" },
        { option: "B", answerText: "I'm supported and encouraged by others" },
        {
          option: "C",
          answerText: "I feel like I'm fulfilling my purpose in life",
        },
        {
          option: "D",
          answerText: "I check something important off my to-do list",
        },
      ],
    },
    {
      questionText: "What I've been struggling with lately...",
      answerOptions: [
        { option: "A", answerText: "Feeling overwhelmed" },
        { option: "B", answerText: "Feeling disconnected from others" },
        { option: "C", answerText: "Feeling disorganized" },
        { option: "D", answerText: "Not knowing what direction I'm going in" },
      ],
    },
  ];

  const [result, setResult] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleClick = async () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setResult("Your results will be in your inbox in <5 minutes!");
      setShowResult(result);
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
                          {/* <div>
                            <Link to="/signin">
                              <div className="bg-slate-100 max-w-[200px] hover:bg-slate-200 w-full m-auto text-center rounded-md shadow-xl p-4">
                                Sign in to access
                              </div>
                            </Link>
                          </div> */}
                          <div>{result}</div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-[16px] rounded-md shadow-lg p-8 bg-indigo-100 mx-5 my-10">
                          <div>
                            <div className="pb-1 text-[12px]">
                              <span>{currentQuestion + 1}</span> /{" "}
                              {questions.length}
                            </div>
                            <div className="text-[20px] pr-3 py-2">
                              {questions[currentQuestion].questionText}
                            </div>
                          </div>
                          <div>
                            {questions[currentQuestion].answerOptions.map(
                              (answer) => {
                                return (
                                  <div className="pt-4" key={answer.id}>
                                    <button
                                      onClick={handleClick}
                                      className="flex flex-rows"
                                    >
                                      {answer.option === "A" && (
                                        <div className="pr-3">
                                          {" "}
                                          <TbLetterA size={25} />{" "}
                                        </div>
                                      )}
                                      {answer.option === "B" && (
                                        <div className="pr-3">
                                          {" "}
                                          <TbLetterB size={25} />{" "}
                                        </div>
                                      )}
                                      {answer.option === "C" && (
                                        <div className="pr-3">
                                          {" "}
                                          <TbLetterC size={25} />{" "}
                                        </div>
                                      )}
                                      {answer.option === "D" && (
                                        <div className="pr-3">
                                          {" "}
                                          <TbLetterD size={25} />{" "}
                                        </div>
                                      )}
                                      <div> {answer.answerText}</div>
                                    </button>
                                  </div>
                                );
                              }
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
