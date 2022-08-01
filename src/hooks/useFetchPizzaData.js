import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaData } from "../store/pizza-action";

const useFetchPizzaData = () => {
  const dispatch = useDispatch();
  const pizzaData = useSelector((state) => state.pizza);

  useEffect(() => {
    dispatch(fetchPizzaData());
  }, [dispatch]);

  return pizzaData;
};

export default useFetchPizzaData;
