import { Category } from "./Category";
import { Quality } from "./Condition";

export interface SearchCriteriaProductDTO{
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    category?: Category;
    quality?: Quality;
}