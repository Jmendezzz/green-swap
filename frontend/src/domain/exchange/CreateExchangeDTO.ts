import { ProductDTO } from "../product/ProductDTO";

export interface CreateExchangeDTO {
    productRequested: ProductDTO;
    productOffered: ProductDTO;
}