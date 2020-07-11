import bcrypt from 'bcryptjs';
import Admin from '../model/admin';
import generateToken from '../helper/createToken';

class AdminController {

    static async signup(req, res){
        const emailExist = await Admin.findOne({email:req.body.email});
        if(emailExist) return res.status(400).json({msg:`${emailExist.username} Already registered`});

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        
        const admin = new Admin({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password:hashPassword,
            isProfessional: req.body.isProfessional
        })
        try{
            const savedAdmin = await admin.save();
            const token = generateToken(savedAdmin);

            const{
                firstName,
                lastName,
                username,
                email,
                _id,
            } = savedAdmin;

           return res.send({
               token,
               body:{
                firstName,
                lastName,
                username,
                email,
                _id
               }
            });         
        }catch(error){
            return res.status(500).send({error:error.message});
        };

    };

    static async login(req, res){
        const admin = await Admin.findOne({ username:req.body.username,});
        if(!admin) return res.status(400).json({msg:'Invalid username or password'});

        try{
            const validPass = await bcrypt.compare(req.body.password, admin.password);
            if(!validPass) return res.status(403).json({msg:'Invalid Password'});
            
            const token = generateToken(admin)
            res.status(200).json({msg:'Logged in successfully', token});
        }catch(error){
            return res.status(500).send({error: error.message})
        }
    };
}


export default AdminController;