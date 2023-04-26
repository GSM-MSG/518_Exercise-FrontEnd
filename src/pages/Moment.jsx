import React from 'react';
import { useState } from 'react';
import MomentEl from '../components/MomentEl';
import styles from "../styles/moment.module.css";


function Moment() {

    const momentComponents = [
        {
            id: 1,
            question: "만약 그 당시 광주로 돌아간다면 나는 어떤 직업일까?",
            clarification: "그 때의 나라면? 테스트를 진행해 어떤 직업일지 알아보세요!",
            btnText: "테스트 시작하기",
            input: false,
            select: false,
        },
        {
            id: 2,
            question: "테스트를 진행하기 전에 이름을 입력해주세요.",
            clarification: "유형 카드에 이름을 넣기 위해서에요!",
            btnText: "다음",
            input: true,
            select: false,
        },
        {
            id: 3,
            question: "계엄군과 마주쳤다 나의 선택은?",
            clarification: "당신은 광주 시내에서 집을 가던길에 계엄군의 시위대 진압 과정에 휘말렸습니다.",
            btnText: "다음",
            input: false,
            select: true,
        },
    ];

    const [limit, setLimit] = useState(1);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    return (
        <div className={styles.moment}>
            {momentComponents.slice(offset, offset + limit).map((moment)=>(
                <MomentEl
                  key={moment.id}
                  id={moment.id}
                  question={moment.question}
                  clarification={moment.clarification}
                  btnText={moment.btnText}
                  input={moment.input}
                  select={moment.select}
                  page={page}
                  setPage={setPage}
                />
            ))}
        </div>
    );
}

export default Moment;