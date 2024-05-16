import { useProductFilterContext } from "@/context/ProductFilterContext";
import useProductSuggestions from "./useProductSuggestions";
import styled from "styled-components";
import Input from "../ui/Input";
import { HiSearch } from "react-icons/hi";
import { useEffect, useState } from "react";


function ProductNameFilter() {
    const { setFilter, searchCriteriaProductDTO } = useProductFilterContext();
    const [nameQuery, setNameQuery] = useState(searchCriteriaProductDTO.name);


    const { getProductsSuggestions, isLoading, suggestions } = useProductSuggestions();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNameQuery(e.target.value);
    }

    useEffect(()=>{
        if(!nameQuery) return;
        getProductsSuggestions(nameQuery);
    },[nameQuery])

    function blurHandler() {
        setFilter(
            {
                name: nameQuery
            }
        )
    }

    return (
        <SearchInputWrapper>

            <Input placeholder="Buscar productos" variant='outlined' onChange={handleInputChange} onBlur={blurHandler} />
            <SearchAdornment>
                <HiSearch />
            </SearchAdornment>

            <SuggestionsContainer>
                {
                    suggestions ? (suggestions.map((sugg) => <li>{sugg}</li>)) : <p>No hay resultados para {nameQuery}</p>
                }
            </SuggestionsContainer>



        </SearchInputWrapper>

    )


}

const SearchInputWrapper = styled.div`
    position: relative;
    width: 100%;
`

const SearchAdornment = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  font-size:2rem;
  transform: translateY(-50%);
`;

const SuggestionsContainer = styled.ul`
    display:flex,
    flex-direction:column;
    gap:0.5rem;
    position:absolute;
    top:100%;
    padding:1rem;
    background-color: var(--primary-color);
    width:100%
`

export default ProductNameFilter;