import { useEffect, useState } from "react";

// Create a Basket component for products list
function Basket(props) {
  return (
    <aside>
      <h2>Cart</h2>
      <ul>
        {/* Loop through the cartList array */}
        {props.cartList.map((item, index) => {
          {
            /* Render a  Card component for each object */
          }
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
export default Basket;
