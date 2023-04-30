import React, {useState} from 'react';
import styles from '../../styles/quiz.module.css';

function Quiz4({page, setPage}) {
  const [count, setCount] = useState(0);
  const [choice1, setChoice1] = useState(false);
  const [choice2, setChoice2] = useState(false);
  const [choice3, setChoice3] = useState(false);
  const [choice4, setChoice4] = useState(false);
  const score = localStorage.getItem("score");

  const onChoice = num => {
    if (num === 1) {
      setCount(count + 1);
      setChoice1(true);
      setChoice2(false);
      setChoice3(false);
      setChoice4(false);
    } else if (num === 2) {
      setCount(count + 1);
      setChoice1(false);
      setChoice2(true);
      setChoice3(false);
      setChoice4(false);
    } else if (num === 3) {
      setCount(count + 1);
      setChoice1(false);
      setChoice2(false);
      setChoice3(true);
      setChoice4(false);
      if(score === 0) {
        localStorage.setItem("score", 1);
      } else if(score === 1) {
        localStorage.setItem("score", 2);
      } else if(score === 2) {
        localStorage.setItem("score", 3);
      } else if(score === 3) {
        localStorage.setItem("score", 4);
      }
    } else if (num === 4) {
      setCount(count + 1);
      setChoice1(false);
      setChoice2(false);
      setChoice3(false);
      setChoice4(true);
    }
  };

  const onNext = () => {
    if (count >= 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.quizContainer}>
      {!choice1 && !choice2 && !choice3 && !choice4 && (
        <h2 className={styles.division}>4.객관식 문제</h2>
      )}
      {choice3 && <h2 className={styles.divisionTrue}>4.객관식 문제</h2>}
      {(choice1 ||
        choice2 ||
        choice4 )&& <h2 className={styles.divisionFalse}>4.객관식 문제</h2>}

      {choice3 && (
        <p style={{left: '30%'}} className={styles.notifyTrue}>
          정답
        </p>
      )}
      {(choice1 ||
        choice2 ||
        choice4) && (
          <p style={{left: '30%'}} className={styles.notifyFalse}>
            오답
          </p>
        )}
      <hr className={styles.quizLine} />
      {!choice1 && !choice2 && !choice3 && !choice4 && (
        <p className={styles.question}>
          1980년 5월 18일. 계엄령 확대에 반발한 전남대학교 학생들의 시위를
          공수부대원들이 무자비하게 진압하였다.
        </p>
      )}
      {(choice1 ||
        choice2 ||
        choice3 ||
        choice4) && (
          <p className={styles.faintQuestion}>
            1980년 5월 18일. 계엄령 확대에 반발한 전남대학교 학생들의 시위를
            공수부대원들이 무자비하게 진압하였다.
          </p>
        )}
      {!choice1 && !choice2 && !choice3 && !choice4 && (
        <div className={styles.multipleBox}>
          <button onClick={()=>onChoice(1)}>1. 화려한 외출</button>
          <button onClick={()=>onChoice(2)}>2. 화려한 소풍</button>
          <button onClick={()=>onChoice(3)}>3. 화려한 휴가</button>
          <button onClick={()=>onChoice(4)}>4. 화려한 휴일</button>
        </div>
      )}
      {choice1 && (
        <div className={styles.multipleBox}>
          <button style={{border: "1px solid #e95959", color: "#e95959"}}>1. 화려한 외출</button>
          <button onClick={()=>onChoice(2)}>2. 화려한 소풍</button>
          <button onClick={()=>onChoice(3)}>3. 화려한 휴가</button>
          <button onClick={()=>onChoice(4)}>4. 화려한 휴일</button>
        </div>
      )}
      {choice2 && (
        <div className={styles.multipleBox}>
          <button onClick={()=>onChoice(1)}>1. 화려한 외출</button>
          <button style={{border: "1px solid #e95959", color: "#e95959"}}>2. 화려한 소풍</button>
          <button onClick={()=>onChoice(3)}>3. 화려한 휴가</button>
          <button onClick={()=>onChoice(4)}>4. 화려한 휴일</button>
        </div>
      )}
      {choice3 && (
        <div className={styles.multipleBox}>
          <button onClick={()=>onChoice(1)}>1. 화려한 외출</button>
          <button onClick={()=>onChoice(2)}>2. 화려한 소풍</button>
          <button style={{border: "1px solid #598ae9", color: "#598ae9"}}>3. 화려한 휴가</button>
          <button onClick={()=>onChoice(4)}>4. 화려한 휴일</button>
        </div>
      )}
      {choice4 && (
        <div className={styles.multipleBox}>
          <button onClick={()=>onChoice(1)}>1. 화려한 외출</button>
          <button onClick={()=>onChoice(2)}>2. 화려한 소풍</button>
          <button onClick={()=>onChoice(3)}>3. 화려한 휴가</button>
          <button style={{border: "1px solid #e95959", color: "#e95959"}}>4. 화려한 휴일</button>
        </div>
      )}
      {(choice1 || choice2 || choice3 || choice4) && (
          <div style={{width: "80%"}} className={styles.multipleCommentBox}>
            <h2 className={styles.commentary} style={{width: "18%"}}>해설: </h2>
            <p className={styles.description} style={{width: "100%"}}>3번/ 화려한 휴가</p>
          </div>
        )}
      <button onClick={onNext} className={styles.quizBtn}>
        다음
      </button>
    </div>
  );
}

export default Quiz4;
