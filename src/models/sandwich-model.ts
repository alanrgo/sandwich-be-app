import { IngredientWrapper } from "./ingredient-wrappers-model";

export class Sandwich {

    public ingredientWrappers: Array<IngredientWrapper>;
    public sandwichName: string;

    constructor (
        ingredientWrappers: Array<IngredientWrapper>,
        sandwichName: string = "custom"
    ) {
        this.ingredientWrappers = ingredientWrappers;
        this.sandwichName = sandwichName;
    }
}