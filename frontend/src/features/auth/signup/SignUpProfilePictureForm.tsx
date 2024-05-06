import AuthFormContainer from '@/features/ui/AuthFormContainer';
import SingUpFormsButtons from './SingUpFormsButtons';
import { useRef, useState } from 'react';
import { useSignUpContext } from '@/context/SignUpContext';
import { FiCamera } from 'react-icons/fi';
import SignUpFormHeader from './SignUpFormHeader';
import Form from '@/features/ui/Form';

function SignUpProfilePictureForm() {
  const {
    addSignUpData,
    signUpData,
    submitSignUp
  } = useSignUpContext();
  const [profilePicture, setProfilePicture] = useState<File | undefined>(signUpData.profilePicture);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleFileChange = () => {
    const file = ref.current?.files?.[0];
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
    <AuthFormContainer type="vertical" className='gap-10'>
        <SignUpFormHeader label="Pesonaliza tu perfil agregando una foto. Este paso es opcional"/>

        <Form onSubmit={submitHandler}>
          <div onClick={() => ref.current?.click()}>
            <div className="flex justify-center">
              {profilePicture ? (
                <img
                  src={URL.createObjectURL(profilePicture)}
                  alt="profile"
                  className="w-[200px] h-[200px] rounded-full object-cover object-center cursor-pointer transition-all hover:opacity-70"
                />
              ) : (
                <div
                  className="w-[200px] h-[200px] bg-primary bg-opacity-90 hover:bg-slate-800 rounded-full flex items-center justify-center text-9xl transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <FiCamera
                    size={48}
                    className={`absolute ${
                      hovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    } transition-all duration-500`}
                  />
                  <h1
                    className={`absolute ${
                      hovered ? 'opacity-0 invisible' : 'opacity-100 visible'
                    } transition-all duration-500`}
                  >
                    {signUpData.firstName[0]}
                    {signUpData.lastName[0]}
                  </h1>
                </div>
              )}
            </div>
            <input
              type="file"
              name="profile-picture"
              id="profile-picture"
              accept="image/*"
              style={{ display: 'none' }}
              ref={ref}
              onChange={handleFileChange}
            />
          </div>

          <SingUpFormsButtons onBack={onBackHandler}/>
        </Form>
    </AuthFormContainer>
  );
}

export default SignUpProfilePictureForm;
