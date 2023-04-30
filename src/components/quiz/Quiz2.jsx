import React, {useState} from 'react';
import styles from '../../styles/quiz.module.css';
import O from '../../images/O.png';
import X from '../../images/X.png';
import redO from '../../images/redO.png';
import blueX from '../../images/blueX.png';
import faintO from '../../images/faintO.png';
import faintX from '../../images/faintX.png';

function Quiz2({page, setPage}) {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [wranswer, setWranswer] = useState(false);
  const score = Number(localStorage.getItem("score"));
  
  const successClicked = () => {
    setAnswer(true);
    setWranswer(false);
    setCount(count + 1);
    if(score === 0) {
      localStorage.setItem("score", 1);
    } else if(score === 1) {
      console.log(2, score);
      localStorage.setItem("score", 2);
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
        <h2 className={styles.division}>2. OX문제</h2>
      )}
      {answer && <h2 className={styles.divisionTrue}>2. OX문제</h2>}
      {wranswer && <h2 className={styles.divisionFalse}>2. OX문제</h2>}
      {answer && <p style={{left: "26%"}} className={styles.notifyTrue}>정답</p>}
      {wranswer && <p style={{left: "26%"}} className={styles.notifyFalse}>오답</p>}
      <hr className={styles.quizLine} />
      {answer === false && wranswer === false && (
        <p className={styles.question}>
          1980년 5월 17일, 전두환 등 신군부 세력은 5월 18일 낮 12시를 기점으로
          비상계엄을 전국으로 확대한다는 조치를 발표하였다.
        </p>
      )}
      {(answer || wranswer) && (
        <p className={styles.faintQuestion}>
          1980년 5월 17일, 전두환 등 신군부 세력은 5월 18일 낮 12시를 기점으로
          비상계엄을 전국으로 확대한다는 조치를 발표하였다.
        </p>
      )}
      {answer === false && wranswer === false && (
        <div className={styles.oxContainer}>
          <img src={O} alt="OX" onClick={failClicked} />
          <img src={X} alt="OX" onClick={successClicked}/>
        </div>
      )}
      {answer && (
        <div className={styles.oxContainer}>
          <img src={faintO} alt="OX" onClick={failClicked}/>
          <img src={blueX} alt="OX" />
        </div>
      )}

      {wranswer && (
        <div className={styles.oxContainer}>
          <img src={redO} alt="OX" />
          <img src={faintX} alt="OX" onClick={successClicked}/>
        </div>
      )}
      
      {(answer || wranswer) && (
        <div style={{width: "80%"}} className={styles.oxCommentBox}>
          <h2 style={{width: "18%"}} className={styles.commentary}>해설: </h2>
          <p style={{width: "100%"}} className={styles.description}>
            X / 낮 12시가 아닌 0시(자정)이다.
          </p>
        </div>
      )}
      <button onClick={onNext} className={styles.quizBtn}>
        다음
      </button>
    </div>
  );
}

export default Quiz2;
