import {Client,Account,Avatars,Databases,Storage} from 'appwrite';

export const appwriteconfig = {
    projectId:import.meta.env.PRO_ID,
    url:'https://cloud.appwrite.io/v1'
}

export const client = new Client();
console.log(appwriteconfig.projectId);
client.setProject(appwriteconfig.projectId);
client.setEndpoint(appwriteconfig.url);

export const acc = new Account(client);
export const db = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);