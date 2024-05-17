import { useState } from 'react';
import Row from '../ui/Row';
import styled from 'styled-components';

interface FilterProps<T> {
  filterItems: T[];
  getFilterKey: (item: T) => string;
  getFilterValue: (item: T) => string;
  currentFilter: T | undefined;
  setFilter: (filter: T) => void;
}

function GenericProductFilter<T>({
  filterItems,
  getFilterKey,
  getFilterValue,
  currentFilter,
  setFilter,
}: FilterProps<T>) {
  const [selectedFilter, setSelectedFilter] = useState<T | undefined>(currentFilter);

  return (
    <StyledFilterContainer type="vertical">
      {filterItems.map((item) => (
        <button
          key={getFilterKey(item)}
          onClick={() => {
            setSelectedFilter(item);
            setFilter(item);
          }}
          className={`px-10 py-4 rounded-lg text-left hover:bg-primary  ${
            selectedFilter === item && 'bg-primary'
          }`}
        >
          {getFilterValue(item)}
        </button>
      ))}
    </StyledFilterContainer>
  );
}

const StyledFilterContainer = styled(Row)`
  align-items: normal;
  gap: 0.5rem;
`;

export default GenericProductFilter;