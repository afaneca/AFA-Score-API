import { MongoClient } from 'mongodb';

const {
  MONGO_URI = 'mongodb://localhost:27017/afascore-api',
} = process.env;

export const client = new MongoClient('mongodb://127.0.0.1:27017/afascore-api');
export const db = client.db();