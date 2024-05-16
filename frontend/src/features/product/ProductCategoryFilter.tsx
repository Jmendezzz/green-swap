import { useProductFilterContext } from '@/context/ProductFilterContext';
import { Category, getCategoryKeys, getCategoryValue } from '@/domain/product/Category';
import { useState } from 'react';
import Row from '../ui/Row';
import styled from 'styled-components';

function ProductCategoryFilter() {
      const { setFilter, searchCriteriaProductDTO } = useProductFilterContext();

  const [category, setCategory] = useState<Category | undefined>(searchCriteriaProductDTO.category);

  return (
    <StyledFilterContainer type='vertical'> 
      {getCategoryKeys().map((cat) => (
        <button
          key={getCategoryValue(cat)}
          onClick={() => {
            setCategory(cat);
            setFilter({ category: cat });
          }}
          className={`px-10 py-4 rounded-lg text-left hover:bg-primary  ${
            category === cat && 'bg-primary'
          }`}
        >
          {getCategoryValue(cat)}
        </button>
      ))}
    </StyledFilterContainer>
  );
}
const StyledFilterContainer = styled(Row)`
    align-items:normal;
    gap:0.5rem;
`

export default ProductCategoryFilter;
