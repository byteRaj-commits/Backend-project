import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connectDB from './db/db.js';

connectDB();

app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);
   
});