import ProductList from "@/features/product/ProductList";
import Section from "@/features/ui/Section";
import styled from "styled-components"

function Products() {
  return (
    <ProductSection>
      <ProductList />
    </ProductSection>
  )
}

const ProductSection = styled(Section)`
    background-color: var(--primary-color);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    `

export default Products