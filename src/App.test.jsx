import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import App from "./App";

describe("App",()=>{
    it("renders correct App code",()=>{
        render(<App />);
        screen.debug();
    })
})