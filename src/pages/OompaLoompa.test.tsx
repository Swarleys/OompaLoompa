import { render, screen } from "@testing-library/react";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import OompaLoompa from "./OompaLoompa";

describe("OompaLoompa page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <Routes>
            <Route path="/:id" element={<OompaLoompa />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  test("renders OompaLoompa with details", async () => {
    const name = await screen.findByRole("heading", { name: /Marcy/i });
    expect(name).toBeDefined();
    const profession = await screen.getByText(/Developer/i);
    expect(profession).toBeDefined();
    const gender = await screen.getByText(/Woman/i);
    expect(gender).toBeDefined();
  });
});
