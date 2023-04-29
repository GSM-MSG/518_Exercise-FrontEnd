import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from "../styles/quiz.module.css";
import Quiz1 from './quiz/Quiz1';
import Quiz2 from './quiz/Quiz2';
import Quiz3 from './quiz/Quiz3';
import Quiz4 from './quiz/Quiz4';
import Quiz5 from './quiz/Quiz5';
import QuizEnd from './quiz/QuizEnd';
import QuizStart from "./quiz/QuizStart";

function QuizEl({page, setPage}) {

  const [count, setCount] = useState(0);
  const score = useRef(0);
  
  return (
    <div className={styles.quizBox}>
      {page === 1 && <QuizStart count={count} setCount={setCount} page={page} setPage={setPage} score={score} />}
      {page === 2 && <Quiz1 count={count} setCount={setCount} page={page} setPage={setPage} score={score} />}
      {page === 3 && <Quiz2 count={count} setCount={setCount} page={page} setPage={setPage} score={score} />}
      {page === 4 && <Quiz3 count={count} setCount={setCount} page={page} setPage={setPage} score={score} />}
      {page === 5 && <Quiz4 count={count} setCount={setCount} page={page} setPage={setPage} score={score} />}
      {page === 6 && <Quiz5 count={count} setCount={setCount} page={page} setPage={setPage} score={score} />}
      {page === 7 && <QuizEnd count={count} setCount={setCount} page={page} setPage={setPage} score={score} />}
    </div>
  );
}

export default QuizEl;
