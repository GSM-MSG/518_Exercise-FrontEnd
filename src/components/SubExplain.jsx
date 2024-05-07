import styles from '../styles/story.module.css';

function SubExpalain(props) {
  return (
    <div className={styles.SubExplain}>
      {props.explain1} <br />
      {props.explain2} <br />
      {props.explain3}
    </div>
  );
}

export default SubExpalain;
