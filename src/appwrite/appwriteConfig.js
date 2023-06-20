 import { Client, Account, Databases } from 'appwrite';

 const client = new Client()

 client
        .setEndpoint("http://localhost/v1")
        .setProject("648ec6285f567594920d")
;

 export const account = new Account(client)
 export const databases = new Databases(client, "648ec66108af6dd76e8d")
