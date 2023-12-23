import { Request, Response } from "express";
import { createSessionService, createUser, editUserService, getUserService } from "../service/User.service";
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
export async function editUserController(req: Request, res: Response){
    const userData = req.body
    const id = req.params.id
    const user = await editUserService(id, userData);
    return res.status(201).json(user)
}
export async function getUserController(req: Request, res: Response){
    const userData = req.user
    const user = await getUserService(userData);
    return res.status(201).json(user)
}