import styled from 'styled-components';
import Heading from '../ui/Heading';
import Input from '../ui/Input';
import ProductCategoryFilter from './ProductCategoryFilter';
import ProductPriceFilter from './ProductPriceFilter';
import ProductNameFilter from './ProductNameFilter';
import ProductQualityFilter from './ProductQualityFilter';


function ProductFilter() {

  return (
    <StyledFilterContainer>
      <header>
        <Heading type="h2">Filtros de busqueda</Heading>
      </header>
      <ProductNameFilter />
      <ProductCategoryFilter/>
      <ProductPriceFilter/>
      <ProductQualityFilter/>
    </StyledFilterContainer>
  );
}

const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: var(--primary-color-light);
  border-radius: 3rem;
  width: 500px;
  padding: 2rem;
  height: 100vh;
  position: sticky;
  top: 0; /* This will make it stick to the top of the viewport */
  overflow-y: auto;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default ProductFilter;
