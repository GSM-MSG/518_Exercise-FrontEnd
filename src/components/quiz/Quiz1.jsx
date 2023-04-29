import React from 'react';
import {useState} from 'react';
import styles from '../../styles/quiz.module.css';

function Quiz1({score, page, setPage}) {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [wranswer, setWranswer] = useState(false);

  const onNext = e => {
    e.preventDefault();
    if (value === '하나회') {
      setAnswer(true);
      setWranswer(false);
      setCount(count + 1);
      if (count === 1) {
        score.current = score.current + 1;
        setPage(page + 1);
      }
    } else {
      setWranswer(true);
      setAnswer(false);
      setCount(count + 1);
      if (count === 1) {
        setPage(page + 1);
      }
    }
  };

  return (
    <div className={styles.quizContainer}>
      {answer === false && wranswer === false && (
        <h2 className={styles.division}>1. 단답형</h2>
      )}
      {answer && <h2 className={styles.divisionTrue}>1. 단답형</h2>}
      {wranswer && <h2 className={styles.divisionFalse}>1. 단답형</h2>}
      {answer && <p className={styles.notifyTrue}>정답</p>}
      {wranswer && <p className={styles.notifyFalse}>오답</p>}
      <hr className={styles.quizLine} />
      {answer === false && wranswer === false && (
        <p className={styles.question}>
          1979년 12월 12일 군부 내 사조직 _______를 중심으로 한 신군부 세력이
          군사 반란을 일으켜 군사권을 장악하였다. 이를 ‘12.12 사태’라고 한다.
        </p>
      )}
      {(answer || wranswer) && (
        <p className={styles.faintQuestion}>
          1979년 12월 12일 군부 내 사조직 _______를 중심으로 한 신군부 세력이
          군사 반란을 일으켜 군사권을 장악하였다. 이를 ‘12.12 사태’라고 한다.
        </p>
      )}
      <form onSubmit={onNext}>
        <input
          type="text"
          placeholder="답을 입력해주세요."
          value={value}
          disabled={answer || wranswer ? true : false}
          onChange={e => setValue(e.target.value)}
          className={styles.quizInput}
        />

        {(answer || wranswer) && (
          <div className={styles.commentBox}>
            <p className={styles.commentary}>해설: </p>
            <p className={styles.description}>
              1979년 12월 12일 군부 내 사조직 <b>하나회</b>를 중심으로 한 신군부
              세력이 군사 반란을 일으켜
              <br /> 군사권을 장악하였다. 이를 ‘12.12 사태’라고 한다.
            </p>
          </div>
        )}
        <button type="submit" className={styles.quizBtn}>
          다음
        </button>
      </form>
    </div>
  );
}

export default Quiz1;
