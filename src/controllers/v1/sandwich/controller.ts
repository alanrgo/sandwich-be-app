import { ComputePriceUseCase } from "../../../use-cases/compute-price-use-case";
import { Sandwich } from "../../../models/sandwich-model";
import { CreateSandwichFromObjectUseCase } from "../../../use-cases/create-sandwich-from-object-use-case";
import { ISandwichContent } from "../../../interfaces/i-sandwich-content";
import { GetAllSandwichesUseCase } from "../../../use-cases/get-all-sandwiches-use-case";
import { ISandwichResponse } from "../../../interfaces/i-sandwich-response";
import { ISandwichWrap } from "../../../interfaces/i-sandwich-wrap";

export class SandwichController {

    constructor( 
        private readonly computePriceUseCase = new ComputePriceUseCase(),
        private readonly createSandwichFromObjectUseCase = new CreateSandwichFromObjectUseCase(),
        private readonly getAllSandwichesUseCase = new GetAllSandwichesUseCase()
        ) { }

    public computeSandwichPrice(req, res, next) {
        const content = req.body.content as ISandwichContent;
        const inflation = req.body.inflation || 1.0;
        try {
            const sandwich: Sandwich = this.createSandwichFromObjectUseCase.createSandwich(content);
            const price = this.computePriceUseCase.computePrice(sandwich, inflation);
            res.header("Content-type", "application/json");
            res.json( { price } );
        } catch (e) {
            res.sendStatus(400);
        }
    }

    public getAllSandwiches(req, res, next) {
        const inflation = req.body.inflation || 1.0;
        try {
            const sandwichList: ISandwichWrap[] = this.getAllSandwichesUseCase.getAllSandwiches(inflation);
            const sandwichResponse: ISandwichResponse[] = sandwichList.map( sandwichWrapper => {
                const ingredients = sandwichWrapper.sandwich.ingredientWrappers.map( wrap => wrap.ingredient.name );
                const price = sandwichWrapper.price;
                const name = sandwichWrapper.sandwich.sandwichName;
                return {
                    price,
                    name,
                    ingredients
                }
            });
            res.header("Content-type", "application/json");
            res.json(sandwichResponse);
        } catch (e) {
            res.sendStatus(400);
        }
        
    }
}