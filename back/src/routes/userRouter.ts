import { Router } from "express";
import {createUser, getUserId, getUsers, loginUser} from "../controllers/userController"

const userRouter = Router()

//Rutas....
userRouter.get("/", getUsers)
userRouter.get("/:id", getUserId)
userRouter.post("/register", createUser)
userRouter.post("/login", loginUser)

export default userRouter;