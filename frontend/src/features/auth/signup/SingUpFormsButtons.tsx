import { useSignUpContext } from '@/context/SignUpContext';
import Button from '@/features/ui/Button';
import Spinner from '@/features/ui/Spinner';

interface Props {
  onBack?: () => void;
}

function SingUpFormsButtons({ onBack}: Props) {
  const { currentStep, stepsNumber, prevStep, isLoading } = useSignUpContext();

  const goBackHandler = () => {
    if (onBack) {
      prevStep();
      onBack();
    }else{
      prevStep();
    }
  };

  const renderButtons = (isLastStep: boolean) => (
    <div className="flex justify-between gap-5">
      <Button type="button" variant="secondary" onClick={goBackHandler}>
        Atrás
      </Button>
      <Button type="submit" variant="primary" className="w-[200px] min-w-[100px] flex items-center justify-center"
>
        {isLastStep ? isLoading ? <Spinner /> : 'Registrarse' : 'Continuar'}
      </Button>
    </div>
  );

  if (currentStep === 0) {
    return (
      <div className="flex justify-center gap-5 ">
        <Button type="submit" variant="primary" className='w-[200px] min-w-[100px]'>
          Continuar
        </Button>
      </div>
    );
  }

  return renderButtons(currentStep === stepsNumber - 1);
}


export default SingUpFormsButtons;
