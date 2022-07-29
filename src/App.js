import { πuseSelector } from "react-redux";

import "./App.css";

function App() {
  const pizza = [
    { name: "Pizza Salami", price: 5.0 },
    { name: "Pizza Hawaii", price: 8.0 },
    { name: "Pizza Tonno", price: 6.5 },
  ];
  // const pizza = useSelector((state) => state.pizza);

  return (
    <div className="App">
      <div>
        {pizza.map((item) => (
          <>
            <div>{item.name}</div>
            <div>{item.price}€</div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
