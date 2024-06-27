import styles from "../styles/Card.module.css";

function Card(props) {
  return (
    <div>
      <img className={styles.imageCard} src={props.image} />
      <h2>{props.title}</h2>
      <div>
        <p>{props.address}</p>
      </div>
      <div>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
export default Card;
