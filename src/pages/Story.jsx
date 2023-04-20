import styles from '../styles/story.module.css';
import Description from '../components/Description';
import Storybg from '../images/story_bg.png';
import Vector from '../images/vector.png';

function Story() {
  return (
    <div className={styles.storyBox}>
      <div>
        <img className={styles.storyBg} src={Storybg} alt="Story 배경" />
      </div>
      <div>
        <img className={styles.vector} src={Vector} alt="그래프바" />
      </div>
      <div className={styles.storyDiv}>
        <h1>5.18 열흘간의 항쟁_</h1>
          <div className={styles.descriptionBlack}>
          <Description className={styles.description1}
            color1="#fff"
            color2="#c8c8c8"
            title1="1979.12.12"
            title2="군사정변"
            explain1="1979년 12월 12일 내 불법 사조직인 하나회의 멤버 전두환이"
            explain2="주도하여 일으킨 군사 쿠데타이다."
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
