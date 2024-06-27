import styles from "../styles/ShoppingCartItem.module.css";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart(props) {
  return (
    <section className={styles.cartContainer}>
      {/* Loop through the sectionData array */}
      {props.sectionData.map((card) => {
        {
          /* Render a  Card component for each object */
        }
        return (
          <ShoppingCartItem
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
          />
        );
      })}
    </section>
  );
}

export default ShoppingCart;
