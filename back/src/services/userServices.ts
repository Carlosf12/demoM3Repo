import { UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import { createCredentialsService } from "./credentialServices";


export const getAllUsersService = async (): Promise<User[] | null> => {
    
    const users = await UserModel.find(
        {
            relations: {
                appointments: true,
                credential: true
            }
        }
    )
    if(users.length === 0) {
        return null    
    } else {
        return users
    }
}

export const getUserByIdService = async (user: {id: number | null, email: string | null}): Promise<User | null> => {
    const {id, email } = user;
    
    interface IWhere {
        id?: number,
        email?: string
    }
    
    const  whereClause: IWhere = {};

    if(id) whereClause.id = id;
    if(email) whereClause.email = email


    const foundUser = await UserModel.findOne({
        where: whereClause,
        relations: ["appointments"]
    })
    return foundUser
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



