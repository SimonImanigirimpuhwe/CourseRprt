import express from 'express';
import mongoose from 'mongoose';
import adminRouter from './route/admins';
import userRouter from './route/users';
import reportRouter from './route/reports';

const app = express();

app.use(express.json());
app.use('/api/v1/admins', adminRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/report', reportRouter);


const port = process.env.PORT || 3000;

const url = process.env.DATABASE_URL;

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false,
},(error) => {
    if(error) throw error;
    console.log('Connected to DB')})

app.listen(port, 
    () => console.log(`App running on http://localhost:${port}/api/v1...`))