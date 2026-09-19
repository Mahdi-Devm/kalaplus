import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { TestButton } from "./TestButton";
it("should render Buy button", () => {
  render(<TestButton />);

  const button = screen.getByRole("button", {
    name: "Buy",
  });
  const button2 = screen.getByRole("button", {
    name: "Add to cart",
  });

  expect(button).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 1, name: "Products" }),
  ).toBeInTheDocument();
});
