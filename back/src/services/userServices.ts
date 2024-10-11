import { UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import { createCredentialsService } from "./credentialServices";


export const getAllUsersService = async (): Promise<User[]> => {
    const users = await UserModel.find(
        {
            relations: {
                appointments: true,
                credential: true
            }
        }
    )
    return users
}

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const user = await UserModel.findOne({
        where:{id},
        relations: ["appointments"]
    })
    return user
}


export const createNewUserService = async (userData: UserDto): Promise<User> => {
    const { username, password, name, email, birthdate, nDni } = userData;
    const newCredId = await createCredentialsService({ username, password })

    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthdate = birthdate;
    newUser.nDni = nDni;
    newUser.credential = newCredId;

    await UserModel.save(newUser)
    return newUser
}



