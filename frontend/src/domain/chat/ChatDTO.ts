import { BasicInfoUserDTO } from "../user/BasicInfoUserDTO";
import { MessageDTO } from "./MessageDTO";

export interface ChatDTO{
    id:number,
    user1: BasicInfoUserDTO,
    user2: BasicInfoUserDTO,
    messages: MessageDTO[]
}