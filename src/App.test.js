import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app render", () => {
  it("render home and navbar", () => {
    render(
      <App />
    )
    expect(screen.getByText('Navbar')).toBeInTheDocument;
    expect(screen.getByRole('heading', {level: 1, name: 'Home'})).toBeInTheDocument;
  });
});
