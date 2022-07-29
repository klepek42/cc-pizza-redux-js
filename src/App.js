import { useSelector } from "react-redux";

import "./App.css";
import { useEffect } from "react";

function App() {
  const pizza = useSelector((state) => state.pizza);

  const fetchPizzaData = async () => {
    try {
      const response = await fetch(process.env.FIREBASE_DB_URL);

      if (!response.ok) {
        throw new Error("Fehler beim Laden");
      }

      const data = await response.json();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchPizzaData();
  }, [fetchPizzaData]);

  return (
    <div className="App">
      <div>
        {pizza.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <span>{item.price}€</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
