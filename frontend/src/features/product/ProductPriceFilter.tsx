import styled from 'styled-components';
import Heading from '../ui/Heading';
import Input from '../ui/Input';
import Row from '../ui/Row';
import { useState } from 'react';
import { useProductFilterContext } from '@/context/ProductFilterContext';
import NumericInput from '../ui/NumericInput';

function ProductPriceFilter() {

    const { setFilter, searchCriteriaProductDTO } = useProductFilterContext();
    const [minPrice, setMinPrice] = useState(searchCriteriaProductDTO.minPrice?.toString() || '');
    const [maxPrice, setMaxPrice] = useState(searchCriteriaProductDTO.maxPrice?.toString() || '');

    const handleMinBlur = () => {
        if(minPrice === '') return setFilter({minPrice: undefined});
        const price = minPrice === '' ? 0 : parseInt(minPrice);
        setFilter({minPrice: price});
    }

    const handleMaxBlur = () => {
        if(maxPrice === '') return setFilter({maxPrice: undefined});
        const price = maxPrice === '' && minPrice === '' ? 0 : parseInt(maxPrice);
        setFilter({maxPrice: price});
    }

  return (
    <Row type="vertical">
      <Heading type="h3" align="left">
        Precio
      </Heading>
      <StyledFilterContainer>
        <NumericInput value={minPrice}  setValue={setMinPrice} placeholder="Mínimo" onBlur={handleMinBlur}/>
        <NumericInput  value={maxPrice} setValue={setMaxPrice} placeholder="Máximo" onBlur={handleMaxBlur}/>
      </StyledFilterContainer>
    </Row>
  );
}

const StyledFilterContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export default ProductPriceFilter;
