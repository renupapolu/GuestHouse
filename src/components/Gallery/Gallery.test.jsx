import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Gallery from "./Gallery";

describe("Gallery",()=>{
    it("renders correct Gallery code",()=>{
        render(<Gallery />);
        screen.debug();
    })
})