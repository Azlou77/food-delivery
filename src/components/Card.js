import styles from "../styles/Card.module.css";

function Card(props) {
  // Regroup properties of the cart item

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={props.product.image} />
      <h2>{props.title}</h2>
      <div>
        <p className={styles.cardCategory}>{props.product.category}</p>
      </div>
      <div>
        <p className={styles.cardPrice}>${props.product.price}</p>
      </div>
      <button
        className={styles.cardButton}
        onClick={() => props.handleBasket(props.product)}
      >
        Add to basket
      </button>
      <div className={styles.cardInput}></div>
    </div>
  );
}
export default Card;
