import { Request, Response } from "express";
import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";

let users: IUser[] = [{
    id: 0,
    name: "carlos",
    email: "cf@mail.com",
    active: true
}]

let id: number = 1

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const createUserService = async (userData: UserDto): Promise<IUser> => {
    const newUser: IUser = {
        id, 
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser);
    id++;
    return newUser;
}

