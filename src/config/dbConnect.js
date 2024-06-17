import mongoose,{ mongo } from "mongoose";



async function conectaNaDataBase()  {
    mongoose.connect(process.env.DB_CONNECT);
    return mongoose.connection;
};

export default conectaNaDataBase;
