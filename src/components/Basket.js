import { useEffect, useState } from "react";
import styles from "@/styles/Basket.module.css";

// Create a Basket component for products list
function Basket(props) {
  return (
    <aside className={styles.basket}>
      <h2>Cart</h2>
      <ul>
        {/* Loop through the cartList array */}
        {props.basket.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button
                className={styles.removeButton}
                onClick={() => props.removeProduct(product.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Basket;
