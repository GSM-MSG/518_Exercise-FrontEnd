import styles from '../styles/story.module.css';
import Description from '../components/Description';

import Storybg from '../images/story_bg.png';
import Vector from '../images/vector.png';
import Blood from '../images/blood.png';
import image1 from '../images/image 1.png';
import image2 from '../images/image 2.png';
import image3 from '../images/image 3.png';
import image4 from '../images/image 4.png';
import image5 from '../images/image 5.png';
import image6 from '../images/image 6.png';
import image7 from '../images/image 7.png';
import image8 from '../images/image 8.png';
import image9 from '../images/image 9.png';
import image10 from '../images/image 10.png';
import image11 from '../images/image 11.png';
import image12 from '../images/image 12.png';

function Story() {
  return (
    <div className={styles.storyBox}>
      <div>
        <img className={styles.storyBg} src={Storybg} alt="Story 배경" />
      </div>
      <div>
        <img className={styles.vector} src={Vector} alt="그래프바" />
      </div>
      <div className={styles.storyDivOut}>
        <div className={styles.storyDiv}>
          <h1>5.18 열흘간의 항쟁_</h1>
          <div className={styles.descriptionBlack}>
            <div className={styles.description}>
              <Description
                color1="#fff"
                color2="#c8c8c8"
                title1="1979.10.26"
                title2="10.26 사태"
                explain1=""
                explain2=""
                explain3=""
              />
            </div>
            <div className={styles.description1}>
              <Description
                color1="#fff"
                color2="#c8c8c8"
                title1="1979.12.12"
                title2="군사정변"
                explain1="1979년 12월 12일 내 불법 사조직인 하나회의 멤버 전두환이"
                explain2="주도하여 일으킨 군사 쿠데타이다."
              />
              <div className={styles.imageBox}>
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
              </div>
            </div>
            <div className={styles.description2}>
              <Description
                color1="#fff"
                color2="#c8c8c8"
                title1="1980.5.17"
                title2="계엄령 확대"
                explain1="1980년 5월 18일 0시를 기준으로 당시 제주도를 제외한 지역만"
                explain2="한정하여 발령되어 있었던 비상계엄을 전국으로 확대한 조치이다."
              />
              <img src={image3} alt="image3" />
            </div>
            <div className={styles.description3}>
              <Description
                color1="#fff"
                color2="#c8c8c8"
                title1="1980.5.18"
                title2="전남대 학생과 공수 부대 최초 출동"
                explain1="계엄령이 전국으로 확대된 5월 18일 당일 아침 9시 이후, 텔레비전 방송, 라디오, 신문을 통해 비상계엄 전국 확대 소식이 보도됐다. 전남대학"
                explain2="교 학생 100여 명은 18일 오전에 교문 출입을 저지하는 공수부대원에 돌을 던지기 시작했고, 이로 인해 공수부대 측에서 부상자가 발생하자,"
                explain3="이에 분개한 공수부대원으로 말미암아 학생들은 구타를 당했다."
              />
              <img src={image4} alt="image4" />
            </div>
            <div className={styles.description4}>
              <Description
                color1="#fff"
                color2="#c8c8c8"
                title1="1980.5.18 - 16시"
                title2="계엄군의 무차별 진압"
                explain1="신군부는 신속하고 강력한 시위진압을 위해 5월 18일 오후 4시에 제7공수여단을 시내에 투입했다. 제7공수여단은 시위 학생이 아닌 일반 행"
                explain2="인들에게도 무차별 폭력을 가했다. 이에 학생들은 반발하며 광주 도심으로 옮겨가 시위를 계속했으나 계엄군이 곤봉과 대검으로 학생과 일"
                explain3="반 시민을 가리지 않고 살상했다."
              />
              <div className={styles.imageBox}>
                <img src={image5} alt="image5" />
                <img src={image6} alt="image6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.blood1} src={Blood} alt="blood" />
      <img className={styles.blood2} src={Blood} alt="blood" />
      <div className={styles.storyDiv}>
        <div className={styles.Description5}>
          <Description
            color1="#000"
            color2="#4d4d4d"
            title1="1980.5.19"
            title2='작전명 "화려한 휴가"'
            explain1="1980년 5월 19일 공수부대는‘ 화려한 휴가' - 즉 광주지역 전면 점령을 위한 작전을 수행한다. "
            explain2="시민 저항세력과의 마찰이 가중되면서 공수부대의 진압은 살육으로까지 이어졌다."
          />
        </div>
      </div>
      <div className={styles.imageBoxNav}>
        <img className={styles.image7} src={image7} alt="image7" />
        <img className={styles.image8} src={image8} alt="image8" />
      </div>
      <div className={styles.storyDivOut}>
        <div className={styles.storyDiv}>
          <div className={styles.description6}>
            <Description
              color1="#fff"
              color2="#c8c8c8"
              title1="1980.5.19"
              title2="거세지는 시위"
              explain1="20일, 항쟁 셋째 날이 되자 금남로에 십만의 시위대가 몰려들었다. 오후 7시 택시, 버스, 트럭 "
              explain2="등 수백 대의 차량 시위대는 항쟁을 새로운 단계로 진입시켰다."
            />
          </div>
          <img className={styles.image9} src={image9} alt="image9" />
        </div>
      </div>
      <img className={styles.blood3} src={Blood} alt="blood" />
      <img className={styles.blood4} src={Blood} alt="blood" />
      <div className={styles.storyDiv}>
        <div className={styles.description7}>
          <Description
            color1="#000"
            color2="#4d4d4d"
            title1="1980.5.21"
            title2="계엄군의 집단 발포"
            explain1='"사과와 명예회복이 이뤄진다면 타협하자"시민대표가 도지사를 대면하고, 요구사항을 전달했지만 '
            explain2="결국 시민의 의견은 묵살됐고 애국가 소리와 함께 시작된 조준 사격, 헬기까지 동원, 최소 54명이 사망했다."
          />
        </div>
        <div className={styles.imageBox2}>
          <div>
            <img src={image10} alt="image10" />
          </div>
          <div className={styles.imageInner}>
            <img src={image11} alt="image11" />
            <img src={image12} alt="image12" />
          </div>
        </div>
      </div>
      <div className={styles.storyDivOut}>
        <div className={styles.storyDiv}>
          <div className={styles.description8}>
            <Description
              color1="#fff"
              color2="#c8c8c8"
              title1="1980.5.21"
              title2="시민군 창설 및 도청 점령, 계엄군 후퇴"
              explain1="집단 발포 후 시민들 사이에서 무장의 필요성이 대두됩니다. 시민들은 경찰서, 예비군 훈련소 등을 통해 총기를 보급하기 시작, 21일 오후 3"
              explain2="시 최초의 시민군이 등장했다. 21일 오후 5시 도청 점령, 계엄군을 철수시켰다."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
