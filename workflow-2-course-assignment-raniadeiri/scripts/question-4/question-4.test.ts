const { ShoppingCart } = require("./question-4");
const { bread, cheese, lettuce, milk, tomato } = require("./items");
import { describe, expect, test } from "@jest/globals";

describe('ShoppingCart1', () => {
    const cart = new ShoppingCart();
    cart.addToCart(bread);
    test('getCostTotal', () => {
        expect(cart.getCostTotal()).toBe(9.25)
    })
    test('getNumberOfItems', () => {
        expect(cart.getNumberOfItems()).toBe(1)
    })
    test('getCart', () => {
        expect(cart.getCart()).toEqual([{ id: 24, name: 'Bread', price: 9.25 }])
    })
})

describe("ShoppingCart2", () => {
  const cart = new ShoppingCart();
  cart.addToCart(bread);
  cart.addToCart(cheese);
  test("getCostTotal", () => {
    expect(cart.getCostTotal()).toBe(9.25 + 5.95);
  });
  test("getNumberOfItems", () => {
    expect(cart.getNumberOfItems()).toBe(2);
  });
  test("getCart", () => {
    expect(cart.getCart()).toEqual([
      { id: 24, name: "Bread", price: 9.25 },
      { id: 52, name: "Cheese", price: 5.95 },
    ]);
  });
});

describe("ShoppingCart3", () => {
  const cart = new ShoppingCart();
  cart.addToCart(bread);
  cart.addToCart(bread);
  cart.addToCart(bread);
  test("getCostTotal", () => {
    expect(cart.getCostTotal()).toBe(9.25);
  });
  test("getNumberOfItems", () => {
    expect(cart.getNumberOfItems()).toBe(1);
  });
  test("getCart", () => {
    expect(cart.getCart()).toEqual([{ id: 24, name: "Bread", price: 9.25 }]);
  });
});

describe("ShoppingCart4", () => {
  const cart = new ShoppingCart();
  cart.addToCart(bread);
  cart.addToCart(lettuce);
  cart.removeFromCart(lettuce);
  test("getCostTotal", () => {
    expect(cart.getCostTotal()).toBe(9.25);
  });
  test("getNumberOfItems", () => {
    expect(cart.getNumberOfItems()).toBe(1);
  });
  test("getCart", () => {
    expect(cart.getCart()).toEqual([{ id: 24, name: "Bread", price: 9.25 }]);
  });
});
