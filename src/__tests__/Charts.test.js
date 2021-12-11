import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

it("should display charts properly", () => {
  const app = render(<App />);

  const link = screen.getByRole("link", {
    name: /ceny detaliczne towarów nieżywnościowych/i,
  });
  userEvent.click(link);

  const charts = app.getAllByTestId("chart");

  expect(charts[0]).toBeInTheDocument();
});
