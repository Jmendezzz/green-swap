import Row from '@/features/ui/Row';
import PersonalInfoForm from './PersonalInfoForm';
import SignUpSteps from './SignUpSteps';
import { useSignUpContext } from '@/context/SignUpContext';

const FORM_STEPS = [<PersonalInfoForm />];
function SignUpForm() {
  const { currentStep } = useSignUpContext();
  return (
    <Row type="vertical" className="gap-5 w-full">
      <SignUpSteps  />
      {FORM_STEPS[currentStep]}
    </Row>
  );
}



export default SignUpForm;
