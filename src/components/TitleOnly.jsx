import styles from '../styles/story.module.css';

function TitleOnly (props) {
  return (
    <div
      style={{
        color: `${props.color1}`,
      }}
      className={styles.explainProps}
    >
      <div>
        {props.title1} <br />
        {props.title2}
      </div>
    </div>
  );
}

export default TitleOnly;
