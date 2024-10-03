import {Request, Response} from "express";
import IUser from "../interfaces/IUser";
import { getUsersService } from "../services/userServices";

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
}