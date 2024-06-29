import styles from "../styles/Card.module.css";
import { useEffect, useState } from "react";

function Card(props) {
  // Regroup properties of the cart item
  const [cartItem, setCartItem] = useState({
    title: props.title,
    price: props.price,
  });
  // Regroup into one list all the cart items
  const [cartList, setCartList] = useState([]);

  // Function to handle the cart item
  /*
     The function took two parameters
     e: for the event which is action when you click for example
     key: for the key (or the name) of the properties which must be changed
  */
  function handleCartItem(e, key) {
    /*
      Create an new object newCartItem copy the props of the cartItem
      (which is the current state of the cartItem).
      The props key is the update with the new value e.target.value
  */
    const newCartItem = { ...cartItem, [key]: e.target.value };
    setCartItem(newCartItem);
  }

  function addCartItem() {
    /*
      Create a new list of cart items copying all the elements of the the list cart items that even exist.
    */
    const newCartList = [...cartList, cartItem];
    // Update the state of the cart with the new list cart
    setCartList(newCartList);
  }

  function deleteCartItem(index) {
    const filteredCartList = cartList.filter((_, i) => {
      return i !== index;
    });
    setCartList(filteredCartList);
  }

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={props.image} />
      <h2>{props.title}</h2>
      <div>
        <p className={styles.cardCategory}>{props.category}</p>
      </div>
      <div>
        <p className={styles.cardPrice}>${props.price}</p>
      </div>
      <button onClick={() => addCartItem()} className={styles.cardButton}>
        {props.button}
      </button>
      <div className={styles.cardInput}></div>
    </div>
  );
}
export default Card;
