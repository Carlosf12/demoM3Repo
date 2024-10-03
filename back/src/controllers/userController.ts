import {Request, Response} from "express";
import IUser from "../interfaces/IUser";
import { createUserService, getUsersService } from "../services/userServices";

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
}

export const createUser = async (req: Request, res: Response) => {
    const { name, email, active} = req.body;
    const newUser: IUser = await createUserService({ name, email, active});
    res.status(201).json(newUser);
}