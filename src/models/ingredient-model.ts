enum IngredientTypes {
    LETTUCE,
    BACON,
    MEAT,
    EGG,
    CHEESE
}

export class Ingredient {

    public static IngredientTypes = IngredientTypes;
    public type: IngredientTypes;
    public price: number;
    public name: string;

    constructor (
        type: IngredientTypes,
        price: number,
    ) {
        this.type = type;
        this.price = price;
        this.name = this.getName(type);
    }
    
    public getName(type: IngredientTypes): string {
        const key = Object.keys(Ingredient.IngredientTypes).filter(k => typeof IngredientTypes[k] === "number" && IngredientTypes[k]  === type)[0];
        return key.toLocaleLowerCase();
    }

}