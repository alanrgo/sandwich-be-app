export interface ISandwichContent {
    lettuce: number;
    bacon: number;
    egg: number;
    cheese: number;
    meat: number;
}

export interface ISandwichRequest {
    content: ISandwichContent;
    inflation: number;
}