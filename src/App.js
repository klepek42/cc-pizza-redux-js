import useFetchPizzaData from "./hooks/useFetchPizzaData";
import "./App.css";

function App() {
  const pizza = useFetchPizzaData();

  return (
    <div className="App">
      <div>
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
