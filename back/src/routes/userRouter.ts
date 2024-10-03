import { Router } from "express";
import {getUsers} from "../controllers/userController"

const userRouter = Router()

//Rutas....
userRouter.get("/", getUsers)
userRouter.get("/:id", getUsers)

export default userRouter;