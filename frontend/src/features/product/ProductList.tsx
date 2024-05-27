import ProductItemCard from './ProductItemCard';
import { useProducts } from './useProducts';
import ProductFilter from './ProductFilter';
import List from '../ui/List';

function ProductList() {
  const { data, isLoading, setPageable, pageable } = useProducts();

  const setPage = (page: number) => {
    setPageable({ ...pageable, page });
  };

  return (
    <div className="flex gap-10">
      <ProductFilter />
      <List>
        <List.Items isLoading={isLoading} data={data?.content} render={(product) => <ProductItemCard key={product.id} product={product} />} />
        <List.Pagination pageable={pageable} totalPages={data?.totalPages} setPage={setPage} />
      </List>
    </div>
  );
}
export default ProductList;
