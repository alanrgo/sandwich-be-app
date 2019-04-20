import { IngredientRepository } from "../repositories/ingredient-repository";
import { Sandwich } from "../models/sandwich-model";
import { Ingredient } from "../models/ingredient-model";

export class ComputePriceUseCase {
    constructor(
        private readonly ingredientRepository = new IngredientRepository()
        ) { }

    private computeMeatDiscount(ingredientNames: object, ingredientValues:object, nbr_meat: number): number {
        const meatName = ingredientNames[Ingredient.IngredientTypes.MEAT];
        const meatPrice = ingredientValues[meatName];

        const meatDiscount = Math.floor(nbr_meat/3) * meatPrice;
        return meatDiscount;
    }

    private computeCheeseDiscount(ingredientNames: object, ingredientValues:object, nbr_cheese: number): number {
        let cheeseName = ingredientNames[Ingredient.IngredientTypes.CHEESE];
        let cheesePrice = ingredientValues[cheeseName];

        let cheeseDiscount = Math.floor(nbr_cheese/3) * cheesePrice;
        return cheeseDiscount;
    }

    private computePromoFactor(thereIsLettuce: boolean, thereIsBacon:boolean): number {
        let promoFactor = 1.0;
        if ( thereIsLettuce && !thereIsBacon ) {
            promoFactor = 0.9;
        }
        return promoFactor;
    }

    private roundPrice(price): number {
        return Math.round(price * 100)/ 100;
    }

    public computePrice(sandwich: Sandwich, inflation: number = 1.0): number {
        let price = 0;
        let nbr_meat = 0;
        let nbr_cheese = 0;
        let thereIsLettuce = false;
        let thereIsBacon = false;
        let meatDiscount = 0.0;
        let cheeseDiscount = 0.0;
        let promoFactor = 1.0;

        sandwich.ingredientWrappers.forEach(ingredientWrapper => {

            if (ingredientWrapper.ingredient.type === Ingredient.IngredientTypes.CHEESE ) {
                nbr_cheese = nbr_cheese + ingredientWrapper.quantity;
            }

            if (ingredientWrapper.ingredient.type === Ingredient.IngredientTypes.MEAT ) {
                nbr_meat = nbr_meat + ingredientWrapper.quantity;
            }

            if (ingredientWrapper.ingredient.type === Ingredient.IngredientTypes.LETTUCE ) {
                thereIsLettuce = true;
            }

            if (ingredientWrapper.ingredient.type === Ingredient.IngredientTypes.BACON ) {
                thereIsBacon = true;
            }

            price = price + ingredientWrapper.quantity * ingredientWrapper.ingredient.price;
        });

        let ingredientNames = this.ingredientRepository.getNameTranslation();
        let ingredientValues = this.ingredientRepository.getDictionaryOfValues();

        promoFactor = this.computePromoFactor(thereIsLettuce, thereIsBacon);
        meatDiscount = this.computeMeatDiscount(ingredientNames, ingredientValues, nbr_meat);
        cheeseDiscount = this.computeCheeseDiscount(ingredientNames, ingredientValues, nbr_cheese);
        
        price = promoFactor * ( price - meatDiscount - cheeseDiscount );
        price = inflation * price;

        return this.roundPrice(price);
    }
}