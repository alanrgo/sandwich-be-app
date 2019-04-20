import { Ingredient } from "../models/ingredient-model";

export class IngredientRepository {

    public names: object;
    public prices: object; 

    constructor () {
        this.prices = this.setDictionaryOfValues();
        this.names = this.setNameTranslation();
    }

    private setDictionaryOfValues(): object {
        const values = {
            lettuce: 0.4,
            bacon: 2.0,
            meat: 3.0,
            egg: 0.8,
            cheese: 1.5
        }
        return values;
    }

    private setNameTranslation():object {
        const lettuce = Ingredient.IngredientTypes.LETTUCE;
        const bacon = Ingredient.IngredientTypes.BACON;
        const meat = Ingredient.IngredientTypes.MEAT;
        const egg = Ingredient.IngredientTypes.EGG;
        const cheese = Ingredient.IngredientTypes.CHEESE;
        
        const names = {};
        names[lettuce] = "lettuce";
        names[bacon] = "bacon";
        names[meat] = "meat";
        names[egg] = "egg";
        names[cheese] = "cheese";
        return names;
    }

    public getDictionaryOfValues(): object {
        return this.prices;
    }

    public getNameTranslation(): object {
        return this.names;
    } 

    public getTypeByName(name: string): number {
        let type = null;
        Object.keys(this.names).forEach(k => {
            if( this.names[k] === name ) {
                type = parseInt(k);
            }
        })
        return type;
    }

}