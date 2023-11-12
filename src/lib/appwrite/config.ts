import {Client,Account,Avatars,Databases,Storage} from 'appwrite';

export const appwriteconfig = {
    projectId:'653f118ca2d1675bf59c',
    url: 'https://cloud.appwrite.io/v1',
    dbId:import.meta.env.VITE_APPWRITE_DB,
    storageId:import.meta.env.VITE_APPWRITE_STORAGE_ID,
    usercollId:import.meta.env.VITE_APPWRITE_USERS_ID,
    postcollId:import.meta.env.VITE_APPWRITE_POSTS_ID,
    savecollId:import.meta.env.VITE_APPWRITE_SAVES_ID
}

export const client = new Client();
console.log(appwriteconfig.projectId);
client.setProject(appwriteconfig.projectId);
client.setEndpoint(appwriteconfig.url);

export const acc = new Account(client);
export const db = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);