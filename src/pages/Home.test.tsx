import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const MockIntersectionObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver);

describe("Home page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
  });
  test("renders Home component with initials Oompa Loompas", async () => {
    const initialOompaLoompas = await screen.findAllByRole("listitem");
    expect(initialOompaLoompas).toHaveLength(2);
  });

  test("updates search states and filters Oompa Loompas", async () => {
    const input = screen.getByPlaceholderText(/Busqueda/i);
    fireEvent.change(input, { target: { value: "Esteban" } });
    const filteredEvang = await screen.findAllByRole("listitem");
    expect(filteredEvang).toHaveLength(1);
    expect(filteredEvang).not.toHaveLength(2);
    fireEvent.change(input, { target: { value: "Pokemon" } });
    const filteredEsteban = await screen.queryAllByRole("listitem");
    expect(filteredEsteban).toHaveLength(0);
    expect(filteredEsteban).not.toHaveLength(1);
  });
});
