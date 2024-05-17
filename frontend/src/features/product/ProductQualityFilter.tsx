import { useProductFilterContext } from '@/context/ProductFilterContext';
import {
  Quality,
  getQualityKeys,
  getQualityValue,
} from '@/domain/product/Condition';
import GenericProductFilter from './GenericProductFilter';
import Heading from '../ui/Heading';

function ProductQualityFilter() {
  const { setFilter, searchCriteriaProductDTO } = useProductFilterContext();
  const quality = searchCriteriaProductDTO.quality;

  return (
    <div>
      <Heading type="h3" align="left">
        Estado
      </Heading>
      <GenericProductFilter<Quality>
        filterItems={getQualityKeys()}
        getFilterKey={getQualityValue}
        getFilterValue={getQualityValue}
        currentFilter={quality}
        setFilter={(qua) => setFilter({ quality: qua })}
      />
    </div>
  );
}

export default ProductQualityFilter;
