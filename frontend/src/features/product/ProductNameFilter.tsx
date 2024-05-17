import { useProductFilterContext } from '@/context/ProductFilterContext';
import useProductSuggestions from './useProductSuggestions';
import styled from 'styled-components';
import Input from '../ui/Input';
import { HiSearch } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import useClickOutside from '@/hooks/useClickOutside';

function ProductNameFilter() {
  const { setFilter, searchCriteriaProductDTO } = useProductFilterContext();
  const [isSuggestionsOpened, setIsSuggestionsOpened] = useState(false);
  const [nameQuery, setNameQuery] = useState(searchCriteriaProductDTO.name);
  const { getProductsSuggestions, isLoading, suggestions } = useProductSuggestions();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value === '') {
        setIsSuggestionsOpened(false);
    }else{
        setIsSuggestionsOpened(true);
    }
    setNameQuery(e.target.value);
  }

  useEffect(() => {
    if (!nameQuery) return;
    getProductsSuggestions(nameQuery);
  }, [nameQuery, getProductsSuggestions]);

  function blurHandler() {
    setIsSuggestionsOpened(false);
    setFilter({
      name: nameQuery,
    });
  }
  function handleKeyPress(event:React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      blurHandler();
    }
  }
  const ref = useClickOutside(blurHandler);

  return (
    <SearchInputWrapper>
      <StyledInputSearch
        placeholder="Buscar productos"
        variant="outlined"
        onChange={handleInputChange}
        onBlur={blurHandler}
        value={nameQuery}
        onKeyPress={handleKeyPress}
      />
      <SearchAdornment>
        <HiSearch />
      </SearchAdornment>
      { isSuggestionsOpened &&  (
        <SuggestionsContainer ref={ref}>
          {isLoading ? (
            <div className='w-full h-full flex items-center  justify-center'>
                <ClipLoader color="var(--secondary-color)" />
            </div>
          ) : suggestions && suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => setNameQuery(suggestion)}>
                {suggestion}
              </li>
            ))
          ) : (
            <p>No hay sugerencias para {nameQuery}</p>
          )}
        </SuggestionsContainer>
      )}
    </SearchInputWrapper>
  );
}
const StyledInputSearch = styled(Input)`
  background-color: var(--primary-color);
  border: none;
`;
const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchAdornment = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 2rem;
  transform: translateY(-50%);
`;

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
  position: absolute;
  top: 80%;
  padding: 2rem;
  min-height: 200px;
  background-color: var(--primary-color);
  width: 100%;

  & > li{
    list-style: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s;
    &:hover{
      background-color: var(--primary-color-light);
    }
  }
`;

export default ProductNameFilter;
