import styles from "../styles/Title.module.css";

function Title(props) {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
}

export default Title;
