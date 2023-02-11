import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import Shop from "../Shop";
import allProducts from "../../data/allProducts";

describe('Shop', () => {
  it("renders the products", () => {
    render(
      <MemoryRouter>
        <Shop products={allProducts}/>;
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link').length).toBe(10);
  }); 
});
