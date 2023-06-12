import React, { useState } from "react";
import "./Quiz.scss";
import Container from "../../util/Container";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import uuid from "react-uuid";

const Quiz = () => {
  let [correctAnswer, setCorrectAnswer] = useState(null);
  let [count, setCount] = useState(1);
  const getData = useSelector((state) => state?.amount);

  const getDataFromLocalStorage = useSelector(
    (state) => state?.amount?.[count]?.question
  );

  const prev = (e) => {
    console.log(e);
  };

  const correct = useSelector(
    (state) => state?.amount?.[count]?.correct_answer
  );

  const incorrect = useSelector(
    (state) => state?.amount?.[count]?.incorrect_answers
  );

  const select = (e) => {
    setCount(e);
  };

  const prevCount = () => {
    setCount(count + 1);
  };

  const prevCountRes = () => {
    setCount(count + 1);
    if (correct == correct) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  const stopCount = () => {
    setCount((count = 1));
    setCorrectAnswer((correctAnswer = null));
  };

  return (
    <section>
      <Container>
        <div className="questions">
          {!getData
            ? Loading
            : getData?.map((item, index) => (
                <p
                  onClick={(e) => {
                    prev(index);
                    select(index);
                  }}
                  key={uuid()}
                  className="q__index"
                >
                  {(index += 1)}
                </p>
              ))}
        </div>
        <div className="questions__blok">
          <div className="cnt">
            <h1>
              {count} Question <br /> <br />
              {getDataFromLocalStorage}
            </h1>
            {
              <div className="answers">
                <button onClick={prevCountRes}>{correct}</button>

                <button
                  onClick={prevCount}
                  className="incorrect correct-answer"
                >
                  {incorrect?.[0]}
                </button>
                <button
                  onClick={prevCount}
                  className="incorrect correct-answer"
                >
                  {incorrect?.[1]}
                </button>
                <button
                  onClick={prevCount}
                  className="incorrect correct-answer"
                >
                  {incorrect?.[2]}
                </button>

                <div className="prev__next">
                  <button className="stopBtn" onClick={stopCount}>
                    Stop
                  </button>
                  <span className="countScore">Score {correctAnswer}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Quiz;
