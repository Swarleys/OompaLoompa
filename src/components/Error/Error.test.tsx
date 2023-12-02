import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "./Error";
import '@testing-library/jest-dom';
import { expect, test } from "vitest";


test("renders Error component", () => {
  render(
    <Router>
      <Error />
    </Router>
  );

  const errorText = screen.getByText(/An error has ocurred ❌/i);
  expect(errorText).toBeInTheDocument();

  const linkElement = screen.getByText(/Go back to the landing page ⬅️/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/");
});

