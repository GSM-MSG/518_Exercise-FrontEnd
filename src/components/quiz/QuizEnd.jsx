import React from 'react';
import styles from '../../styles/quiz.module.css';
import {Link} from 'react-router-dom';

function QuizEnd({setPage}) {
  const onFirst = () => {
    setPage(1);
  };
  const score = Number(localStorage.getItem("score"));
  
  return (
    <div className={styles.endContainer}>
      <h2 className={styles.celebration}>
        총 {score}문제를 맞추셨어요.
        <br />
        축하드려요!🎉
      </h2>
      <div className={styles.endBtnBox}>
        <button onClick={onFirst} className={styles.reStartBtn}>
          다시 풀기
        </button>
        <Link to="/">
          <button onClick={()=>localStorage.setItem("score", 0)} className={styles.homeBtn}>홈으로</button>
        </Link>
      </div>
    </div>
  );
}

export default QuizEnd;
