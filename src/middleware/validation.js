import Joi from '@hapi/joi';

export const signupValidation = (req, res, next) =>{
    const schema = Joi.object().keys({
        firstName:Joi.string().required(),
        lastName:Joi.string().required(),
        username:Joi.string().min(5).max(50).required(),
        email:Joi.string().required().email(),
        password:Joi.string().min(8).max(1500).required(),
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send({error:error.details[0].message});
    next();
};

export const loginValidation = (req, res, next) =>{
    const schema = Joi.object().keys({
        username:Joi.string().min(5).max(50).required(),
        password:Joi.string().min(8).max(1500).required(),
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send({error:error.details[0].message});
    next();
};

export const userValidation = (req, res, next) =>{
    const schema = Joi.object().keys({
        firstName:Joi.string().required(),
        lastName:Joi.string().required(),
        regNumber: Joi.string().required(),
        school: Joi.string().required(),
        faculty:Joi.string().required(),
        level: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send({error: error.details[0].message});
    next();
}

export const userLoginValidation = (req, res, next) =>{
    const schema = Joi.object().keys({
        regNumber: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send({error: error.details[0].message});
    next();
}

export const editValidation = (req, res, next) =>{
    const schema = Joi.object().keys({
        school: Joi.string().required(),
        faculty:Joi.string().required(),
        level: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send({error: error.details[0].message});
    next();
};

export const reportValidation = (req, res, next) =>{
    const schema = Joi.object().keys({
        school: Joi.string().required(),
        faculty:Joi.string().required(),
        level: Joi.string().required(),
        studentsNumber: Joi.string().required(),
        days: Joi.string().required(),
        date: Joi.string().required(),
        hours: Joi.string().required(),
        module: Joi.string().required(),
        component: Joi.string().required(),
        activity: Joi.string().max(50).required(),
        lecturer: Joi.string().min(4).max(50).required(),
        observation: Joi.string().max(50).required(),   
    });
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send({error:error.details[0].message});
    next();
}