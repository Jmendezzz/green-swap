
interface SignUpRequestDTO {
    fisrtName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    profilePicture?: File;
}
export default SignUpRequestDTO;