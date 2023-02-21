import { MongoClient } from 'mongodb';

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/afascore-api';

export const client = new MongoClient(MONGO_URI);
export const db = client.db();
