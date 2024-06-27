import styles from "../styles/Card.module.css";

function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={props.image} />
      <h2>{props.title}</h2>
      <div>
        <p className={styles.cardCategory}>{props.category}</p>
      </div>
      <div>
        <p className={styles.cardPrice}>${props.price}</p>
      </div>
      <button className={styles.cardButton}>{props.button}</button>
    </div>
  );
}
export default Card;
