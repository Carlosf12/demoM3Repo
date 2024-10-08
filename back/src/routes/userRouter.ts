import { Router } from "express";
import {createNewUser, getAllUsers, getUserById, loginUser} from "../controllers/userController"

const userRouter = Router()

//Rutas....
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/register", createNewUser)
userRouter.post("/login", loginUser)

export default userRouter;