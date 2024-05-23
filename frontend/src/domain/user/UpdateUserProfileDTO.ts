export interface UpdateUserProfileDTO {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    urlProfilePicture: string | File | undefined;
}