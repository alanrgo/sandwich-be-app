import { Ingredient } from "./ingredient-model";

export class IngredientWrapper {

    public ingredient: Ingredient;
    public quantity: number;

    constructor(
        ingredient: Ingredient,
        quantity: number
    ) {
        this.ingredient = ingredient;
        this.quantity = quantity;
    }
    
}