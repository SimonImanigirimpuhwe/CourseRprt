import bcrypt from 'bcryptjs';
import User from '../model/user';
import generateToken from '../helper/createToken';

class UserController{
    static async addUser(req, res){
        const user = await User.findOne({regNumber:req.body.regNumber});
        if(user) return res.status(400).json({error:`User with regNumber ${user.regNumber} was registered before`});

        const cp = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            regNumber: req.body.regNumber,
            address:{
                school:req.body.school,
                faculty:req.body.faculty,
                level:req.body.level
            }
        });
        try{
            const savedCp = await cp.save();
            res.status(200).send({msg:'Class Representative added successfully', savedCp});
        }catch(error){
            return res.status(400).json({error:error.message});
        }   
    };

    static async login(req, res){
       const  user = await User.findOne({regNumber:req.body.regNumber});
       if(!user) return res.status(401).json({error:'Unauthorized'});

       try{
        const token = generateToken(user);
        return res.status(200).json({msg:'Logged in successfully', token})
       }catch(err){
           return res.status(500).send({error:'Internal error'})
       }
    };
    
    static async editUser(req, res){
        try{
        const newUser = await User.findByIdAndUpdate(req.params.id, {
            $set:{  address:{
                school:req.body.school,
                faculty:req.body.faculty,
                level:req.body.level
            }
        }
        },{new:true});
            return res.status(200).send({msg:'User updated successfully', newUser});
        }catch(err){                  
            return res.status(500).json({error:`User with given regNumber is not found`})
        }
    };

    static async deleteUser(req, res){
        try{
        const user = await User.findByIdAndRemove(req.params.id, { new: true });
        return res.status(200).send(user)
        }catch(err){
        return res.status(400).json({error:`Class Representative with given regNumber  is not found`});
        }

    };

    static async searchUser(req, res){
        try{
         const searchedUser = await User.find({
          $or:[
               {firstName: req.body.firstName},
               {lastName: req.body.lastName},
               {regNumber: req.body.regNumber}
            ]
        });
        if(searchedUser.length === 0) return res.status(400).json({error:'No such user in database'})
        res.status(200).send({searchedUser})
    }catch(error){
        return res.status(500).send({error:'Internal error'})
    };
    }

    static async usersList(req, res){
        try{
        const user = await User.find().sort('school');
        res.status(200).send(user);
    }catch(err){
        res.status(400).json({error:err.message})
    }
    }
};

export default UserController;