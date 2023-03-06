import { mongo } from "../database/database.js";
import { postgres } from "../database/database.js";

export function findUser(email){
    return mongo.collection('users').
    findOne({email});

}

export function insertUser(user){
    return mongo.collection('users').
    insertOne(user);
}