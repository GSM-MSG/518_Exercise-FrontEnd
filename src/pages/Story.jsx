import styles from '../styles/story.module.css';
import Description from '../components/Description';
import SubExplain from '../components/SubExplain';

import Storybg from '../images/story_bg.png';
import Vector from '../images/vector.png';
import Gun from '../images/gun.png';
import Img1 from '../images/image 1.png';
import Img2 from '../images/image 2.png';

function Story() {
  return (
    <div className={styles.storyBox}>
      <div className={styles.storyBg}>
        <img src={Storybg} alt="Story 배경" />
      </div>
      <div className={styles.storyDivOut}>
        <div className={styles.storyDiv}>
          <div className={styles.vector}>
            <img src={Vector} alt="그래프바" />
          </div>
          <div className={styles.storyContainer}>
            <div className={styles.descriptionBlack}>
              <h1>5.18 열흘간의 항쟁_</h1>
              <div className={styles.propsInput}>
                <div className={styles.description1}>
                  <Description
                    color1="#fff"
                    color2="#c8c8c8"
                    title1="1979.10.26"
                    title2="10.26 사태"
                    explain1="박정희 대통령이 중앙정보부장 김재규의 총에 맞아 사망함으로써 *유신 체제가 막을 내리게 되었다. 이에 국"
                    explain2="무총리 최규하는 제주도를 제외한 전국에 비상 *계엄령을 선포하였다. 국민들 사이에서는 유신 체제가 끝나"
                    explain3="고 민주 사회가 올 것이라는 기대가 커지며 민주화에 대한 요구가 확산되었다."
                  />
                  <div className={styles.explainInner}>
                    <SubExplain
                      explain1="* 유신체제 : 박정희 대통령이 장기 집권과 독재를 목적으로 단행한 초헌법적 정치 체제 "
                      explain2="* 계엄령 : 전시, 사변 또는 이에 준하는 국가 비상사태 시에 법률이 정하는 바에 따라 헌법 일부의 효력을 "
                      explain3="일시 중지하고 군사권을 발동하여 치안을 유지할 수 있는 국가긴급권"
                    />
                  </div>
                </div>
                <div className={styles.gunInput}>
                  <img src={Gun} alt="gun" />
                </div>
              </div>
              <div className={styles.description2}>
                <Description
                  color1="#fff"
                  color2="#c8c8c8"
                  title1="1979.12.12"
                  title2="군사정변"
                  explain1="1979년 12월 12일 전두환, 노태우 등이 이끌던 군부 내 사조직 ‘하나회’ 중"
                  explain2="심의 신군부 세력이 군사반란을 일으켜 군사권을 장악하였다."
                />
              </div>
              <div className={styles.imgBox}>
                <img src={Img1} alt="image1" />
                <img src={Img2} alt="image2" />
              </div>
              <div className={styles.description3}>
                <Description
                  color1="#fff"
                  color2="#c8c8c8"
                  title1="1980년"
                  title2="서울의 봄."
                  explain1="1979년 12월 12일 전두환, 노태우 등이 이끌던 군부 내 사조직 ‘하나회’ 중"
                  explain2="심의 신군부 세력이 군사반란을 일으켜 군사권을 장악하였다."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
