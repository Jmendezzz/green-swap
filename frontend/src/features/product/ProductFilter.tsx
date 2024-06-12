import Heading from '../ui/Heading';
import ProductCategoryFilter from './ProductCategoryFilter';
import ProductPriceFilter from './ProductPriceFilter';
import ProductNameFilter from './ProductNameFilter';
import ProductQualityFilter from './ProductQualityFilter';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Button from '../ui/Button';
import SidebarMenu from '../ui/SidebarMenu';


function ProductFilter() {

  return (
    <SidebarMenu>
      <Heading type="h3">Filtros de busqueda</Heading>
      <ProductNameFilter />
      <ProductCategoryFilter/>
      <ProductPriceFilter/>
      <ProductQualityFilter/>
      <Link to={ROUTES.createProducts} className='flex justify-center'>
        <Button variant="primary">Crear producto</Button>
      </Link>
    </SidebarMenu>
  );
}


export default ProductFilter;
