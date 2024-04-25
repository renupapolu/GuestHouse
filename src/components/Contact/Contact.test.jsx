import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Contact from "./Contact";

describe("Contact",()=>{
    it("renders correct Contact code",()=>{
        render(<Contact />);
        screen.debug();
    })
})