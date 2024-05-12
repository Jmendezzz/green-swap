import { Category } from "./Category";
import { Quality } from "./Condition";

export interface ListProductDTO {
    id:number,
    name:string,
    price:number,
    urlImage:string,
    category: Category,
    quality:Quality,
}