import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialServices";
import CredentialDto from "../dto/CredentialDto";

let users: IUser[] = [{
    id: 1,
    name: "carlos",
    email: "cf@mail.com",
    birthdate: new Date (1990, 10, 20),
    nDni: '12345678',
    credentialsId: 1
}]

let id: number = 2

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUserByIdService = async (userId: number): Promise<IUser | undefined> => {
    return users.find(user => user.id === userId);
}


export const createUserService = async (userData: UserDto, credentialsData: CredentialDto): Promise<IUser> => {
    const newUser: IUser = {
        id, 
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: await createCredentialsService(credentialsData.username,credentialsData.password);
    }
    users.push(newUser);
    id++;
    return newUser;
}

