import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";


describe("Header test", () => {

    it("Visa kursnamnet i headern", () =>{
        render(<Header/>);

        expect(screen.getByText("Webbutveckling")).toBeInTheDocument();
    })

    it("Visa headerns huvudrubrik", () =>{
        render(<Header />);

        expect(screen.getByRole("heading", {name:"Team Task Board"})).toBeInTheDocument();
    });

    it("Visa app beskrivning", () => {
        render(<Header/>);

        expect(screen.getByText("Detta är den andra laborationen i kursen Webbutveckling")).toBeInTheDocument();
    });
});