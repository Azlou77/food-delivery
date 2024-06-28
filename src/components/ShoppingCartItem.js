import styles from "../styles/ShoppingCartItem.module.css";
import { useEffect, useState } from "react";

function ShoppingCartItem(props) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={props.image} />
      <h2>{props.title}</h2>
      <div>
        <p className={styles.cardPrice}>${props.price}</p>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
