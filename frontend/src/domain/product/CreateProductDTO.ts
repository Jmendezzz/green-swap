import { Category } from "./Category";
import { Quality } from "./Condition";
import { Status } from "./Status";

export interface CreateProductDTO {
    name: string;
    description: string;
    price: number;
    category: Category;
    quality: Quality;
    productImage?: File;
    status: keyof typeof Status;

}