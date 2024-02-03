import dotenv from 'dotenv';
dotenv.config();
import app from './index.js';
import { connectToMongoose } from './src/database/config.js';



app.listen(process.env.PORT, () => {
    console.log(`App is running at port ${process.env.PORT}`)
    connectToMongoose();
})
