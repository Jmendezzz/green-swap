import styled from 'styled-components';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { Pageable } from '@/domain/pageable/Pageable';

interface Props {
  pageable: Pageable;
  totalPages: number;
  setPage: (page: number) => void;
}

function Pagination({ pageable, totalPages, setPage }: Props) {
  let pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxPages = 5;
  const page = pageable.page + 1; // Pageable starts at 0
  pageNumbers = pageNumbers.slice(page - 1, page + maxPages - 1);

  return (
    <StyledPagination>
      {page > 1 && (
        <StyledPaginationButton onClick={() => setPage(page - 1)}>
          <HiArrowNarrowLeft />
        </StyledPaginationButton>
      )}

      {pageNumbers.map((pageNumber) => (
        <StyledPaginationButton
          key={pageNumber}
          onClick={() => setPage(pageNumber-1)}
          disabled={page === pageNumber}
        >
          {pageNumber}
        </StyledPaginationButton>
      ))}

      {page < totalPages && (
        <StyledPaginationButton onClick={() => setPage(page + 1)}>
          <HiArrowNarrowRight />
        </StyledPaginationButton>
      )}
    </StyledPagination>
  );
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 1.5rem;
  height: 70px;
`;

const StyledPaginationButton = styled.button`
  display: flex;
  align-items: center;
  color: var(--white);
  background-color:transparent;
  padding: 0.3rem 1rem; 
  font-size: 2rem;
  font-weight: 500;
  border-radius: 0.5rem;
  &:hover {
    background-color: var(--contrast-color);
    color: var(--pimary-color);
  }

  &:disabled {
    background-color: var(--contrast-color);
    color: var(--primary-color);
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
export default Pagination;
