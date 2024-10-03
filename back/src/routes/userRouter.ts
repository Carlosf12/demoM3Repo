import { Router } from "express";
import {createUser, getUsers} from "../controllers/userController"

const userRouter = Router()

//Rutas....
userRouter.get("/", getUsers)
userRouter.get("/:id", getUsers)
userRouter.post("/register", createUser)

export default userRouter;