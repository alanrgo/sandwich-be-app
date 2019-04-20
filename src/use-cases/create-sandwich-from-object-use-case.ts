import { IngredientWrapper } from "../models/ingredient-wrappers-model";
import { ISandwichContent } from "../interfaces/i-sandwich-content";
import { Ingredient } from "../models/ingredient-model";
import { IngredientRepository } from "../repositories/ingredient-repository";
import { Sandwich } from "../models/sandwich-model";

export class CreateSandwichFromObjectUseCase {

    constructor(
        private readonly ingredientRepository = new IngredientRepository()
    ) { }

    public createSandwich(payload: ISandwichContent) {
        let wrappers: Array<IngredientWrapper> = [];
        let prices = this.ingredientRepository.getDictionaryOfValues();

        Object.keys(payload).forEach( key => {
            if ( payload[key] != 0 ){
                let type = this.ingredientRepository.getTypeByName(key);
                let ingredient = new Ingredient(type, prices[key]);
                let wrapper = new IngredientWrapper(ingredient, payload[key]);
                wrappers.push(wrapper);
            }
        })
        
        return new Sandwich(wrappers);
    }
}