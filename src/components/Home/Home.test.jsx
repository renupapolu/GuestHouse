import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Home from "./Home";

describe("Home",()=>{
    it("renders correct Home code",()=>{
        render(<Home />);
        screen.debug();
    })
})