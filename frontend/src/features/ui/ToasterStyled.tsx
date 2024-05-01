import { Toaster } from 'react-hot-toast';

function ToasterStyled() {
  return (
    <Toaster
      position="top-center"
      containerStyle={{ margin: '10px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 3000,
        },
        style: {
          fontSize: '1.6rem',
          padding: '1.6rem',
          borderRadius: '1.6rem',
          color: 'var(--white)',
          backgroundColor: 'var(--primary-color)',
        },
      }}
    />
  );
}

export default ToasterStyled;
