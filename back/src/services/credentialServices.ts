import { CredentialModel } from "../config/data-source";
import CredentialDto from "../dto/CredentialDto";
import { Credential } from "../entities/Credential";


export const createCredentialsService = async (credentialsData: CredentialDto): Promise<Credential> => {
   const {username, password} = credentialsData;
   const newCredential = new Credential();
   newCredential.username = username;
   newCredential.password = password;
   await CredentialModel.save(newCredential);
   return newCredential
};

export const checkCredentialsService = async (credentials: CredentialDto): Promise<number> => {
   const {username, password} = credentials;
   const foundCredentials = await CredentialModel.findOneBy({username});

   if(!foundCredentials) {
      throw new Error("Incorrect username or password");
   }
   if(foundCredentials.password === password) {
      return foundCredentials.id
   } else {
      throw new Error("Incorrect information")
   }
};

