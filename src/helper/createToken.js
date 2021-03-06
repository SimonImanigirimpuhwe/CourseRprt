import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const generateToken = (info) =>{
    const secretKey = process.env.SECRET_KEY;
    try{
        const token = jwt.sign({
        _id: info._id,
        username: info.username,
    }, secretKey, {
        algorithm:'HS256',
        expiresIn:'5d'
    });
    return token;
    }catch(error){
        throw new Error({error:'Internal error'})
    }
};

export default generateToken;