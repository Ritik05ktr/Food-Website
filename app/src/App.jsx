import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";

const BASE_URL = "https://food-backend-zi2a.onrender.com";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading....</div>;

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);

      return;
    }

    const filter = data?.filter((item) =>
      item.type.toLowerCase().includes(type.toLowerCase()),
    );
    setFilteredData(filter);
  };

  return (
    <>
      <Header
        data={data}
        setFilteredData={setFilteredData}
        filterFood={filterFood}
      />
      <Hero data={filteredData} />
    </>
  );
};

export default App;
