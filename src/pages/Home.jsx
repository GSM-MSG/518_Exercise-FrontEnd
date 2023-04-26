import React from 'react';
import styles from '../styles/home.module.css';
import Gwangju from '../images/Gwangju.png';
import thatDay from '../images/thatDay.png';
import Navbar from '../components/Navbar';
import Pine1 from '../images/Pine1.png';
import Pine2 from '../images/Pine2.png';
import Pine3 from '../images/Pine3.png';
import Tank from '../images/Tank.png';
import home2Title from "../images/home2Title.png";
import home2ImgBundle from "../images/home2ImgBundle.png";
import Weed from '../images/Weed.png';
import Martyrs from '../images/Martyrs.png';
import home3Title from "../images/home3Title.png";
import home2ImgBundle2 from "../images/home2ImgBundle2.png";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home1}>
        <Navbar />
        <img className={styles.homeTitle} src={thatDay} alt="그날의" />
        <img className={styles.homeTitle2} src={Gwangju} alt="광주" />
        <p className={styles.repeatText}>5.18 열흘 간의 항쟁 - 5.18 열흘 간의 항쟁 - 5.18 열흘 간의 항쟁 - 5.18 열흘 간의 항쟁 - 5.18 열흘 간의 항쟁 - 5.18 열흘 간의 항쟁 - 5.18 열흘 간의 항쟁 - 5.18 열흘 간의 항쟁 - 5.18 열흘 간의</p>
        <div className={styles.remembranceText}>
          <div className={styles.inRemembrance}>
            <div className={styles.whiteBox1}></div>
            <p className={styles.inRemembranceText}>43주년 기념</p>
            <div className={styles.whiteBox1}></div>
          </div>
          <div className={styles.whiteBox2}></div>
          <div className={styles.inRemembrance}>
            <div className={styles.whiteBox1}></div>
            <p className={styles.inRemembranceText}>43주년 기념</p>
            <div className={styles.whiteBox1}></div>
          </div>
        </div>
        <p className={styles.repeatText2}>/518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518</p>
        <div className={styles.home1FootBg}></div>
      </div>
      <div className={styles.home2}>
        <img className={styles.pine1} src={Pine1} alt="소나무1" />
        <hr className={styles.line1} />
        <p className={styles.line1Text}>5·18 민주화 운동 열흘간의 항쟁</p>
        <img className={styles.pine2} src={Pine2} alt="소나무2" />
        <hr className={styles.line2} />
        <p className={styles.line2Text}>
          May 18 Democratic Movement's 10-day uprising
        </p>
        <img className={styles.tank} src={Tank} alt="탱크" />
        <p className={styles.year}>1980.</p>
        <img src={home2Title} alt="날짜" className={styles.home2Title} />
        <button className={styles.toStoryBtn}>전개과정 보러가기</button>
      </div>
      <div className={styles.home2ImgContainer}>
        <div className={styles.home2Imgs}>
          <img src={home2ImgBundle} alt="518이미지 묶음" style={{width: "100%"}}/>
          <img src={home2ImgBundle2} alt="518이미지 묶음" style={{width: "94%"}}/>
        </div>
        <hr className={styles.line1} />
        <hr className={styles.line2} />
      </div>
      <div className={styles.home3}>
        <h2 className={styles.martyrs}>윤상원 열사 // 尹祥源</h2>
        <img className={styles.pine3} src={Pine3} alt="소나무3" />
        <p className={styles.phrase}>
          "우리는 오늘 패배하지만, 내일의 역사는 우리를 <br /> 승리자로 만들
          것이다."
        </p>
        <p className={styles.pharseEn}>
          "We are defeated today, but tomorrow's history will make usI will make
          you a winner."
        </p>
        <p className={styles.narration}>
          -1980년 5월 26일 저녁, 계엄군의 진압을 앞두고
        </p>
        <img className={styles.home3Title} src={home3Title} alt="윤상원열사 명언" />
        <img className={styles.martyrsImg} src={Martyrs} alt="윤상원 열사" />
        <hr className={styles.line1}/>
        <hr className={styles.line2}/>
        <hr className={styles.line3}/>
        <h2 className={styles.year2}>1959.04.20</h2>
        <h2 className={styles.year3}>1980.05.30</h2>
        <img className={styles.weed} src={Weed} alt="식물" />
        <p className={styles.repeatText3}>/518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518 // 518</p>
      </div>
      <footer className={styles.homeFooter}>
        <ul className={styles.contactList}>
          <li>문의</li>
          <li>우{')'} 62423 광주광역시 광산구 상무대로 312</li>
          <li>
            교무실 062{')'}949-6800(근무 시간 : 평일 오전 08:30~ 오후 16:30)
          </li>
          <li>
            행정실 062{')'}949-6806(근무 시간 : 평일 오전 08:30~ 오후 16:30){' '}
          </li>
          <li>팩스 062{')'}949-6899(평일야간, 휴일)</li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
