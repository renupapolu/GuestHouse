import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Footer from "./Footer";

describe("Footer",()=>{
    it("renders correct Footer code",()=>{
        render(<Footer />);
        screen.debug();
    })
})