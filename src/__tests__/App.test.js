import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

it("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/benford's law/i);
  expect(linkElement).toBeInTheDocument();
});

it("checks if button is disabled and enables properly", async () => {
  const app = render(<App />);

  const button = app.getByText("Check your own data");
  userEvent.click(button);
  const checkDataButton = app.getByText("Check data");

  expect(checkDataButton).toBeDisabled();

  const textbox = screen.getByRole("textbox");

  const testJson = `{"menu": {
    "id": "file",
    "value": "File"
  }}`;

  await act(async () => {
    userEvent.click(textbox);
    userEvent.type(textbox, testJson);
  });

  expect(checkDataButton).toBeEnabled();
});

it("should display tooltip properly", async () => {
  const app = render(<App />);

  const link = screen.getByRole("link", {
    name: /aktywność ekonomiczna ludności w wieku 15 lat i więcej/i,
  });
  userEvent.click(link);
  const errorIcon = app.getAllByText("error");

  await act(async () => {
    userEvent.hover(errorIcon[0]);
  });
  const tooltip = screen.getByTestId("tooltip");
  expect(tooltip).toBeVisible();
});
