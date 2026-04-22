import Card from "../Card/Card";
import styles from "./Hero.module.css";

const Hero = ({ data }) => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.card_container}>
        {data?.map((item) => {
          return (
            <Card
              key={item.name}
              type={item.type}
              image={`https://food-backend-zi2a.onrender.com${item.image}`}
              name={item.name}
              price={`$${item.price}`}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
