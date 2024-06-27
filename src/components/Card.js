import styles from "../styles/Card.module.css";

function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.imageCard} src={props.image} />
      <h2 className={styles.titleCard}>{props.title}</h2>
      <div>
        <p className={styles.addressCard}>{props.address}</p>
      </div>
      <div>
        <p className={styles.priceCard}>{props.price}</p>
      </div>
    </div>
  );
}
export default Card;
