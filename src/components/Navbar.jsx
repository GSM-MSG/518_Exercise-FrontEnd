import React from 'react';
import styles from '../styles/navbar.module.css';
import {TbMessageCircle2Filled} from 'react-icons/tb';
import LOGO from '../images/logo.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInBox}>
        <div className={styles.navBox1}>
          <img src={LOGO} alt="5.18 로고" className={styles.logo}/>
          <b className={styles.title}> ㆍ 5.18 그날의 광주</b>
          <div>
            <ul className={styles.menuList}>
              <li>홈</li>
              <li>전개과정</li>
              <li>퀴즈</li>
              <li>캐릭터 유형검사</li>
            </ul>
          </div>
        </div>
        <div className={styles.navBox2}>
          <div className={styles.messageCircle}>
            <TbMessageCircle2Filled />
          </div>
          <b className={styles.complain}>문의하기</b>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;