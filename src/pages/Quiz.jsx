import React, { useState } from 'react';
import QuizEl from '../components/QuizEl';
import styles from "../styles/quiz.module.css";

function Quiz() {

    const quizComponents = [
        {
            id: 1,
            question: "퀴즈 1",
            btnText: "다음",
        },
        {
            id: 2,
            question: "퀴즈 2",
            btnText: "다음",
        },
        {
            id: 3,
            question: "퀴즈 3",
            btnText: "다음",
        },
        {
            id: 4,
            question: "퀴즈 4",
            btnText: "다음",
        },
        {
            id: 5,
            question: "퀴즈 5",
            btnText: "다음",
        },
        {
            id: 6,
            question: "다시 풀어보시겠습니까?",
            btnText: "다시 풀어보기",
        }
    ]

    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    return (
        <div className={styles.quiz}>
            {quizComponents.slice(offset, offset + limit).map((quiz)=>(
                <QuizEl
                  key={quiz.id}
                  id={quiz.id}
                  question={quiz.question}
                  btnText={quiz.btnText}
                  page={page}
                  setPage={setPage}
                />
            ))}
        </div>
    );
}

export default Quiz;