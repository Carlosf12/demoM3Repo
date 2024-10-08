import CredentialDto from "../dto/CredentialDto";
import ICredential from "../interfaces/ICredential";


const credentialsDB: ICredential[] = [];
let id: number = 1;

export const createCredentialsService = async (credentialsData: CredentialDto): Promise<number> => {

   const {username, password} = credentialsData;

   const newCredentials: ICredential = {
      id,
      username,
      password
   }
   credentialsDB.push(newCredentials);
   id++;
   return newCredentials.id
};

export const checkCredentialsService = async (credentials: CredentialDto): Promise<number> => {
   const {username, password} = credentials;
   const foundCredentials = credentialsDB.find((cred) => cred.username === username);

   if(foundCredentials?.password === password) return foundCredentials.id
   else throw new Error("Incorrect information")
};

