import { INewUser } from "../../types";
import { ID, Query } from "appwrite";
import { acc, appwriteconfig, avatars, db } from "./config";
export async function createUserAccount(user:INewUser){
    try {
        const newAccount = await acc.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        );
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);
         const newUser = await saveUserToDB({
            accountId:newAccount.$id,
            name:newAccount.name,
            email:newAccount.email,
            username:user.username,
            imgUrl:avatarUrl
         })
        console.log(`New user account has been created ${newAccount.email}`)
        return newUser;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export async function saveUserToDB(user: {
     accountId:string,
     email:string,
     username?:string,
     name:string,
     imgUrl: URL    
}){
    try {
        const newUser = await db.createDocument(
            appwriteconfig.dbId,
            appwriteconfig.usercollId,
            ID.unique(),
            user
        )
        return newUser;
    } catch (error) {
        console.log(error);
        
    }
}

export async function signInAccount(user:{email:string;password:string}) {
    try {
        const session = await acc.createEmailSession(user.email,user.password);
        return session;
    } catch (error) {
        console.log(error);
        
    }
}

export async function getCurrentUser(){
    try {
        const currentAccount = await acc.get();
        if(!currentAccount) throw Error;
        const currentUser = await db.listDocuments(
            appwriteconfig.dbId,
            appwriteconfig.usercollId,
            [Query.equal('accountId',currentAccount.$id)]
        )
        if (!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        
    }
}