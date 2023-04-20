import React from 'react';
import styles from '../styles/home.module.css';
import ARMY from '../images/army.png';
import TANK from '../images/tank.png';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.frostbite}></div>
      <p className={styles.homeTitle}>그날의 광주</p>
      <p className={styles.homeText}>5.18 그때의 광주는 어떤 모습이었을까요?</p>
      <img src={ARMY} alt="5.18 군인 이미지" className={styles.army} />
      <img src={TANK} alt="5.18 탱크 이미지" className={styles.tank} />
    </div>
  );
}

export default Home;
