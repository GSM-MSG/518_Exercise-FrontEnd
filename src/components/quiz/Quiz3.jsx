import React, {useState} from 'react';
import styles from '../../styles/quiz.module.css';
import O from '../../images/O.png';
import X from '../../images/X.png';
import redX from '../../images/redX.png';
import blueO from '../../images/blueO.png';
import faintO from '../../images/faintO.png';
import faintX from '../../images/faintX.png';

function Quiz3({page, setPage}) {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [wranswer, setWranswer] = useState(false);
  const score = Number(localStorage.getItem('score'));

  const successClicked = () => {
    setAnswer(true);
    setWranswer(false);
    setCount(count + 1);
    if (score === 0) {
      localStorage.setItem('score', 1);
    } else if (score === 1) {
      localStorage.setItem('score', 2);
    } else if (score === 2) {
      localStorage.setItem('score', 3);
    }
  };

  const failClicked = () => {
    setWranswer(true);
    setAnswer(false);
    setCount(count + 1);
  };

  const onNext = () => {
    if (count >= 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.quizContainer}>
      {answer === false && wranswer === false && (
        <h2 className={styles.division}>3. OX문제</h2>
      )}
      {answer && <h2 className={styles.divisionTrue}>3. OX문제</h2>}
      {wranswer && <h2 className={styles.divisionFalse}>3. OX문제</h2>}
      {answer && (
        <p style={{left: '26%'}} className={styles.notifyTrue}>
          정답
        </p>
      )}
      {wranswer && (
        <p style={{left: '26%'}} className={styles.notifyFalse}>
          오답
        </p>
      )}
      <hr className={styles.quizLine} />
      {answer === false && wranswer === false && (
        <p className={styles.question}>
          1980년 5월 18일. 계엄령 확대에 반발한 전남대학교 학생들의 시위를
          공수부대원들이 무자비하게 진압하였다.
        </p>
      )}
      {(answer || wranswer) && (
        <p className={styles.faintQuestion}>
          1980년 5월 18일. 계엄령 확대에 반발한 전남대학교 학생들의 시위를
          공수부대원들이 무자비하게 진압하였다.
        </p>
      )}
      {answer === false && wranswer === false && (
        <div className={styles.oxContainer}>
          <img src={O} alt="OX" onClick={successClicked} />
          <img src={X} alt="OX" onClick={failClicked} />
        </div>
      )}
      {answer && (
        <div className={styles.oxContainer}>
          <img src={blueO} alt="OX" />
          <img src={faintX} alt="OX" onClick={failClicked} />
        </div>
      )}

      {wranswer && (
        <div className={styles.oxContainer}>
          <img src={faintO} alt="OX" onClick={successClicked} />
          <img src={redX} alt="OX" />
        </div>
      )}

      {(answer || wranswer) && (
        <div className={styles.oxCommentBox}>
          <h2 className={styles.commentary}>해설: </h2>
          <p className={styles.description}>
            O / 1980년 5월 18일. 계엄령 확대에 반발한 전남대학교 학생들의 시위를
            공수부대원들이 무자비하게 진압하였다.
          </p>
        </div>
      )}
      <button onClick={onNext} className={styles.quizBtn}>
        다음
      </button>
    </div>
  );
}

export default Quiz3;
