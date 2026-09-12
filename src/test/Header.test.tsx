import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router";

describe("Header test", () => {
  it("Visa kursnamnet i headern", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByText("Webbutveckling")).toBeInTheDocument();
  });

  it("Visa headerns huvudrubrik", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Team Task Board" }),
    ).toBeInTheDocument();
  });

  it("Visa app beskrivning", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        "Detta är den andra laborationen i kursen Webbutveckling",
      ),
    ).toBeInTheDocument();
  });
});
