import { useSignUpContext } from '@/context/SignUpContext';
import Button from '@/features/ui/Button';

interface Props {
  onBack?: () => void;
}

function SingUpFormsButtons({ onBack }: Props) {
  const { currentStep, stepsNumber, prevStep } = useSignUpContext();

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
        Atras
      </Button>
      <Button type="submit" variant="primary">
        {isLastStep ? 'Registrarse' : 'Continuar'}
      </Button>
    </div>
  );

  if (currentStep === 0) {
    return (
      <div className="flex justify-center gap-5">
        <Button type="submit" variant="primary">
          Continuar
        </Button>
      </div>
    );
  }

  return renderButtons(currentStep === stepsNumber - 1);
}


export default SingUpFormsButtons;
