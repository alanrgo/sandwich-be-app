import { Sandwich } from "../models/sandwich-model";

export interface ISandwichWrap {
    sandwich: Sandwich,
    price: number;
}