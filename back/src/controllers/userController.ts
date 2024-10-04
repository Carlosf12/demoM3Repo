import {Request, Response} from "express";
import IUser from "../interfaces/IUser";
import { createUserService, getUsersService } from "../services/userServices";

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    return res.status(200).json(users);
}


export const getUserId = async (req: Request, res: Response) => {
    return res.status(200).json({message:"Route to GET user by ID"})
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, active} = req.body;
    const newUser: IUser = await createUserService({ name, email, active});
    return res.status(201).json(newUser);
}

export const loginUser = async (req: Request, res: Response) => {
    return res.status(200).json({message:"Route to POST for loginUser"})
}