import { render } from "react-dom";
import { screen } from "@testing-library/react";

import App from "./App";
import { renderWithRedux } from "./utils/testUtils";

describe("App", () => {
  it("should test", () => {
    render(<App />);
    expect(screen.getByText("Pizza")).toBeDefined();
  });
  // it("renders initial pizza data from database", () => {
  //   renderWithRedux(<App />, {});
  //   expect(screen.getByText("Margherita")).toBeDefined();
  // });
});
