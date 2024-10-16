import { CredentialModel } from "../config/data-source";
import CredentialDto from "../dto/CredentialDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";


export const createCredentialsService = async (credentialsData: CredentialDto): Promise<Credential> => {
   const {username, password} = credentialsData;
   const newCredential = new Credential();
   newCredential.username = username;
   newCredential.password = password;
   await CredentialModel.save(newCredential);
   return newCredential
};

export const checkCredentialsService = async (credentials: CredentialDto): Promise<User | undefined> => {
   const {username, password} = credentials;
   const foundCredentials = await CredentialModel.findOne({
      where: {username},
      relations: ["user"]
  });

   if(foundCredentials?.password === password) return foundCredentials?.user
};

