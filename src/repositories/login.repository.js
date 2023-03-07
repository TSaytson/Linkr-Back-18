import { mongo } from "../database/database.js";
import { postgres } from "../database/database.js";

function findUser(email){
    return mongo.collection('users').
    findOne({email});

}

function insertUser(user){
    return mongo.collection('users').
    insertOne(user);
}

function updateUserToken(user, token){
    return mongo.collection('users').
    updateOne(
        {_id: user._id}, 
        {$set: {token}});
}
export const loginRepository = {
    findUser,
    insertUser,
    updateUserToken
}