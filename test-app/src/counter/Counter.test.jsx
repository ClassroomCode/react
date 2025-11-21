import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import {Counter} from './Counter'
import {describe, it, expect} from "vitest"

describe("Counter Test", () => {
    it("Initial", () => {
        render(<Counter count={5} />);
        const countElement = screen.getByTestId("count")
  
        expect(countElement).toBeInTheDocument();
        expect(countElement).toHaveTextContent('5');
    });
    it("Increment", async () => {
        const buttons = screen.getAllByRole("button");

        fireEvent.click(buttons[0]);

        const countElement = screen.getByTestId("count")
  
        expect(countElement).toBeInTheDocument();
        expect(countElement).toHaveTextContent('6');
    });
});