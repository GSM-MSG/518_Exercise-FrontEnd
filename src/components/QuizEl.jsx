import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import styles from "../styles/quiz.module.css";

function QuizEl({id, question, page, setPage, btnText}) {

  const passPage = () => {
    if(id === 6) {
        setPage(page - 5);
    } else {
        setPage(page + 1);
    }
  }

  return (
    <div className={styles.quizBox}>
      {id === 1 | id === 6  ? null : (
        <MdArrowBackIos
          onClick={() => setPage(page - 1)}
          className={styles.backArrow}
        />
      )}

      <p className={styles.question}>{question}</p>
      
        <button onClick={passPage} className={styles.nextBtn}>
          {btnText}
        </button>
    </div>
  );
}

export default QuizEl;
