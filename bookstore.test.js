import { describe, test, expect } from "vitest";
import { findBook, reserveStock, buyBook } from "./bookstore";

describe("Bookstore Unit Tests", () => {

  test("findBook returns correct title and price", () => {
    const book = findBook("dune");
    expect(book).toEqual({ title: "dune", price: 89 });
  });

  test("findBook returns undefined price for unknown title", () => {
    const book = findBook("unknown");
    expect(book).toEqual({ title: "unknown", price: undefined });
  });

  test("reserveStock returns a valid reservation code", () => {
    const code = reserveStock({ title: "foundation", price: 75 });

    expect(typeof code).toBe("number");
    expect(Number.isInteger(code)).toBe(true);
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });

  test("buyBook returns success true", () => {
    const result = buyBook("neuromancer");
    expect(result.success).toBe(true);
  });

});