import { describe, test, expect } from "vitest";
import { buyBook } from "./bookstore";

describe("Bookstore Integration Test", () => {

  test("should successfully complete a book purchase", () => {
    const result = buyBook("dune");

    expect(result).toEqual({
      success: true,
      code: expect.any(Number),
    });
  });

});