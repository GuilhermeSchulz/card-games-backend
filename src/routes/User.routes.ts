import { createSessionController, createUserController, deleteUserController, editUserController, getUserController } from "../controllers/User.controller";
import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/tokenDecoder.middleware";

export const userRouter = Router()

userRouter.post('',createUserController)
userRouter.post('/login',createSessionController)
userRouter.patch('/:id', editUserController)
userRouter.get('',verifyTokenMiddleware, getUserController)
userRouter.delete('/:id', verifyTokenMiddleware,deleteUserController)