import { useEffect, useState } from "react";
import styles from "@/styles/Basket.module.css";

// Create a Basket component for products list
function Basket(props) {
  return (
    <aside className={styles.basket}>
      <h2>Cart</h2>

      {props.basket.length > 0 ? (
        props.basket.map((product) => {
          return (
            <div className={styles.buttonQuantity}>
              <span className={styles.productTitle}>
                {product.title} {product.price}
              </span>
              <button onClick={() => props.reduceQuantity(product.id)}>
                -
              </button>
              x{product.quantity}
              <button onClick={() => props.incrementQuantity(product.id)}>
                +
              </button>
            </div>
          );
        })
      ) : (
        <p>No products</p>
      )}
    </aside>
  );
}
export default Basket;
