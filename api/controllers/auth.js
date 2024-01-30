import User from "../models/Users.js"
import bycrypt from "bcrypt"

export const register = async (req, res, next)=>{
    try{
     const salt = bycrypt.genSaltSync(10);
     const hash = bycrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            
        })


    await newUser.save()
    res.status(200).send("User has been created")

    }catch(err){
        next(err)
    }
}