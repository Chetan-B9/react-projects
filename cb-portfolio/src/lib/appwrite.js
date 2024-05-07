import { Client } from "appwrite";

// Initialize the SDK
const client = new Client();

// set the project ID and API endpoint
client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('6637beb1002da3834acc');


export default client;
