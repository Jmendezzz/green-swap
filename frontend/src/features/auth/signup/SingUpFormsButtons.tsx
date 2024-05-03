import { useSignUpContext } from '@/context/SignUpContext';
import Button from '@/features/ui/Button';

function SingUpFormsButtons() {
  const { currentStep, stepsNumber } = useSignUpContext();
  if (currentStep === 0) {
    return (
      <div className="flex justify-center gap-5">
        <Button type="submit" variant="primary">
          Continuar
        </Button>
      </div>
    );
  }
  if (currentStep === stepsNumber - 1) {
    return (
      <div className="flex justify-between gap-5">
        <Button type="submit" variant="secondary">
          Atras
        </Button>
        <Button type="submit" variant="primary">
          Registrarse
        </Button>
      </div>
    );
  }
  return (
    <div className="flex justify-between gap-5">
      <Button type="submit" variant="secondary">
        Atras
      </Button>
      <Button type="submit" variant="primary">
        Continuar
      </Button>
    </div>
  );
}

export default SingUpFormsButtons;