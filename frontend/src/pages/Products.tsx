import { useProducts } from "@/features/product/useProducts"
import styled from "styled-components"

function Products() {

  const{data} = useProducts();
  console.log(data)
  return (
    <ProductSection>
        

    </ProductSection>
  )
}

const ProductSection = styled.section`
    background-color: var(--primary-color);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    `

export default Products