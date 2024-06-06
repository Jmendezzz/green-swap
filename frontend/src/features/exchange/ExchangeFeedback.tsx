import { useState } from 'react';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

function ExchangeFeedback() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
  
    const handleStarClick = (index: number) => {
      setRating(index);
    };
  
    return (
      <StyledExchangeFeedback>
        <Heading type='h2'>Califica tu intercambio</Heading>
        <div className='flex gap-6'>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <Star 
                key={i}
                onMouseEnter={() => setHoverRating(ratingValue)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleStarClick(ratingValue)} 
                color={ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"} 
              />
            );
          })}
        </div>
        <div>
            {rating !== 0 && <p>Has calificado con {rating} <span>{rating > 1 ? 'estrellas' : 'estrella'}</span></p>}
        </div>
        <div className='w-full'>
            <Textarea placeholder='Escribe tu opinión' />
        </div>
        <div>
            <Button variant='primary'>Enviar</Button>
        </div>
      </StyledExchangeFeedback>
    );
  }
  

const StyledExchangeFeedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    gap: 2rem;
  min-height: 300px;
  width:400px;
  font-size: 2rem;
`;

const Star = styled.span<{ color: string }>`
  font-size: 2em;
  color: ${props => props.color};
  cursor: pointer;
  transition: color 0.2s;
  &:before {
    content: "★";
  }
`;

export default ExchangeFeedback;