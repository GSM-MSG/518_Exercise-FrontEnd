import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import QuizEl from '../components/QuizEl';
import styles from "../styles/quiz.module.css";

function Quiz() {

    const quizId = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
    ];

    const [limit] = useState(1);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    return (
        <div className={styles.quiz}>
            <Navbar />
            {quizId.slice(offset, offset + limit).map((quiz)=>(
                <QuizEl
                  key={quiz.id}
                  page={page}
                  setPage={setPage}
                />
            ))}
        </div>
    );
}

export default Quiz;