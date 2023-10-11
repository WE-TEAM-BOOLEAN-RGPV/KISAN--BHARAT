import mongoose from "mongoose";

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URL, {
        useNewURLParser: true,
        useUnifiedTopology : true,

    }).then((data) => {
        console.log(`mongodb connected with server ${data.connection.host}`)
    })
};


module.exports= connectDatabase;