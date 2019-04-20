import { ComputePriceUseCase } from "../../src/use-cases/compute-price-use-case";
import { Sandwich } from "../../src/models/sandwich-model";
import { Ingredient } from "../../src/models/ingredient-model";
import { IngredientWrapper } from "../../src/models/ingredient-wrappers-model";

describe("ComputePriceUseCase", () => {
    let computePriceUseCase;

    let lettuce = new Ingredient(Ingredient.IngredientTypes.LETTUCE, 0.4);
    let bacon = new Ingredient(Ingredient.IngredientTypes.BACON, 2);
    let meat = new Ingredient(Ingredient.IngredientTypes.MEAT, 3);
    let egg = new Ingredient(Ingredient.IngredientTypes.EGG, 0.8);
    let cheese = new Ingredient(Ingredient.IngredientTypes.CHEESE, 1.5);

    describe("Valid Cases", () => {

        beforeAll(() => {
            computePriceUseCase = new ComputePriceUseCase();
        })

        it("should return price 0 for sandwich without any ingredient", () => {
            const wrappers = [];
            const sandwich = new Sandwich(wrappers);
            const price = computePriceUseCase.computePrice(sandwich);
            expect(price).toEqual(0);
        });

        it("should return price without fitting any promo", () => {
            const wrappers = [];
            wrappers.push(new IngredientWrapper(lettuce, 1));
            wrappers.push(new IngredientWrapper(bacon, 1));
            wrappers.push(new IngredientWrapper(meat, 1));
            wrappers.push(new IngredientWrapper(egg, 1));
            wrappers.push(new IngredientWrapper(cheese, 1));
            const sandwich = new Sandwich(wrappers);
            const price = computePriceUseCase.computePrice(sandwich);
            expect(price).toEqual(7.7);
        });

        it("should return price according to light promo", () => {
            const wrappers = [];
            wrappers.push(new IngredientWrapper(lettuce, 1));
            wrappers.push(new IngredientWrapper(meat, 1));
            wrappers.push(new IngredientWrapper(egg, 1));
            wrappers.push(new IngredientWrapper(cheese, 1));
            const sandwich = new Sandwich(wrappers);
            const price = computePriceUseCase.computePrice(sandwich);
            expect(price).toEqual(5.13);
        });

        it("should return price according only to super meat promo", () => {
            const wrappers = [];
            wrappers.push(new IngredientWrapper(lettuce, 1));
            wrappers.push(new IngredientWrapper(bacon, 1));
            wrappers.push(new IngredientWrapper(meat, 6));
            wrappers.push(new IngredientWrapper(egg, 1));
            wrappers.push(new IngredientWrapper(cheese, 1));
            const sandwich = new Sandwich(wrappers);
            const price = computePriceUseCase.computePrice(sandwich);
            expect(price).toEqual(16.7);
        });

        it("should return price according only to super cheese promo", () => {
            const wrappers = [];
            wrappers.push(new IngredientWrapper(lettuce, 1));
            wrappers.push(new IngredientWrapper(bacon, 1));
            wrappers.push(new IngredientWrapper(meat, 1));
            wrappers.push(new IngredientWrapper(egg, 1));
            wrappers.push(new IngredientWrapper(cheese, 6));
            const sandwich = new Sandwich(wrappers);
            const price = computePriceUseCase.computePrice(sandwich);
            expect(price).toEqual(12.2);
        });

        it("should return price according to all promos together", () => {
            const wrappers = [];
            wrappers.push(new IngredientWrapper(lettuce, 2));
            wrappers.push(new IngredientWrapper(meat, 4));
            wrappers.push(new IngredientWrapper(egg, 1));
            wrappers.push(new IngredientWrapper(cheese, 5));
            const sandwich = new Sandwich(wrappers);
            const price = computePriceUseCase.computePrice(sandwich);
            expect(price).toEqual(14.94);
        });


        it("should return price according to all promos together, but with inflated price", () => {
            const wrappers = [];
            wrappers.push(new IngredientWrapper(lettuce, 2));
            wrappers.push(new IngredientWrapper(meat, 4));
            wrappers.push(new IngredientWrapper(egg, 1));
            wrappers.push(new IngredientWrapper(cheese, 5));
            const sandwich = new Sandwich(wrappers);
            const inflation = 1.2;
            const price = computePriceUseCase.computePrice(sandwich, inflation  );
            expect(price).toEqual(17.93);
        });
    });
});