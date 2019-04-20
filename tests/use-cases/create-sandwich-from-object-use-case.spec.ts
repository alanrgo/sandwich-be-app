import { CreateSandwichFromObjectUseCase } from "../../src/use-cases/create-sandwich-from-object-use-case";
import { Ingredient } from "../../src/models/ingredient-model";
import { Sandwich } from "../../src/models/sandwich-model";

describe("CreateSandwichFromObjectUseCase", () => {

    let createSandwichFromObjectUseCase;

    describe("Valid Cases", () => {

        beforeAll(() => {
            createSandwichFromObjectUseCase = new CreateSandwichFromObjectUseCase();
        });

        it("should create sandwich object from json payload", () => {
            const content = {
                lettuce: 5,
                bacon: 3,
                egg: 1,
                meat: 1,
                cheese: 1
            }
            const sandwich: Sandwich = createSandwichFromObjectUseCase.createSandwich(content);
            expect(sandwich.ingredientWrappers[0].ingredient.type).toBe(Ingredient.IngredientTypes.LETTUCE);
            expect(sandwich.ingredientWrappers[0].quantity).toBe(5);

            expect(sandwich.ingredientWrappers[1].ingredient.type).toBe(Ingredient.IngredientTypes.BACON);
            expect(sandwich.ingredientWrappers[1].quantity).toBe(3);

            expect(sandwich.ingredientWrappers[2].ingredient.type).toBe(Ingredient.IngredientTypes.EGG);
            expect(sandwich.ingredientWrappers[2].quantity).toBe(1);

            expect(sandwich.ingredientWrappers[3].ingredient.type).toBe(Ingredient.IngredientTypes.MEAT);
            expect(sandwich.ingredientWrappers[3].quantity).toBe(1);

            expect(sandwich.ingredientWrappers[4].ingredient.type).toBe(Ingredient.IngredientTypes.CHEESE);
            expect(sandwich.ingredientWrappers[4].quantity).toBe(1);
        });
    });
});