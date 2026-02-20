import dotenv from "dotenv";
import app from './src/app.js';
import connectDb from "./src/config/db.js";
dotenv.config();
const PORT = process.env.PORT || 5000;


async function startServer(){
    await connectDb();
    app.listen(PORT, () => {
        console.log(`Server listening at ${PORT}`);
    });
}


startServer();
