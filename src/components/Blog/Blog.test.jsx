import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import Blog from "./Blog";

describe("Blog",()=>{
    it("renders correct Blog code",()=>{
        render(<Blog />);
        screen.debug();
    })
})