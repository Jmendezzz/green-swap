import { ClipLoader } from 'react-spinners';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const sizes = {
  sm: 20,
  md: 40,
  lg: 60,
  xl: 100,
};
function Spinner({ size = 'md', color = '#1B232E' }: SpinnerProps) {
  return <ClipLoader color={color} size={sizes[size]} />;
}

export default Spinner;
