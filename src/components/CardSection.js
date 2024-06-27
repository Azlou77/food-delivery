import styles from "../styles/CardSection.module.css";
import Card from "./Card";

function CardSection(props) {
  return (
    <section className={styles.sectionContainer}>
      {/* Loop through the sectionData array*/}
      {props.sectionData.map((card) => {
        {
          /* Render a  Card component for each object*/
        }
        return (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            address={card.category}
            price={card.price}
          />
        );
      })}
    </section>
  );
}
export default CardSection;
