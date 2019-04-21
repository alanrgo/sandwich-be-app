import { Sandwich } from "../models/sandwich-model";
import { Ingredient } from "../models/ingredient-model";
import { IngredientWrapper } from "../models/ingredient-wrappers-model";

export class SandwichRepository {

    public getAllSandwiches(): Array<Sandwich> {
        const list = [];

        const lettuce = new Ingredient(Ingredient.IngredientTypes.LETTUCE, 0.4);
        const bacon = new Ingredient(Ingredient.IngredientTypes.BACON, 2);
        const meat = new Ingredient(Ingredient.IngredientTypes.MEAT, 3);
        const egg = new Ingredient(Ingredient.IngredientTypes.EGG, 0.8);
        const cheese = new Ingredient(Ingredient.IngredientTypes.CHEESE, 1.5);

        const xBaconWrappers = [];
        xBaconWrappers.push(new IngredientWrapper(bacon, 1));
        xBaconWrappers.push(new IngredientWrapper(meat, 1));
        xBaconWrappers.push(new IngredientWrapper(cheese, 1));
        list.push(new Sandwich(xBaconWrappers, "X-Bacon"));

        const xBurgerWrappers = [];
        xBurgerWrappers.push(new IngredientWrapper(meat, 1));
        xBurgerWrappers.push(new IngredientWrapper(cheese, 1));
        list.push(new Sandwich(xBurgerWrappers, "X-Burger"));

        const xEggWrappers = [];
        xEggWrappers.push(new IngredientWrapper(egg, 1));
        xEggWrappers.push(new IngredientWrapper(meat, 1));
        xEggWrappers.push(new IngredientWrapper(cheese, 1));
        list.push(new Sandwich(xEggWrappers, "X-Egg"));

        const xEggBaconWrappers = [];
        xEggBaconWrappers.push(new IngredientWrapper(egg, 1));
        xEggBaconWrappers.push(new IngredientWrapper(bacon, 1));
        xEggBaconWrappers.push(new IngredientWrapper(meat, 1));
        xEggBaconWrappers.push(new IngredientWrapper(cheese, 1));
        list.push(new Sandwich(xEggBaconWrappers, "X-EggBacon"));

        return list;
    }
}