import { ChatDTO } from "../chat/ChatDTO";
import { ProductDTO } from "../product/ProductDTO";
import { Status } from "./Status";

export interface ExchangeDTO {
    id:string;
    productRequested:ProductDTO;
    productOffered:ProductDTO;
    status:Status;
    chat:ChatDTO;
    createdAt:Date;
}