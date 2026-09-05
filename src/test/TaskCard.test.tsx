import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TaskCard from "../components/TaskCard";


describe("TaskCard test", () => {

it("Visa alla värden i task card", () =>{

    render(<TaskCard
    id={100}
    category="test"
    title="Test titel"
    description="Test beskrivning"
    assignee="Testaren"
    priority="Hög"/>)

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("Test titel")).toBeInTheDocument();
    expect(screen.getByText("Test beskrivning")).toBeInTheDocument();
    expect(screen.getByText("Ansvarig: Testaren")).toBeInTheDocument();
    expect(screen.getByText("Prioritet: Hög")).toBeInTheDocument();
});
});