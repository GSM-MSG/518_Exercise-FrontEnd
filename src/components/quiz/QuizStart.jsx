import React from 'react';
import styles from '../../styles/quiz.module.css';
import quizLogo from '../../images/quizLogo.png';

function QuizStart({page, setPage}) {

  const onNext = () => {
    setPage(page + 1);
  };
  
  return (
    <div className={styles.startContainer}>
      <div className={styles.startTexts}>
        <img src={quizLogo} alt="퀴즈 로고" className={styles.quizLogo} />
        <h2 className={styles.startTitle}>Q 5.18 퀴즈풀기</h2>
        <p className={styles.startQuestion}>
          나는 과연 5.18에 대해 얼마나
          <br /> 알고 있을까?
        </p>
      </div>
      <button onClick={onNext} className={styles.quizBtn}>
        테스트 시작하기
      </button>
    </div>
  );
}

export default QuizStart;
