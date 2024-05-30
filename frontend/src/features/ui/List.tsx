import { Pageable } from '@/domain/pageable/Pageable';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';
import Empty from './Empty';
import Pagination from './Pagination';

const StyledItemsContainer = styled.div<{ direction: 'row' | 'col' }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${({ direction }) => direction === 'row' && 'flex-direction: row;'}
  ${({ direction }) => direction === 'col' && 'flex-direction: column;'}
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 20;
  width: 100%;
  height: 100%;
`;

function List({ children }: { children: ReactNode }) {
  return <StyledList>{children}</StyledList>;
}

function ListItems<T>({
  isLoading,
  render,
  data,
  direction = 'row',
}: {
  isLoading: boolean;
  render: (item: T) => ReactNode;
  data: T[] | undefined;
  direction?: 'row' | 'col';
}) {

    if(isLoading) {
        return <StyledItemsContainer direction={direction} >
            <Spinner color={'white'} size="lg" />
        </StyledItemsContainer>
    }
  return (
    <StyledItemsContainer direction={direction}>

      {data && data.length > 0 ? (
        data.map((item) => render(item))
      ) : (
        <Empty message="No hay resultados encontrados" />
      )}
    </StyledItemsContainer>
  );
}

function ItemsPagination({
  pageable,
  totalPages,
  setPage,
}: {
  pageable?: Pageable;
  totalPages?: number;
  setPage: (page: number) => void;
}) {
  const setPageNumber = (page: number) => {
    setPage(page);
  };
  if (!pageable || !totalPages) return null;

  return (
    <Pagination
      pageable={pageable}
      totalPages={totalPages}
      setPage={setPageNumber}
    />
  );
}

List.Items = ListItems;
List.Pagination = ItemsPagination;

export default List;
