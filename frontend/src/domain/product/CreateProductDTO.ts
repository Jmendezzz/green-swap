import { Category } from "./Category";
import { Quality } from "./Condition";

export interface CreateProductDTO {
    name: string;
    description: string;
    price: number;
    category: Category;
    quality: Quality;
    
}