import { pizzaActions } from "./pizza-slice";

export const fetchPizzaData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cc-pizza-redux-default-rtdb.europe-west1.firebasedatabase.app/pizza.json"
      );

      if (!response.ok) {
        throw new Error("Fehler beim Laden der Daten!");
      }

      return await response.json();
    };

    try {
      const pizzaData = await fetchData();
      dispatch(
        pizzaActions.loadPizza({
          pizza: pizzaData,
        })
      );
    } catch (error) {
      console.log("Fehler beim Laden der Daten!", error);
    }
  };
};
