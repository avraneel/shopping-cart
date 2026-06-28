import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import { describe, it, expect } from "vitest";

describe("Home Component", () => {
  it("renders heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatchInlineSnapshot(
      `"Welcome to My Store"`,
    );
  });
});
