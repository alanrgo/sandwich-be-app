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

    constructor (
        type: IngredientTypes,
        price: number
    ) {
        this.type = type;
        this.price = price;
     } 

}