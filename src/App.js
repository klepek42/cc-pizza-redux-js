import useFetchPizzaData from "./hooks/useFetchPizzaData";
import styles from "./App.module.css";

function App() {
  const pizza = useFetchPizzaData();

  return (
    <div className={styles["App"]}>
      <div className={styles["speisekarte-text"]}>
        <h1>Speisekarte</h1>
        {pizza.map((item) => (
          <div key={item.name}>
            <p>
              {item.name} - {item.price}€
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
