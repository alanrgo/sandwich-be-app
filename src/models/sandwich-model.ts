import { IngredientWrapper } from "./ingredient-wrappers-model";

export class Sandwich {

    public ingredientWrappers: Array<IngredientWrapper>;

    constructor (
        ingredientWrappers: Array<IngredientWrapper>
    ) {
        this.ingredientWrappers = ingredientWrappers;
    }
}