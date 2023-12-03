import { render, screen } from "@testing-library/react";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import OompaLoompa from "./OompaLoompa";

describe("OompaLoompa page", () => {
  test("renders OompaLoompa with id 1", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <Routes>
            <Route path="/:id" element={<OompaLoompa />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const name = await screen.findByRole("heading", { name: /Marcy/i });
    expect(name).toBeDefined();
    const profession = await screen.getByText(/Developer/i);
    expect(profession).toBeDefined();
    const gender = await screen.getByText(/Woman/i);
    expect(gender).toBeDefined();
  });
  
  test("renders OompaLoompa with id 2", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/2"]}>
          <Routes>
            <Route path="/:id" element={<OompaLoompa />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const name = await screen.findByRole("heading", { name: /Cowin/i });
    expect(name).toBeDefined();
    const profession = await screen.getByText(/Metalworker/i);
    expect(profession).toBeDefined();
    const gender = await screen.getByText(/man/i);
    expect(gender).toBeDefined();
  });
});
