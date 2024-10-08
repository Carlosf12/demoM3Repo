import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialServices";

let users: IUser[] = []

/*
{
    "name":"Mario Gonzales",
    "email":"mgonzales22@gmail.com",
    "birthdate":"18/09/1978",
    "nDni":123123123,
    "username":"mgonzales",
    "password":"mgonza123"
} 
*/
let id: number = 1

export const getAllUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
   const foundUser = users.find((user) => user.id === id);
   return foundUser;
}


export const createNewUserService = async (userData: UserDto): Promise<IUser> => {
    const { username, password, name, email, birthdate, nDni} = userData;
    const newCredsId = await createCredentialsService({username, password});
    const newUser: IUser = {
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialsId: newCredsId
    }
    users.push(newUser);
    id++;
    return newUser;
}

