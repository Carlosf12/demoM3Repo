import {Request, Response} from "express";
import IUser from "../interfaces/IUser";
import { createUserService, getUsersService } from "../services/userServices";
import CredentialDto from "../dto/CredentialDto";

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    return res.status(200).json(users);
}


export const getUserId = async (req: Request, res: Response) => {
    return res.status(200).json({message:"Route to GET user by ID"})
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, birthdate, nDni} = req.body;
    const credentialsData: CredentialDto = {
        username: req.body.username,
        password: req.body.password
    }
    const newUser: IUser = await createUserService({ name, email, birthdate, nDni}, credentialsData);
    return res.status(201).json(newUser);
}

export const loginUser = async (req: Request, res: Response) => {
    return res.status(200).json({message:"Route to POST for loginUser"})
}