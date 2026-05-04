import { describe, test, expect } from "vitest";
import { createDrink, prepareOrder, orderDrink } from "./coffeeshop";

describe("Coffee Shop Unit Tests", () => {

  test("createDrink returns correct type and price", () => {
    const drink = createDrink("latte");
    expect(drink).toEqual({ type: "latte", price: 45 });
  });

  test("createDrink returns undefined price for unknown type", () => {
    const drink = createDrink("tea");
    expect(drink).toEqual({ type: "tea", price: undefined });
  });

  test("prepareOrder returns a numeric ticket", () => {
    const ticket = prepareOrder({ type: "espresso", price: 30 });

    expect(typeof ticket).toBe("number");
    expect(Number.isInteger(ticket)).toBe(true);
    expect(ticket).toBeGreaterThanOrEqual(0);
    expect(ticket).toBeLessThan(1000);
  });

  test("orderDrink returns true for a valid drink", () => {
    const result = orderDrink("cappuccino");
    expect(result).toBe(true);
  });

});