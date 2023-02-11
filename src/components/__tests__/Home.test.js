import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<MemoryRouter>
            <Home />
           </MemoryRouter>);
    const header = screen.getByRole("heading");
    expect(header.textContent).toMatch(/hello from home/i);
  });
  
  it("render correct button", () => {
    render(<MemoryRouter>
            <Home />
            </MemoryRouter>);
    const button = screen.getByText("visit the shop");
    expect(button).toBeInTheDocument;
  });
});
