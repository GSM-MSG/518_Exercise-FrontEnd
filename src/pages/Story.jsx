import styles from '../styles/story.module.css';
import Description from '../components/Description';
import SubExplain from '../components/SubExplain';
import SubDescription from '../components/SubDescription';

import Storybg from '../images/story_bg.png';
import Vector from '../images/vector.png';
import Title from '../images/title_img.png';
import Gun from '../images/gun.png';
import RunPerson from '../images/run_person.png';
import Korea from '../images/korea.png';
import Blood from '../images/blood.png';
import Img1 from '../images/image 1.png';
import Img2 from '../images/image 2.png';
import Img3 from '../images/image 3.png';
import Img4 from '../images/image 4.png';
import Img5 from '../images/image 5.png';
import Img6 from '../images/image 6.png';
import Img7 from '../images/image 7.png';
import Img8 from '../images/image 8.png';
import Img9 from '../images/image 9.png';
import Img10 from '../images/image 10.png';
import Img11 from '../images/image 11.png';

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
              <div className={styles.title}>
                <img src={Title} alt="5.18 열흘간의 항쟁" />
              </div>
              <div className={styles.propsInput}>
                <div className={styles.description1}>
                  <Description
                    color1="#fff"
                    color2="#BCBCBC"
                    title1="1979.10.26"
                    title2="'10.26 사태'"
                    message="박정희 대통령이 중앙정보부장 김재규의 총에 맞아 사망함으로써 *유신 체제가 막을 내리게 되었다. 이에 국"
                    explain1="무총리 최규하는 제주도를 제외한 전국에 비상 *계엄령을 선포하였다. 국민들 사이에서는 유신 체제가 끝나"
                    explain2="고 민주 사회가 올 것이라는 기대가 커지며 민주화에 대한 요구가 확산되었다."
                  />
                  <div className={styles.explainInner}>
                    <SubExplain
                      explain1="* 유신체제 : 박정희 대통령이 장기 집권과 독재를 목적으로 단행한 초헌법적 정치 체제 "
                      explain2="* 계엄령 : 전시, 사변 또는 이에 준하는 국가 비상사태 시에 법률이 정하는 바에 따라 헌법 일부의 효력을 "
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                    <span className={styles.b}>
                      일시 중지하고 군사권을 발동하여 치안을 유지할 수 있는
                      국가긴급권
                    </span>
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
            </div>
          </div>
          <div className={styles.description3}>
            <div className={styles.storyContainer}>
              <Description
                color1="#fff"
                color2="#c8c8c8"
                title1="1980년"
                title2="서울의 봄."
                explain1="신군부가 계엄령을 계속 유지하고 정치 개입을 본격화하자, 학생과 민주화 인사들은 신군부 퇴진, 계엄령 철폐 등을 요구하며 1980년 5월까"
                explain2="지 지속적으로 민주화 운동을 펼쳤다. "
              />
              <br />
              <SubDescription
                color="#c8c8c8"
                explain1="5월 15일, 민주화를 요구하는 대규모 학생과 시민이 서울역 앞에 모였으나, 군 투입 소식이 알려지면서 자진 해산하였다. 하지만 광주에서는 "
                explain2="대학생들이 중심이 되어 전남도청 앞에서 대중 집회를 열었다."
              />
            </div>
          </div>
          <div className={styles.storyContainer}>
            <div className={styles.description4}>
              <div>
                <Description
                  color1="#fff"
                  color2="#c8c8c8"
                  title1="1980.05.17"
                  title2="계엄령 확대"
                  explain1="신군부 퇴진을 요구하는 민주화 운동이 지속되자, 신군부는 비상계엄을 "
                  explain2="1980년 5월 18일 0시를 기점으로 전국으로 확대하겠다고 발표하였다. 모든 "
                  explain3="정치 활동을 금지하고, 국회와 대학을 폐쇄하였으며, 민주화 운동 세력과 신"
                />
                <SubDescription
                  color="#c8c8c8"
                  explain1="군부에 반대하는 사람들을 체포하였다."
                />
              </div>
              <div className={styles.runPerson}>
                <img src={RunPerson} alt="도망가는 사람" />
              </div>
              <div className={styles.korea}>
                <img src={Korea} alt="한반도" />
              </div>
            </div>
          </div>
          <div className={styles.description5Out}>
            <div className={styles.storyContainer}>
              <div className={styles.description5}>
                <Description
                  color1="#fff"
                  color2="#c8c8c8"
                  title1="1980.05.18"
                  title2="전남대 학생과 공수부대 최초 충돌"
                  explain1="계엄령이 확대됐다는 소식이 보도됐다. 광주 전남대학교 학생들은 신군부의 계엄령 확대와 휴교령에 반대하는 시위를 전개하였다. "
                  explain2="신군부는 공수 부대원을 투입하여 교문 출입을 통제하고, 시위를 벌이던 전남대 학생들을 무자비하게 진압하였다."
                />
              </div>
            </div>
            <div style={{backgroundColor: '#1f1f1f'}}>
              <img
                style={{marginRight: '5.5px', marginLeft: '0'}}
                src={Img3}
                alt="image3"
              />
              <img
                style={{marginRight: '5.5px', marginLeft: '0'}}
                src={Img4}
                alt="image4"
              />
              <img src={Img5} alt="image5" />
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: '2px',
              }}
            >
              <div style={{marginRight: '4px'}}>
                <img src={Img6} alt="image6" />
              </div>
              <div>
                <img src={Img7} alt="image7" />
              </div>
            </div>
            <div className={styles.storyContainer}>
              <div className={styles.description6}>
                <Description
                  color1="#fff"
                  color2="#c8c8c8"
                  title1="1980.05.1 오후 ~"
                  title2='작전명 "화려한 휴가"'
                  explain1="신군부는 신속하고 강력한 시위 진압을 위해 공수 부대를 투입했고 학생과 일반 시민을 가리지 않고 살상했다. 11공수여단, "
                  explain2="3공수여단 등 신군부의 병력이 추가 투입되었고, 광주 지역 전면 점령을 위한 ‘화려한 휴가’ 작전을 수행하였다."
                />
                <img className={styles.blood2} src={Blood} alt="핏자국2" />
              </div>
            </div>
            <img className={styles.blood1} src={Blood} alt="핏자국1" />
            <div className={styles.storyContainer}>
              <div className={styles.imgBox2}>
                <img style={{marginRight: '8px'}} src={Img8} alt="image8" />
                <img src={Img9} alt="image9" />
                <img style={{marginRight: '8px', marginTop: '8px'}} src={Img10} alt="image10" />
                <img src={Img11} alt="image11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
