import React from 'react';
import {useState} from 'react';
import {MdArrowBackIos} from 'react-icons/md';
import styles from '../styles/moment.module.css';

function MomentEl({
  id,
  question,
  clarification,
  btnText,
  input,
  select,
  page,
  setPage,
}) {
  const [name, setName] = useState('');
  const inputName = e => {
    setName(e.target.value);
  };

  const passPage = () => {
    if (input) {
      if (name === '') {
        alert('이름을 입력해주세요!');
      } else {
        setPage(page + 1);
      }
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.momentBox}>
      {id === 1 ? null : (
        <MdArrowBackIos
          onClick={() => setPage(page - 1)}
          className={styles.backArrow}
        />
      )}

      <p className={styles.question}>{question}</p>
      <p className={styles.clarification}>{clarification}</p>
      {input && (
        <input
          className={styles.nameInput}
          type="text"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={inputName}
        />
      )}
      <button onClick={passPage} className={styles.nextBtn}>
        {btnText}
      </button>
    </div>
  );
}

export default MomentEl;
