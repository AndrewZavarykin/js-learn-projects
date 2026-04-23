import { sum } from './sum'

describe("sum function", () => {
    it("should to be a function", () => {
        expect(typeof sum).toBe('function');
    });

    it("should return the sum of two numbers", () => {
        expect(sum(1,2)).toBe(3);
    })
})