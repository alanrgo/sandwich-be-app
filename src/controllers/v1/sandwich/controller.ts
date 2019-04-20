import { ComputePriceUseCase } from "../../../use-cases/compute-price-use-case";
import { Sandwich } from "../../../models/sandwich-model";
import { CreateSandwichFromObjectUseCase } from "../../../use-cases/create-sandwich-from-object-use-case";
import { ISandwichContent } from "../../../interfaces/i-sandwich-content";

export class SandwichController {

    constructor( 
        private readonly computePriceUseCase = new ComputePriceUseCase(),
        private readonly createSandwichFromObjectUseCase = new CreateSandwichFromObjectUseCase()
        ) { }

    public computeSandwichPrice(req, res, next) {
        const content = req.body.content as ISandwichContent;
        const inflation = req.body.inflation || 1.0;
        try {
            const sandwich: Sandwich = this.createSandwichFromObjectUseCase.createSandwich(content);
            const price = this.computePriceUseCase.computePrice(sandwich, inflation);
            res.json( { price } );
        } catch (e) {
            res.sendStatus(400);
        }
    }
}