import { Pageable } from '@/domain/pageable/Pageable';
import { ReactElement, createContext, useContext } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import Spinner from './Spinner';

const StyledTable = styled.div`
  border: 1px solid var(--primary-color-light);

  font-size: 1.4rem;
  background-color: var(--primary-color);
  border-radius: 7px;
  overflow: hidden;
`;

interface CommonRowProps {
  columns: string;
}

const CommonRow = styled.div<CommonRowProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--primary-color-light);
  border-bottom: 1px solid var(--primary-color-light);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  text-align:center;
  font-weight: 600;
  color: var(--white);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--primary-color-light);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--primary-color-light);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext({
  columns: '',
});

function Table({
  columns,
  children,
  isLoading
}: {
  columns: string;
  children: ReactElement[];
    isLoading: boolean;
}) {
    if(isLoading) {
        return <Spinner />
    }
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactElement[] }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} >
      {children}
    </StyledHeader>
  );
}

function Row({ children }: { children: ReactElement[] }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}


function Body<T>({ data, render }: { data?: Array<T>; render: (item: T) => ReactElement }) {
  if(!data || data.length === 0){
    return <Empty>No hay resultados</Empty>
  }
  return(
    <StyledBody>
      {data.map(render)}
    </StyledBody>
  )
}

function TablePagination({
    pageable,
    totalPages,
    setPage,
  }: {
    pageable?: Pageable;
    totalPages?: number;
    setPage: (page: number) => void;
  }){
    if (!pageable || !totalPages) return null;

    return <Footer>
        <Pagination pageable={pageable} totalPages={totalPages} setPage={setPage} />
    </Footer>
  }

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Pagination = TablePagination;

export default Table;