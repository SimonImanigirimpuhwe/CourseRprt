import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import adminRouter from './route/admins';
import userRouter from './route/users';
import reportRouter from './route/reports';


const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use('/api/admins', adminRouter);
app.use('/api/users', userRouter);
app.use('/api/report', reportRouter);

app.get('/', (req, res)=>{
    res.status(200).json({msg:'A warmth Welcome to daily courses report.'})
});
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
    () => console.log(`App running on ${port}...`))