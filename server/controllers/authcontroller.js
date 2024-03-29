
import mongoose from 'mongoose'
import Usermodel from '../models/Usermodel.js'
import { createError } from '../error.js';
import Jwt from 'jsonwebtoken';
//to create new user


export const signUp = async(req, res, next) => {

    try {
        const newUser = new Usermodel({ ...req.body });
        await newUser.save();
        res.status(200).send("User has been created")

    } catch (error) {
        next(error);
    }
}

export const login = async(req, res, next) => {
   
    try {
        const user = await Usermodel.findOne({email: req.body.email});
        if(!user) return next(createError(404, "User not found"));
        else{
          if(user.password===req.body.password) {
            // console.log(user)
            
            const token = Jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: 60*60*24*30})
            const {password, ...others} = user._doc;

            res.cookie("access_token", token, {
                httpOnly:true     
            }).status(200).json(others);
          
          }
          else{
            return next(createError(400, "Wrong Credentials"))
          }

        }  


    } catch (error) {
        next(error);
    }
  


}


export const google = () => {

}


