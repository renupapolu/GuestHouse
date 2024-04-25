import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Booking from "./Booking";

describe("Booking",()=>{
    it("renders correct Booking code",()=>{
        render(<Booking />);
        screen.debug();
    })
})