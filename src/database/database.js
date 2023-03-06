import { MongoClient } from "mongodb";
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);

try{
    await mongoClient.connect();
    console.log('MongoDB connected');
} catch(error){
    console.log(error);
}

export const mongo = mongoClient.db('linkr');


const {Pool} = pg;

const configDatabase = {
    connectionString: process.env.POSTGRES_URL
}

if (process.env.MODE === 'prod') configDatabase.ssl = true;

export const postgres = new Pool(configDatabase);