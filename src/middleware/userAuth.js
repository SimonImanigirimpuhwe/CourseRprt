import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userAuth = async(req, res, next) =>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }catch(err){
        res.status(400).send('Invalid token')
    }
}

export default userAuth;