import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = ({ image, name, price, text, type }) => {
  return (
    <div className={styles.card_component}>
      <div className={styles.card_img}>
        <img src={image} alt="food-img" />
      </div>

      <div className={styles.card_content}>
        <div className={styles.card_text}>
          <h1>{name}</h1>
          <p>{text}</p>
        </div>

        <Button text={price} />
      </div>
    </div>
  );
};

export default Card;
