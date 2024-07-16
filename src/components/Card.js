import styles from "../styles/Card.module.css";

function Card({ image, title, category, price, handleBasket, product }) {
  // Regroup properties of the cart item

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.image} />
      <h2>{title}</h2>
      <div>
        <p className={styles.cardCategory}>{product.category}</p>
      </div>
      <div>
        <p className={styles.cardPrice}>${product.price}</p>
      </div>
      <button
        className={styles.cardButton}
        onClick={() => handleBasket(product)}
      >
        Add to basket
      </button>
      <div className={styles.cardInput}></div>
    </div>
  );
}
export default Card;
