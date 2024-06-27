import styles from "../styles/ShoppingCartItem.module.css";

function ShoppingCartItem(props) {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.cartItemLeft}>
        <img className={styles.cartItemImage} src={props.image} />
      </div>
      <div className={styles.cartItemRight}>
        <h6 className={styles.cartItemTitle}>{props.title}</h6>
        <p className={styles.cartItemPrice}>${props.price}</p>
        <button className={styles.cartItemButton}>Remove</button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
