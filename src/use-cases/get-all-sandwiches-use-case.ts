import { SandwichRepository } from "../repositories/sandwich-repository";
import { Sandwich } from "../models/sandwich-model";
import { ComputePriceUseCase } from "./compute-price-use-case";
import { ISandwichWrap } from "../interfaces/i-sandwich-wrap";

export class GetAllSandwichesUseCase {
    constructor( 
        private readonly sandwichRepository = new SandwichRepository(),
        private readonly computePriceUseCase = new ComputePriceUseCase()
    ) { }

    public getAllSandwiches(inflation: number = 1.0): Array <ISandwichWrap> {
        try {
            const sandwichList = this.sandwichRepository.getAllSandwiches();
            const sandwichWrappers = sandwichList.map(sandwich => {
                return {
                    sandwich,
                    price: this.computePriceUseCase.computePrice(sandwich, inflation)
                }
            })
            return sandwichWrappers;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}