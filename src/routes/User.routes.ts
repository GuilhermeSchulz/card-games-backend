import { createSessionController, createUserController } from "../controllers/User.controller";
import { Router } from "express";

export const userRouter = Router()

userRouter.post('',createUserController)
userRouter.post('/login',createSessionController)