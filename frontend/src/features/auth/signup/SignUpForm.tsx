import Row from '@/features/ui/Row';
import PersonalInfoForm from './PersonalInfoForm';
import SignUpSteps from './SignUpSteps';
import { useSignUpContext } from '@/context/SignUpContext';
import AccountInfoForm from './AccountInfoForm';
import SignUpProfilePictureForm from './SignUpProfilePictureForm';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  enter: (direction: string) => {
    return {
      x: direction === 'right' ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};

const FORM_STEPS = [
  <PersonalInfoForm />,
  <AccountInfoForm />,
  <SignUpProfilePictureForm />,
];
function SignUpForm() {
  const { currentStep } = useSignUpContext();
  const prevStepRef = useRef<number>(currentStep);
  const direction = currentStep > (prevStepRef.current ?? 0) ? 'right' : 'left';

  return (
    <Row type="vertical" className="gap-5 w-full overflow-hidden">
      <motion.div
        key={currentStep}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        className="w-full flex justify-center flex-col items-center gap-5 "
      >
        <SignUpSteps />
        {FORM_STEPS[currentStep]}
      </motion.div>
    </Row>
  );
}

export default SignUpForm;
