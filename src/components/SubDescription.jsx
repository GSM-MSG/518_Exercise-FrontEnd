import styles from '../styles/story.module.css';

function SubDescription(props) {
  return (
      <div className={styles.explainContainer} style={{color: `${props.color}`}}>
        {props.explain1} <br />
        {props.explain2} 
      </div>
  );
}

export default SubDescription;
