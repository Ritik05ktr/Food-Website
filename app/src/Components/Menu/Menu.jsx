import Button from "../Button/Button";
import styles from "./Menu.module.css";

const Menu = ({ filterFood }) => {
  return (
    <div className={styles.menu_btn}>
      <Button onClick={() => filterFood("all")} text="All" />
      <Button onClick={() => filterFood("breakfast")} text="Breakfast" />
      <Button onClick={() => filterFood("lunch")} text="Lunch" />
      <Button onClick={() => filterFood("Dinner")} text="Dinner" />
    </div>
  );
};

export default Menu;
