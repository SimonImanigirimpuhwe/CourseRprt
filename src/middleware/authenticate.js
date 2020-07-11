import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = async(req, res, next) =>{
    const token = req.header('authentication');
    if(!token) return res.status(401).send('Access Denied.');

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY );
        req.admin = decoded;
        next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
}

export default auth;