import ICredential from "../interfaces/ICredential";


let credentials: ICredential[] = [];
let credentialId: number = 1;

export const createCredentialsService = async (username: string, password: string): Promise<number> => {
    const bcrypt = require('bcrypt');
    const saltrounds = 10;
    const passwordHash = await bcrypt.hash(password, saltrounds);
     const newCredential: ICredential = {
        id: credentialId,
        username,
        passwordHash
     };
     credentials.push(newCredential);
     credentialId++;
     return newCredential.id
}