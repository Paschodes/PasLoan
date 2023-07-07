import { Client, Account, Databases } from 'appwrite';


const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('64a41f012eae04dd3f17');


export const account = new Account(client);

export const databases = new Databases(client, "64a325ef783e5fc9155b");
