import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import OompaLoompaItem from "./OompaLoompaItem";
import "@testing-library/jest-dom";

describe("OompaLoompaItem component", () => {
  test("Renders with correct data", () => {
    const oompaLoompa = {
      id: 1,
      image: "test-image.jpg",
      first_name: "Esteban",
      last_name: "Ramos",
      gender: "M",
      profession: "Frontend developer",
      email: "test@test.com",
      age: 38,
      country: "Spain",
      height: 170,
      favorite: {
        color: "red",
        food: "chocolate",
        random_string: "testing with vitest",
        song: "let's sing a song",
      },
      description: "test description",
    };

    render(
      <Router>
        <OompaLoompaItem oompaLoompa={oompaLoompa} />
      </Router>
    );

    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", oompaLoompa.image);
    expect(imgElement).toHaveAttribute("alt", oompaLoompa.first_name);

    const nameElement = screen.getByText(
      `${oompaLoompa.first_name} ${oompaLoompa.last_name}`
    );
    expect(nameElement).toBeInTheDocument();

    const genderElement = screen.getByText("Man");
    expect(genderElement).toBeInTheDocument();

    const professionElement = screen.getByText(oompaLoompa.profession);
    expect(professionElement).toBeInTheDocument();
  });

  test("throws error when no oompaLoompa is provided", () => {
    expect(() => {
      render(
        <Router>
          <OompaLoompaItem />
        </Router>
      );
    }).toThrow();
  });
});
