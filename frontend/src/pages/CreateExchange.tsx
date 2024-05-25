import { useProduct } from '@/features/product/useProduct';

function CreateExchange() {
  const { isLoading, product: productToExchange } = useProduct();

  

  return <div>CreateExchange</div>;
}

export default CreateExchange;
