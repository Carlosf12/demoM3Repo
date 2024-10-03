import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";

let users: IUser[] = [{
    id: 1,
    name: "carlos",
    email: "cf@mail.com",
    active: true
}]

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}