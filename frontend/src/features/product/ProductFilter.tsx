import { Category, getCategoryKeys, getCategoryValue } from "@/domain/product/Category";
import { SearchCriteriaProductDTO } from "@/domain/product/SearchCriteriaProductDTO"
import { useState } from "react";
import styled from "styled-components";

interface Props {
    setFilter: ( searchCriteriaProductDTO : Partial<SearchCriteriaProductDTO>) => void
}
function ProductFilter({setFilter}: Props) {

  const [category, setCategory] = useState<Category | undefined>(undefined);

  return (
    <StyledFilterContainer>
      {getCategoryKeys().map((cat) => (
        <button
          key={getCategoryValue(cat)}
          onClick={() => {
            setCategory(cat);
            setFilter({category: cat})
          }}
          className={`px-4 rounded-lg text-left  ${
            category === cat && 'bg-primary'
          }`}
        >
          {getCategoryValue(cat)}
        </button>
      
      ))}
    </StyledFilterContainer>

  )
}

const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-color: var(--primary-color-light);
  border-radius:3rem;
  width: 500px;
`

export default ProductFilter