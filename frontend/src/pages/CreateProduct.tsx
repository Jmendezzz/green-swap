import CreateProductForm from '@/features/product/CreateProductForm';
import Section from '@/features/ui/Section';
import styled from 'styled-components';

function CreateProduct() {

  return (
  <StyledCreateProductSection>
    <CreateProductForm />
  </StyledCreateProductSection>
  )
}

const StyledCreateProductSection = styled(Section)`
  background-color: var(--primary-color);
  width: 100%;
  height: 100%;
`;

export default CreateProduct;
