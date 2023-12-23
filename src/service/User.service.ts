import { compare } from "bcryptjs"
import { AppDataSource } from "../data-source"
import { User } from "../entities/User.entity"
import { AppError } from "../error/AppError"
import { ILogin, IUser } from "../interfaces/user.interface"
import { userWithoutPasswordSerializer } from "../interfaces/user.serializer"
import jwt from "jsonwebtoken";

export async function createUser(userData: IUser){
    const userRepository = AppDataSource.getRepository(User)
    const verifyUser = await userRepository.findOneBy({
        email: userData.email
    })
    if(verifyUser){
        throw new AppError('User Already exists', 409)
    }
    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)
    const userReturnWithoutPass = userWithoutPasswordSerializer.strip().parse(
        createUser
    )
    return userReturnWithoutPass
}
export async function createSessionService(userData: ILogin){
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      email: userData.email,
    });
  
  
    if (!user) {
      throw new AppError("Wrong username/password.", 403);
    }
  
    const matchPassword = await compare(userData.password, user.password);
  
    if (!matchPassword) {
      throw new AppError("Wrong username/password.", 403);
    }
  
    const token = jwt.sign(
      { email: userData.email,
        name: user.name
        },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
        subject: user.id,
      }
    );
  
    return token;
}