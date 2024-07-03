import styles from "../styles/CardSection.module.css";
import Card from "./Card";

function CardSection(props) {
  return (
    <section className={styles.sectionContainer}>
      {/* Loop through the sectionData array*/}
      {props.products.map((product) => {
        {
          /* Render a  Card component for each object*/
        }
        return (
          <Card
            key={product.id}
            product={product}
            handleBasket={props.handleBasket}
          />
        );
      })}
    </section>
  );
}
export default CardSection;
