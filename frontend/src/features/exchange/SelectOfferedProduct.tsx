import { HiPhoto } from 'react-icons/hi2';
import Heading from '../ui/Heading';
import Modal from '../ui/Modal';
import Tabs from '../ui/Tabs';
import { useMemo } from 'react';
import ListCreateExchangeUserProducts from './ListCreateExchangeUserProducts';
import CreateProductForm from '../product/CreateProductForm';
import { ProductDTO } from '@/domain/product/ProductDTO';

interface Props {
  productOfferedHandler: (product: ProductDTO) => void;
}

function SelectOfferedProduct({ productOfferedHandler }: Props) {
  const tabs = useMemo(() => {
    return [
      {
        id: 'createProduct',
        name: 'Crear producto',
        content: <CreateProductForm onSuccessHandler={productOfferedHandler} productStatus='TO_EXCHANGE'/>,
      },
      {
        id: 'myProducts',
        name: 'Mis productos',
        content: <ListCreateExchangeUserProducts productSelectedHandler={productOfferedHandler} />,
      },
    ];
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Heading type="h2">Selecciona un producto para intercambiar</Heading>
      <div className="h-full w-full flex justify-center">
        <Modal>
          <Modal.Open opens="select-product">
            <HiPhoto className="exchange-icon text-contrast text-[400px] cursor-pointer" />
          </Modal.Open>
          <Modal.Window name="select-product">
            <div className="w-[800px] h-[600px]">
              <Tabs tabs={tabs} />
            </div>
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default SelectOfferedProduct;
