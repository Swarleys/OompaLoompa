import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import "@testing-library/jest-dom";

describe("NavBar component", () => {
  test("Renders NavBar component", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const logoElement = screen.getByAltText(/Logo Oompa Loompa/i);
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute(
      "src",
      "https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png"
    );

    const textElement = screen.getByText(/Oompa Loompa's Crew/i);
    expect(textElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
