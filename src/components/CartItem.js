import styles from "../styles/CartItem.module.css";

function CartItem(props) {
  return (
    <div className={styles.cartItemContainer}>
      <img className={styles.cartItemImage} src={props.image} />
      <h6 className={styles.cartItemCategory}>{props.category}</h6>
      <h6 className={styles.cartItemTitle}>{props.title}</h6>
      <p>${props.price}</p>
    </div>
  );
}

export default CartItem;
