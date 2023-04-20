import styles from '../styles/story.module.css';

function Description(props) {
  return (
    <div
      style={{
        color: `${props.color1}`,
      }}
      className={styles.explainProps}
    >
      <nav>
        {props.title1} <br />
        {props.title2}
      </nav>
      <nav style={{color: `${props.color2}`}}>
        {props.explain1} <br />
        {props.explain2} <br />
        {props.explain3}
      </nav>
    </div>
  );
}

export default Description;
