import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPizzaData } from "./store/pizza-action";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const pizza = useSelector((state) => state.pizza);

  useEffect(() => {
    dispatch(fetchPizzaData());
  }, [dispatch]);

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
