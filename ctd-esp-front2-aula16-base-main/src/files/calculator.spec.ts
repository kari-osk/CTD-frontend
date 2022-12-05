import calculator from "./calculator";

describe("calculadora", () => {
    it("Add 1 to 2 should return 3", () => {
        const result = calculator.add(1,2);
        expect(result).toBe(3);
    });

    it("Subtract 2 from 10 should return 8", () => {
        const result = calculator.subtract(2,10);
        expect(result).toBe(-8);
    });

    it("Multiply  2 with 8 should return 16", () => {
        const result = calculator.multiply(2,8);
        expect(result).toBe(16)
    });

    it("Multiply should be idempotent", () => {
        const result = calculator.multiply(1,1);
        expect(result).toBe(1)
    });

    it("Divide 8 with 2 should return 4", () => {
        const result = calculator.divide(8,2);
        expect(result).toBe(4)
    });
});