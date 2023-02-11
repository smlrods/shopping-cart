import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import allProducts from './data/allProducts';
import RouteSwitch from './RouteSwitch';

jest.mock('./components/Home', () => () => {
  return (
    <div data-testid='Home'>
      <h1>Home</h1>
      <button data-testid='btnHomeToShop'>visit the shop</button>
    </div>
  )
});

// setup props
const products = allProducts;
const cart = [];
const setCart = jest.fn();

describe('full app rendering/navigating', () => {
  it('render navbar and home', () => {
    render(
      <RouteSwitch 
        products={products}
        cart={cart}
        setCart={setCart}
      />
    );
    expect(screen.getByRole('heading', {level: 1, name: 'Navbar'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 1, name: 'Home'})).toBeInTheDocument();
  });

  it('render navbar and shop', () => {
    render(
      <RouteSwitch 
        products={products}
        cart={cart}
        setCart={setCart}
      />
    );

    userEvent.click(screen.getByRole('link', {name: 'Shop'}));

    expect(screen.getByRole('heading', {level: 1, name: 'Navbar'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 1, name: 'Shop'})).toBeInTheDocument();
  });

  it('render product from shop', () => {
    render(
      <RouteSwitch 
        products={products}
        cart={cart}
        setCart={setCart}
      />
    );

    const productsNode = screen.getAllByRole('link', {name: /^((?!(home|shop|cart)).)*$/i});

    userEvent.click(screen.getByRole('link', {name: 'Shop'}));
    userEvent.click(productsNode[0]);

    expect(screen.getByRole('heading', {level: 1, name: 'Navbar'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 1, name: /name/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 2, name: /price/i})).toBeInTheDocument();

    expect(screen.getByRole('button', {name: /\-/i})).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /\+/i})).toBeInTheDocument();

    expect(screen.getByRole('button', {name: /buy/i})).toBeInTheDocument();
  });

  it('render navbar and cart', () => {
    render(
      <RouteSwitch 
        products={products}
        cart={cart}
        setCart={setCart}
      />
    );

    userEvent.click(screen.getByRole('link', {name: /Cart/i}));

    expect(screen.getByRole('heading', {level: 1, name: 'Navbar'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 1, name: 'Cart'})).toBeInTheDocument();
  });
});
