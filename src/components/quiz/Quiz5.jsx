import React, {useState} from 'react';
import styles from '../../styles/quiz.module.css';

function Quiz5({score, page, setPage}) {
  const [count, setCount] = useState(0);
  const [choice1, setChoice1] = useState(false);
  const [choice2, setChoice2] = useState(false);
  const [choice3, setChoice3] = useState(false);
  const [choice4, setChoice4] = useState(false);

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
      score.current = score.current + 1;
    } else if (num === 3) {
      setCount(count + 1);
      setChoice1(false);
      setChoice2(false);
      setChoice3(true);
      setChoice4(false);
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

  if (choice3) {
    console.log(choice3);
  }

  return (
    <div className={styles.quizContainer}>
      {!choice1 && !choice2 && !choice3 && !choice4 && (
        <h2 className={styles.division}>5.객관식 문제</h2>
      )}

      {choice2 && <h2 className={styles.divisionTrue}>5.객관식 문제</h2>}
      {(choice1 || choice3 || choice4) && (
        <h2 className={styles.divisionFalse}>5.객관식 문제</h2>
      )}

      {choice2 && (
        <p style={{left: '30%'}} className={styles.notifyTrue}>
          정답
        </p>
      )}
      {(choice1 || choice3 || choice4) && (
        <p style={{left: '30%'}} className={styles.notifyFalse}>
          오답
        </p>
      )}
      <hr className={styles.quizLine} />
      {!choice1 && !choice2 && !choice3 && !choice4 && (
        <p className={styles.question}>
          계엄군의 집단 발포 후, 시민들은 경찰서 등 에서 획득한 무기로 무장하고,
          _____을 조직하였다. _____에 들어갈 말은?
        </p>
      )}
      {(choice1 || choice2 || choice3 || choice4) && (
        <p className={styles.faintQuestion}>
          계엄군의 집단 발포 후, 시민들은 경찰서 등 에서 획득한 무기로 무장하고,
          _____을 조직하였다. _____에 들어갈 말은?
        </p>
      )}
      {!choice1 && !choice2 && !choice3 && !choice4 && (
        <div className={styles.multipleBox}>
          <button onClick={() => onChoice(1)}>1. 예비군</button>
          <button onClick={() => onChoice(2)}>2. 시민군</button>
          <button onClick={() => onChoice(3)}>3. 독립군</button>
          <button onClick={() => onChoice(4)}>4. 학생군</button>
        </div>
      )}
      {choice1 && (
        <div className={styles.multipleBox}>
          <button style={{border: '1px solid #e95959', color: '#e95959'}}>
            1. 예비군
          </button>
          <button onClick={() => onChoice(2)}>2. 시민군</button>
          <button onClick={() => onChoice(3)}>3. 독립군</button>
          <button onClick={() => onChoice(4)}>4. 학생군</button>
        </div>
      )}
      {choice2 && (
        <div className={styles.multipleBox}>
          <button onClick={() => onChoice(1)}>1. 예비군</button>
          <button style={{border: '1px solid #598ae9', color: '#598ae9'}}>
            2. 시민군
          </button>
          <button onClick={() => onChoice(3)}>3. 독립군</button>
          <button onClick={() => onChoice(4)}>4. 학생군</button>
        </div>
      )}
      {choice3 && (
        <div className={styles.multipleBox}>
          <button onClick={() => onChoice(1)}>1. 예비군</button>
          <button onClick={() => onChoice(2)}>2. 시민군</button>
          <button style={{border: '1px solid #e95959', color: '#e95959'}}>
            3. 독립군
          </button>
          <button onClick={() => onChoice(4)}>4. 학생군</button>
        </div>
      )}
      {choice4 && (
        <div className={styles.multipleBox}>
          <button onClick={() => onChoice(1)}>1. 예비군</button>
          <button onClick={() => onChoice(2)}>2. 시민군</button>
          <button onClick={() => onChoice(3)}>3. 독립군</button>
          <button style={{border: '1px solid #e95959', color: '#e95959'}}>
            4. 학생군
          </button>
        </div>
      )}
      {(choice1 || choice2 || choice3 || choice4) && (
        <div style={{width: '104%'}} className={styles.multipleCommentBox}>
          <h2 className={styles.commentary} style={{width: '14%'}}>
            해설:{' '}
          </h2>
          <p className={styles.description} style={{width: '100%'}}>
            2번 / 계엄군의 집단 발포 후, 시민들은 경찰서 등 에서 획득한 무기로
            무장하고,시민군을 조직하였다.{' '}
          </p>
        </div>
      )}
      <button onClick={onNext} className={styles.quizBtn}>
        다음
      </button>
    </div>
  );
}

export default Quiz5;
