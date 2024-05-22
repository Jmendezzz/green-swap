import { ProductDTO } from "@/domain/product/ProductDTO"
import styled from "styled-components"
import Row from "../ui/Row"
import Heading from "../ui/Heading"
import ProductDetailCard from "./ProductDetailCard"

interface Props{
    product: Partial<ProductDTO>
}

function CreateProductPreview({product}: Props) {
  return (
    <StyledPreviewContainer type="vertical">
        <header className="w-full">
            <Heading type="h2" align="left">Previsualización</Heading>
        </header>
        <ProductDetailCard product={product} />
    </StyledPreviewContainer>
    
  )
}

const StyledPreviewContainer = styled(Row)`
    background-color: var(--primary-color-light);
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;

    width: 100%;

`

export default CreateProductPreview