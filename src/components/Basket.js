import { useEffect, useState } from "react";
import styles from "@/styles/Basket.module.css";

// Create a Basket component for products list
function Basket(props) {
  const [quantity, setQuantity] = useState(0);

  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function reduceQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  return (
    <aside className={styles.basket}>
      <h2>Cart</h2>

      {props.basket.length > 0 ? (
        props.basket.map((product) => {
          return (
            <div className={styles.buttonQuantity}>
              <span className={styles.productTitle}>
                {product.title} {product.price}$
              </span>

              <button onClick={reduceQuantity}>-</button>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={incrementQuantity}>+</button>
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
