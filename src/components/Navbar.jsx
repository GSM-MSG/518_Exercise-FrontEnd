import React from 'react';
import styles from '../styles/navbar.module.css';
import {TbMessageCircle2Filled} from 'react-icons/tb';
import Logo from '../images/Logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInBox}>
        <div className={styles.navBox1}>
          <img src={Logo} alt="5.18 로고" className={styles.logo} />
          <b className={styles.title}> ㆍ 5.18 그날의 광주</b>
          <div>
            <ul className={styles.menuList}>
              <Link to="/">
                <li>홈</li>
              </Link>
              <Link to="/story">
                <li>전개과정</li>
              </Link>
              <Link to="/quiz">
                <li>퀴즈</li>
              </Link>
<<<<<<< HEAD
              <li>캐릭터 유형검사</li>
=======
              <Link to="/moment">
                <li>캐릭터 유형검사</li>
              </Link>
>>>>>>> 5b47a4600dccac9433f4b83f915672e0409c44fb
            </ul>
          </div>
        </div>
        <div className={styles.navBox2}>
          <div className={styles.messageCircle}>
            <TbMessageCircle2Filled />
          </div>
          <a href="https://open.kakao.com/o/sSYV7xhf">
            <b className={styles.complain}>문의하기</b>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
