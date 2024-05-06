
interface SignUpRequestDTO {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    profilePicture?: File;
}
export default SignUpRequestDTO;