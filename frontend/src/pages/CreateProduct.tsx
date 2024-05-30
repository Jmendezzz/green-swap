import { ProductDTO } from '@/domain/product/ProductDTO';
import CreateProductForm from '@/features/product/CreateProductForm';
import CreateProductPreview from '@/features/product/CreateProductPreview';
import Section from '@/features/ui/Section';
import SidebarLayout from '@/features/ui/SidebarLayout';
import { useState } from 'react';
import styled from 'styled-components';

function CreateProduct() {
  const [productPreview, setProductPreview] = useState<Partial<ProductDTO>>({});

  return (
    <StyledCreateProductSection>

      <SidebarLayout>
        <SidebarLayout.Sidebar>
          <CreateProductForm onFormChange={(product: Partial<ProductDTO>)=> setProductPreview(product)}/>
        </SidebarLayout.Sidebar>

        <SidebarLayout.Main>
          {Object.keys(productPreview).length !== 0 && <CreateProductPreview product={productPreview} />}
        </SidebarLayout.Main>
      </SidebarLayout>

    </StyledCreateProductSection>
  );
}

const StyledCreateProductSection = styled(Section)`
  background-color: var(--primary-color);
  width: 100%;
  height: 100%;
`;

export default CreateProduct;
