import { useEffect, useState } from "react";

// Create a Basket component for products list
function Basket(props) {
  return (
    <aside>
      <h2>Cart</h2>
      <ul>
        {/* Loop through the cartList array */}
        {props.basket.length > 0 ? (
          props.basket.map((product) => {
            return (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </li>
            );
          })
        ) : (
          <p>No products</p>
        )}
      </ul>
    </aside>
  );
}
export default Basket;
