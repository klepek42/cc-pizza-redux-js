import { pizzaActions } from "./pizza-slice";

export const fetchPizzaData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_FIREBASE_DB_URL);

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
