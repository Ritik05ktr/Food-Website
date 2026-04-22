
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

const Header = ({data, setFilteredData, filterFood}) => {



   const searchFood = (e) => {
     const searchValue = e.target.value;
     

     const filter = data?.filter((item) =>
       item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
     setFilteredData(filter)
  };

  
  return (
    <div className={styles.header_container}>
      <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>

      <Menu filterFood={filterFood} />

      <input onChange = {searchFood} placeholder="Search Food..." className={styles.searchbar}></input>
    </div>
  );
};

export default Header;
