import { Request, Response } from "express";
import { createNewUserService, getAllUsersService, getUserByIdService } from "../services/userServices";
import { checkCredentialsService } from "../services/credentialServices";

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const allUsers = await getAllUsersService();
        return allUsers
        ? res.status(200).json(allUsers)
        : res.status(404).json("Users not found")
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try{
        const { id } = req.params;
        const foundUser = await getUserByIdService({id: Number(id), email: null})
        return foundUser 
        ? res.status(200).json(foundUser) 
        : res.status(404).json({message: "USER DOES NOT EXIST"})
    }catch(err){
        return res.status(500).json(err)
    }
}

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {username, password} = req.body
        const checkedCredentials = await checkCredentialsService({username, password})
        return checkedCredentials
        ? res.status(200).json({login: true ,user: checkedCredentials})
        : res.status(400).json({login:false})        
    } catch (error) { 
        return res.status(500).json(error)
    }
}

export const createNewUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {name, email, birthdate, nDni, username, password} = req.body
        if(!name || !email || !birthdate || !nDni || !username || !password) 
            return res
                .status(400)
                .json({error: "Invalid information"})

        const foundUserByEmail = await getUserByIdService({id:null, email})
        if(foundUserByEmail) {
            return res.status(400).json({error:"User already exist with this email"})
        }
        const newUser = await createNewUserService(req.body);
        return res.status(201).json({message: "User Created", newUser})

    } catch (error) {
        return res.status(500).json(error)
    }
}