import ResetPasswordRequestForm from '@/features/auth/reset-password/ResetPasswordRequestForm';
import AuthStyledSection from '@/features/ui/AuthStyledSection';

function ResetPasswordRequest() {

  return (
    <AuthStyledSection>
      <div className="flex w-full h-full justify-center items-center">
        <ResetPasswordRequestForm />
      </div>
    </AuthStyledSection>
  );
}


export default ResetPasswordRequest;
