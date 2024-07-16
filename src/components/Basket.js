import { useEffect, useState } from "react";
import styles from "@/styles/Basket.module.css";

// Create a Basket component for products list
function Basket(props) {
  let totalPrice = 0;
  for (let i = 0; i < props.basket.length; i++) {
    const product = props.basket[i];
    totalPrice = (
      Number(totalPrice) +
      product.price * product.quantity
    ).toFixed(2);
  }

  return (
    <aside className={styles.basket}>
      <h2>Cart</h2>

      {props.basket.length > 0 ? (
        props.basket.map((product) => {
          return (
            <div className={styles.basketData}>
              <span className={styles.productTitle}>
                {product.title} {product.price}$
              </span>
              <div className={styles.buttonQuantity}>
                <button onClick={() => props.reduceQuantity(product.id)}>
                  -
                </button>
                <span className={styles.quantity}>x{product.quantity}</span>
                <button onClick={() => props.incrementQuantity(product.id)}>
                  +
                </button>
                <button onClick={() => props.removeFromBasket(product.id)}>
                  X
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No products</p>
      )}
      <div>
        <p>Total Price: {totalPrice}$</p>
      </div>
    </aside>
  );
}
export default Basket;
