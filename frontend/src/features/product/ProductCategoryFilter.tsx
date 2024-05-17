import { useProductFilterContext } from '@/context/ProductFilterContext';
import {
  Category,
  getCategoryKeys,
  getCategoryValue,
} from '@/domain/product/Category';
import GenericProductFilter from './GenericProductFilter';
import Heading from '../ui/Heading';

function ProductCategoryFilter() {
  const { setFilter, searchCriteriaProductDTO } = useProductFilterContext();
  const category = searchCriteriaProductDTO.category;

  return (
    <div>
      <Heading type="h3" align="left">
        Categoria
      </Heading>
      <GenericProductFilter<Category>
        filterItems={getCategoryKeys()}
        getFilterKey={getCategoryValue}
        getFilterValue={getCategoryValue}
        currentFilter={category}
        setFilter={(cat) => setFilter({ category: cat })}
      />
    </div>
  );
}

export default ProductCategoryFilter;
