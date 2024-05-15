import { BasicInfoUserDTO } from "../user/BasicInfoUserDTO";
import { Category } from "./Category";
import { Quality } from "./Condition";
import { Status } from "./Status";

export interface ProductDTO{
    id:number;
    name:string;
    description:string;
    owner: BasicInfoUserDTO,
    price:number;
    category:Category;
    urlImage:string;
    quality: Quality;
    status:Status;
    createdAt:Date;
}