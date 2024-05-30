import { ProductDTO } from "@/domain/product/ProductDTO";
import Heading from "../ui/Heading";
import { HiPhoto } from "react-icons/hi2";
import styled from "styled-components";

interface Props {
  product: ProductDTO;
}
function ProductToExchangeCard({ product }: Props) {
  return(

  <StyledProductToExchange>
    <Heading type="h2">{product.name}</Heading>
    {product.urlImage != null && product.urlImage !== '' ? (
      <img
        src={product.urlImage}
        alt={product.name}
        className="w-[100px] h-[200px]"
      />
    ) : (
      <HiPhoto className="text-[400px]" />
    )}
  </StyledProductToExchange>
  )
}
const StyledProductToExchange = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  & > img {
    object-fit: cover;
    width: 400px;
    min-height: 400px;
    border-radius: 2rem;
  }
`;


export default ProductToExchangeCard;
