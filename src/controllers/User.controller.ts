import { Request, Response } from "express";
import { createSessionService, createUser } from "../service/User.service";
import { ILogin } from "../interfaces/user.interface";


export async function createUserController(req: Request, res: Response){
    const userData = req.body
    console.log(userData)
    const user = await createUser(userData);
    return res.status(201).json(user)
   }
   export const createSessionController = async (req: Request, res: Response) => {
    const userData:ILogin = req.body;
    const token = await createSessionService(userData);
    return res.status(201).json({token: token});
  };