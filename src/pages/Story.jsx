import Navbar from '../components/Navbar';
import styles from '../styles/story.module.css';
import Description from '../components/Description';
import SubExplain from '../components/SubExplain';
import SubDescription from '../components/SubDescription';

import Storybg from '../images/story_bg.png';
import Title from '../images/title_img.png';
import Gun from '../images/gun.png';
import RunPerson from '../images/run_person.png';
import Korea from '../images/korea.png';
import Blood from '../images/blood.png';
import BloodBlack from '../images/blood_black.png';
import BloodBlackMirror from '../images/blood_black_mirror.png';
import pinetree1 from '../images/pinetree1.png';
import pinetree2 from '../images/pinetree2.png';
import Helecopter from '../images/helecopter.png';
import Frostbite from '../images/frostbite.png';
import WhiteFlower from '../images/whiteflower.png';
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
import Img12 from '../images/image 12.png';
import Img13 from '../images/image 13.png';
import Img14 from '../images/image 14.png';
import Img15 from '../images/image 15.png';
import Img16 from '../images/image 16.png';
import Img17 from '../images/image 17.png';
import Img18 from '../images/image 18.png';
import Img19 from '../images/image 19.png';
import Img20 from '../images/image 20.png';
import Img21 from '../images/image 21.png';
import Img22 from '../images/image 22.png';

import {motion} from 'framer-motion';

function locationMoment() {
  window.location.href = '/quiz';
}

