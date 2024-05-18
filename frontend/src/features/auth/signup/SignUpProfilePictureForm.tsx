import AuthFormContainer from '@/features/ui/AuthFormContainer';
import SingUpFormsButtons from './SingUpFormsButtons';
import {useState } from 'react';
import { useSignUpContext } from '@/context/SignUpContext';
import SignUpFormHeader from './SignUpFormHeader';
import Form from '@/features/ui/Form';
import UploadImageInput from '@/features/ui/UploadImageInput';

function SignUpProfilePictureForm() {
  const { addSignUpData, signUpData, submitSignUp } = useSignUpContext();
  const [profilePicture, setProfilePicture] = useState<File | undefined>(
    signUpData.profilePicture
  );

  const handleFileChange = (file: File | undefined) => {
    if (file) {
      setProfilePicture(file);
      addSignUpData({
        profilePicture: file,
      });
    }
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitSignUp();
  }

  function onBackHandler() {
    addSignUpData({
      profilePicture: profilePicture,
    });
  }
  return (
    <AuthFormContainer type="vertical" className="gap-10">
      <SignUpFormHeader label="Pesonaliza tu perfil agregando una foto. Este paso es opcional" />

      <Form onSubmit={submitHandler}>
        <UploadImageInput
          setImage={handleFileChange}
          image={profilePicture}
          optionalRender={
            <h1>
              {signUpData.firstName.charAt(0)}
              {signUpData.lastName.charAt(0)}
            </h1>
          }
        />

        <SingUpFormsButtons onBack={onBackHandler} />
      </Form>
    </AuthFormContainer>
  );
}

export default SignUpProfilePictureForm;
