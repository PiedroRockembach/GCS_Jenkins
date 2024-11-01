const { Soma } = require("../../script/util/helper");
const { sums_mock } = require("../mocks/util.test.mock");
const { describe, test } = require("@jest/globals");

describe("Operações matemáticas", () => {
    describe("Soma", () => {
        test(`A soma de ${sums_mock[0].a} e ${sums_mock[0].b} é ${sums_mock[0].result}`, () => {
            expect(Soma(sums_mock[0].a, sums_mock[0].b)).toBe(sums_mock[0].result);
        });
        test(`A soma de ${sums_mock[1].a} e ${sums_mock[1].b} é ${sums_mock[1].result}`, () => {
            expect(Soma(sums_mock[1].a, sums_mock[1].b)).toBe(sums_mock[1].result);
        });
        test(`A soma de ${sums_mock[2].a} e ${sums_mock[2].b} é ${sums_mock[2].result}`, () => {
            expect(Soma(sums_mock[2].a, sums_mock[2].b)).toBe(sums_mock[2].result);
        });
    });
});