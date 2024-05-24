import styled from 'styled-components';
import ProductItemCard from './ProductItemCard';
import { useProducts } from './useProducts';
import { ClipLoader } from 'react-spinners';
import ProductFilter from './ProductFilter';
import Empty from '../ui/Empty';
import Pagination from '../ui/Pagination';
import { Devices } from '@/styles/Devices';

function ProductList() {
  const { data, isLoading, setPageable, pageable } = useProducts();

  const setPage = (page: number) => {
    setPageable({ ...pageable, page });
  };

  return (
    <div className="flex gap-10">
      <ProductFilter />
      <StyledProductItemsContainer>
        {isLoading ? (
          <div className="flex w-full h-full items-center justify-center">
            <ClipLoader color={'white'} size={150} />
          </div>
        ) : (
          <>
            {data?.content && data.content.length > 0 ? (
              <div className="flex flex-col justify-between gap-10">
                <StyledProductItemsContainer>
                  {data.content.map((product) => (
                    <ProductItemCard key={product.id} product={product} />
                  ))}
                </StyledProductItemsContainer>

                <Pagination
                  pageable={pageable}
                  totalPages={data?.totalPages}
                  setPage={setPage}
                />
              </div>
            ) : (
              <Empty message="No hay productos encontrados" />
            )}
          </>
        )}
      </StyledProductItemsContainer>
    </div>
  );
}
const StyledProductItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  min-height: 100vh;

  @media (min-width:${Devices.tablet}) {
    gap: 3rem;
  }
`;

export default ProductList;
