import Row from '@/features/ui/Row';
import PersonalInfoForm from './PersonalInfoForm';
import SignUpSteps from './SignUpSteps';
import { useSignUpContext } from '@/context/SignUpContext';
import AccountInfoForm from './AccountInfoForm';

const FORM_STEPS = [<PersonalInfoForm />, <AccountInfoForm />];
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