function Story() {
  return (
    <div className={styles.storyBox}>
      <Navbar />
      <div className={styles.storyBg}>
        <img src={Storybg} alt="Story 배경" />
      </div>
      <div className={styles.storyDivOut}>
        <div className={styles.storyDiv}>
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
                    explain1="박정희 대통령이 중앙정보부장 김재규의 총에 맞아 사망함으로써 *유신 체제가 막을 내리게 되었다."
                    explain2="이에 국무총리 최규하는 제주도를 제외한 전국에 비상 *계엄령을 선포하였다. 국민들 사이에서는"
                    explain3="유신 체제가 끝나고 민주 사회가 올 것이라는 기대가 커지며 민주화에 대한 요구가 확산되었다."
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
                  explain1="1979년 12월 12일 전두환, 노태우 등이 이끌던 군부 내 사조직 ‘하나회’"
                  explain2="중심의 신군부 세력이 군사반란을 일으켜 군사권을 장악하였다."
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
                explain1="신군부가 계엄령을 계속 유지하고 정치 개입을 본격화하자, 학생과 민주화 인사들은 신군부 퇴진, 계엄령 철폐 등을 요구하며 1980년 "
                explain2="5월까지 지속적으로 민주화 운동을 펼쳤다. "
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
                  explain3="정치 활동을 금지하고, 국회와 대학을 폐쇄하였으며, 민주화 운동 세력과 "
                />
                <SubDescription
                  color="#c8c8c8"
                  explain1="신군부에 반대하는 사람들을 체포하였다."
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
                  title1="1980.05.18 오후 ~"
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
                <img
                  style={{marginRight: '8px', marginTop: '8px'}}
                  src={Img10}
                  alt="image10"
                />
                <img src={Img11} alt="image11" />
              </div>
            </div>
          </div>
          <div className={styles.description7Out}>
            <div className={styles.storyContainer}>
              <div className={styles.description7}>
                <Description
                  color1="#fff"
                  color2="#c8c8c8"
                  title1="1980.05.20"
                  title2="거세지는 시위"
                  explain1="항쟁 셋째 날인 5월 20일, 광주 시민과 학생들이 계엄군의 무자비한 진압에 항의하고자 "
                  explain2="금남로에 모였다. 택시, 버스, 트럭 등 수백 대의 차량 시위대가 대규모 민주 항쟁을 이어 나갔다."
                />
              </div>
              <img src={Img12} alt="image12" />
            </div>
          </div>
          <div className={styles.description8Out}>
            <img
              className={styles.blood3}
              src={BloodBlackMirror}
              alt="핏자국"
            />
            <img className={styles.blood4} src={BloodBlack} alt="핏자국" />
            <div className={styles.storyContainer}>
              <div className={styles.description8}>
                <Description
                  color1="#1f1f1f"
                  color2="#616161"
                  title1="1980.05.21"
                  title2="계엄군의 집단 발포와 시민군 창설"
                  explain1="계엄군이 시위 진압 과정에서 시위대를 향해 총격을 가했다. 애국가 소리와 함께 시작된 조준 사격으로 최소 54명이 사망했다. "
                  explain2="이에 분노한 시민들은 경찰서, 예비군 무기고 등에서 획득한 무기로 무장하고 시민군을 조직하였다. 계엄군은 언론을 통제하여"
                  explain3="광주 시민을 폭도로 몰아가는 한편, 광주 외곽을 봉쇄하고 시내로의 진입과 통신을 차단하였다."
                />
              </div>
            </div>
            <div className={styles.imgBox3}>
              <div className={styles.storyContainer}>
                <div className={styles.imgBox3Inner}>
                  <div className={styles.img13Box}>
                    <span className={styles.imgSpan}>- 집단발포</span>
                    <img
                      className={styles.imgPersonArmy}
                      src={Img13}
                      alt="image13"
                    />
                  </div>
                  <div>
                    <span>- 시민군 창설</span>
                    <img
                      className={styles.imgPersonArmy}
                      src={Img14}
                      alt="image14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.description9Out}>
            <img className={styles.pinetree1} src={pinetree1} alt="소나무1" />
            <div className={styles.storyContainer}>
              <div className={styles.description9}>
                <Description
                  color1="#1f1f1f"
                  color2="#4d4d4d"
                  title1="1980.05.22 ~ 26"
                  title2="모두가 하나인 광주"
                  explain1="광주 시민들은 더 이상의 유혈 사태를 막기 위해 시민 수습 위원회를 조직하고, 구속자 석방과 비상계엄 철폐 등을 조건으로 협상하기를 원하였다. "
                  explain2="시민들은 자발적으로 시민공동체를 만들어 질서를 확립하고, 무기를 회수하였으며, 부족한 것을 나누어 서로를 도왔다. 그러나 신군부는 항쟁을 "
                  explain3="조기에 진압하여 전국에 파급되는 것을 막고자 하였다."
                />
              </div>
              <div className={styles.imgBox4}>
                <div className={styles.img15}>
                  <span>- 병원에 피가 부족해 헌혈하는 사람들</span>
                  <img style={{marginTop: '8px'}} src={Img15} alt="image15" />
                </div>
                <div>
                  <span>- 자발적으로 총을 회수하는 사람들</span>
                  <img style={{marginTop: '8px'}} src={Img16} alt="image16" />
                </div>
              </div>
              <div className={styles.imgBox5}>
                <span>- 나눠먹을 밥을 하는 사람들</span>
                <img style={{marginTop: '8px'}} src={Img17} alt="image17" />
                <img
                  className={styles.pinetree2}
                  src={pinetree2}
                  alt="소나무2"
                />
              </div>
            </div>
          </div>
          <div style={{backgroundColor: '#282828'}}>
            <div className={styles.storyContainer}>
              <div className={styles.description10}>
                <Description
                  color1="#fff"
                  color2="#bebebe"
                  title1="1980.05.27"
                  title2="최후의 항쟁"
                  explain1="26일 새벽 광주 외각 지역에서 계엄군이 탱크를 몰고 "
                  explain2="광주 시내로 진격하고있다는 무전이 들어왔다."
                />
                <img className={styles.img18} src={Img18} alt="image18" />
              </div>
            </div>
            <img
              className={styles.helecopter}
              src={Helecopter}
              alt="헬리콥터"
            />
            <div className={styles.storyContainer}>
              <div className={styles.fontBox}>
                <span>27일 새벽, '상무충정작전'을 실시.</span>
                <div className={styles.fontBoxInner}>
                  "사랑하는 광주 시민 여러분,지금 계엄군이 쳐들어 오고 있습니다.
                  <br />
                  사랑하는 우리의 형제 자매들이 계엄군의 총칼에 죽어가고 <br />
                  있습니다.우리 모두 계엄군과 끝까지 싸웁시다.우리는 끝까지{' '}
                  <br />
                  광주를 사수할 것입니다. 여러분 우리를 잊지 말아주십시오.{' '}
                  <br />
                  우리는 최후까지 싸울 것입니다."
                </div>
                <div className={styles.fontBoxInner2}>
                  - 애절한 목소리가 정적을 가르고 울려퍼졌다.
                </div>
              </div>
            </div>
            <div className={styles.storyContainer}>
              <div className={styles.fontBox2}>
                2만 317명의 병력과 6168명의 실제 전투병력을 뿐만 아니라 실제
                전투병력 뿐만 아니라 탱크와 헬기까지 동원했다. <br />
                시민군은 전남도청에서 최후의 항전을 벌였지만, 모두 진압되었다.
                이 와중에 16명이 사망했고, 200명이 체포되었다. <br />
                5.18 민주화 운동은 이렇게 많은 시민들의 희생 속에서 끝이 났다..
              </div>
              <img className={styles.frostbite} src={Frostbite} alt="동상" />
              <div className={styles.imgBox6}>
                <img style={{marginRight: '8px'}} src={Img19} alt="image19" />
                <img src={Img20} alt="image20" />
                <img
                  style={{
                    marginRight: '8px',
                    marginTop: '8px',
                    marginBottom: '153px',
                  }}
                  src={Img21}
                  alt="image21"
                />
                <img
                  style={{position: 'absolute', marginTop: '8px'}}
                  src={Img22}
                  alt="image22"
                />
              </div>
            </div>
          </div>
          <div className={styles.lastMentBox}>
            <div>
              <img src={WhiteFlower} alt="꽃사진" /> <br />
              <span>
                2024.05.18. <br />
                이제 우리는..
              </span>
              <span className={styles.lastMiddleComment}>
                정말 감사합니다. 잊지않겠습니다. 이어나가겠습니다. <br />
              </span>
              <div className={styles.lastComment}>
                <span>
                  비록 계엄군에게 광주는 빼앗기고 많은 사람들이 목숨을 잃었지만
                  그분들의 의지는 <br />
                  꺾이지 않고 이어져 저희들이 지금 이자리에서 자유롭게 살아갈 수
                  있었습니다.
                </span>
              </div>
              <button onClick={locationMoment} className={styles.lastButton}>
                퀴즈 풀러 가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
