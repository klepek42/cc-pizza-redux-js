import { render } from "react-dom";
import { Provider } from "react-redux";

export const renderWithRedux = (ui, store) =>
  render(<Provider store={store}>{ui}</Provider>);
