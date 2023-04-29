import React from 'react';
import styles from '../../styles/quiz.module.css';
import {Link} from 'react-router-dom';

function QuizEnd({score, setPage}) {
  const onFirst = () => {
    setPage(1);
  };

  return (
    <div className={styles.endContainer}>
      <h2 className={styles.celebration}>
        총 {score.current}문제를 맞추셨어요.
        <br />
        축하드려요!🎉
      </h2>
      <div className={styles.endBtnBox}>
        <button onClick={onFirst} className={styles.reStartBtn}>
          다시 풀기
        </button>
        <Link to="/">
          <button className={styles.homeBtn}>홈으로</button>
        </Link>
      </div>
    </div>
  );
}

export default QuizEnd;
