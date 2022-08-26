import useFetchPizzaData from "../hooks/useFetchPizzaData";

import styles from "./Speisekarte.module.css";

const Speisekarte = () => {
  const pizza = useFetchPizzaData();

  return (
    <div className={styles["speisekarte-text"]}>
      <h1>Speisekarte</h1>
      <span className={styles["speise-icon"]}>🍕</span>
      {pizza.map((item) => (
        <div key={item.name}>
          <p>
            {item.name} - {item.price}€
          </p>
        </div>
      ))}
    </div>
  );
};

export default Speisekarte;
