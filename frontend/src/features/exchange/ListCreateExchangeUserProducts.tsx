import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { useUserProducts } from '../auth/user/useUserProducts';
import ProductItemCard from '../product/ProductItemCard';
import List from '../ui/List';
import { ProductDTO } from '@/domain/product/ProductDTO';

interface Props {
  productSelectedHandler?: (product: ProductDTO) => void;
  onCloseModal?: () => void;
}

function ListCreateExchangeUserProducts({ productSelectedHandler,onCloseModal}: Props) {
  const { isLoading, pageable, data, setPageable } = useUserProducts();
  const handlerProductSelected = (product: ListProductDTO) => {
    productSelectedHandler?.(product as ProductDTO);
    onCloseModal?.();
  };
  const setPage = (page: number) => {
    setPageable({ ...pageable, page });
  };
  return (
    <List>
      <List.Items
        isLoading={isLoading}
        data={data?.content}
        render={(product) => (
          <ProductItemCard
            size="xsm"
            key={product.id}
            product={product}
            onClick={handlerProductSelected}
          />
        )}
      />
      <List.Pagination
        pageable={pageable}
        totalPages={data?.totalPages}
        setPage={setPage}
      />
    </List>
  );
}

export default ListCreateExchangeUserProducts;
