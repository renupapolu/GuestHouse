import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Services from "./Services";

describe("Services",()=>{
    it("renders correct Services code",()=>{
        render(<Services />);
        screen.debug();
    })
})