import { listen } from "./app";
import connectDatabase from "./db/Database";
//import app from './app';
//query for database connectivity

//handling uncaught Exceptions
process.on("uncaughtException", (err)=>{
    console.log(`Error : ${err.message}`);
    console.log('shutting down the server for handling uncaught exception ')
})

//config
if(process.env.NODE_ENV !== "Production"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}
//create server
const server = listen(process.env.PORT,()=>{
    console.log(`Server is Running on the http://localhost:${process.env.PORT}`);
});

connectDatabase();

//Unhandled promise rejection
process.on("unhandledRejection" ,(err) =>{
    console.log(`Shutting down the Server for ${err.message}`);
    console.log("Shutting down the Server for unhandled promise rejection");
    server.close(()=>{
        process.exit(1);
    });
});
