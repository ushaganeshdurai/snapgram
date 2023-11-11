import { INewUser } from "../../types";
import { ID } from "appwrite";
import { acc } from "./config";
export async function createUserAccount(user:INewUser){
    try {
        const newAccount = await acc.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        )
        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }

}