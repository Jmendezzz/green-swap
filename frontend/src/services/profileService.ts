import { UpdateUserProfileDTO } from "@/domain/user/UpdateUserProfileDTO";
import { axiosInstace } from "./axiosConfig";
import { UpdateUserPasswordDTO } from "@/domain/user/UpdateUserPasswordDTO";


const REQUEST_MAPPING = '/profile';


export function updateUserProfileService(data: UpdateUserProfileDTO) {
    const formData = new FormData();
    formData.append('updateProfileInfo',
        new Blob([JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
        })], { type: 'application/json' }));

    if (data.urlProfilePicture) {
        formData.append('profilePicture', data.urlProfilePicture);
    }

    return axiosInstace.put(`${REQUEST_MAPPING}/update`, formData);
}

export function updatePasswordService(data: UpdateUserPasswordDTO) {
    return axiosInstace.put(`${REQUEST_MAPPING}/update-password`, data);

}

