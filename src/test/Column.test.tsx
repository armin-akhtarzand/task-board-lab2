import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Column from "../components/Column";

describe("Kolumn test", () => {
  it("Visa kolumnens titel", () => {

    render(
      <Column title="Todo">
        <p>Children</p>
      </Column>,
    );

    expect(screen.getByRole("heading", {name: "Todo"})).toBeInTheDocument();
    expect(screen.getByText("Children")).toBeInTheDocument();

  });
});
