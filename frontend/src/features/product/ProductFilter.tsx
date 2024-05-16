import styled from 'styled-components';
import Heading from '../ui/Heading';
import Input from '../ui/Input';
import ProductCategoryFilter from './ProductCategoryFilter';
import ProductPriceFilter from './ProductPriceFilter';


function ProductFilter() {

  return (
    <StyledFilterContainer>
      <header>
        <Heading type="h2">Filtros de busqueda</Heading>
      </header>
      <div>
        <Input
          variant="outlined"
          placeholder="Buscar productos"
          className="rounded-full"

        ></Input>
      </div>
      <div>
        <Heading type="h3" align="left">
          Categoría
          <ProductCategoryFilter />
        </Heading>
      </div>
      <ProductPriceFilter/>
    </StyledFilterContainer>
  );
}

const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
