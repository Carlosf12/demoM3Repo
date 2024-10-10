import { Request, Response } from "express";
import { createNewUserService, getAllUsersService, getUserByIdService } from "../services/userServices";

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    const allUsers = await getAllUsersService();
    return res.status(200).json(allUsers);
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try{
        const { id } = req.params;
        const foundUser = await getUserByIdService(Number(id))
        return foundUser 
        ? res.status(200).json(foundUser) 
        : res.status(404).json({message: "USER DOES NOT EXIST"})
    }catch(err){
        return res.status(500).json(err)
    }
}

export const loginUser = async (req: Request, res: Response) => {
    return res.status(200).json({ message: "Route to POST for loginUser" })
}

export const createNewUser = async (req: Request, res: Response): Promise<Response> => {
    const { name , email, birthdate, nDni, username, password} = req.body;
    const newUser = await createNewUserService({name , email, birthdate, nDni, username, password});
    return res.status(201).json({message: "User Created", newUser})
}