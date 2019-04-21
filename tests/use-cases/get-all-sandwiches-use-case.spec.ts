import { GetAllSandwichesUseCase } from "../../src/use-cases/get-all-sandwiches-use-case";
import { ISandwichWrap } from "../../src/interfaces/i-sandwich-wrap";

describe("GetAllSandwichesUseCase", () => {
    let getAllSandwichesUseCase;
    describe("Valid Cases", () => {

        beforeAll(() => {
            getAllSandwichesUseCase = new GetAllSandwichesUseCase();
        });

        it("should return list of sandwich wrappers", () => {
            const sandwichWrappers: ISandwichWrap[] = getAllSandwichesUseCase.getAllSandwiches();

            expect(sandwichWrappers[0].sandwich.sandwichName).toBe("X-Bacon");
            expect(sandwichWrappers[0].price).toBe(6.5);

            expect(sandwichWrappers[1].sandwich.sandwichName).toBe("X-Burger");
            expect(sandwichWrappers[1].price).toBe(4.5);

            expect(sandwichWrappers[2].sandwich.sandwichName).toBe("X-Egg");
            expect(sandwichWrappers[2].price).toBe(5.3);

            expect(sandwichWrappers[3].sandwich.sandwichName).toBe("X-EggBacon");
            expect(sandwichWrappers[3].price).toBe(7.3);

        });
    });
});