import { BasicInfoUserDTO } from "../user/BasicInfoUserDTO";

export interface MessageDTO{
    id:number,
    content:string,
    sender: BasicInfoUserDTO
    createdAt:Date,
}