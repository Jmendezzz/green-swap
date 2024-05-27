import { Quality,getQualityValue } from "@/domain/product/Condition"
import styled from "styled-components"

interface ProductQualityTagProps {
  quality: Quality;
}

function ProductQualityTag({ quality }: ProductQualityTagProps) {
  return (
    <StyledProductQualityTag quality={getQualityValue(quality)}>
      {getQualityValue(quality)}
    </StyledProductQualityTag>
  )
}

const StyledProductQualityTag = styled.div<{ quality: string }>`
  position: absolute;
  top:20px;
  right: 0;
  padding: 0.2rem;
  clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 10% 100%, 0% 50%, 10% 0%);
  padding-left: 1rem;
  font-weight: 700;
  width: 12rem;

  background-color: ${props => {
    switch (props.quality) {
      case Quality.LIKE_NEW:
        return 'var(--contrast-color)';
      case Quality.GOOD:
        return 'yellow';
      case Quality.FAIR:
        return 'var(--red)';
      default:
        return 'gray';
    }
  }};

    color:${props => {
    switch (props.quality) {
      case Quality.LIKE_NEW:
        return 'var(--white)';
      case Quality.GOOD:
        return 'var(--primary-color)';
      case Quality.FAIR:
            return 'var(--white)';
      default:
        return 'white';
    }
  }};
`;
export default ProductQualityTag