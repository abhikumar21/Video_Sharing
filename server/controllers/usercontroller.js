import { createError } from "../error.js"
import Usermodel from "../models/Usermodel.js"
import Videomodel from "../models/Videomodel.js"

export const updateUser = async(req, res, next) => {

   if(req.params.id == req.user.id){
     try {
        const updatedUser = await Usermodel.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})      
        res.status(200).json(updatedUser)
     } catch (err) {
        next(err)
     }
   }
   else{
    return createError(403, "You are not authorised to perform this task")
   }
}

export const deleteUser = async(req, res, next) => {
   if(req.params.id==req.user.id) {
    const userId= req.params.id;
    try {
        const deleted = await Usermodel.findByIdAndDelete(userId);
        res.status(200).json("Your User account deleted")
    } catch (error) {
        res.status(403).json(error)
    }
   }
   else{
    return createError(403, "You are not authorised to perform this task")
   }
}

export const getUser = async(req, res, next) => {
   const userId = req.params.id;

   try {
    const user = await Usermodel.findById(userId)

    if(user) {
        const {password, ...otherDetails} = user._doc;
        res.status(200).json(otherDetails)
    }
    else{
        return createError(403, "No user found")
    }


   } catch (error) {
    next(error)
   }
}

export const subscribe = async(req, res, next) => {
    const userId= req.params.id; //wants to subscribe
    const {channelUserId} = req.body; //to be followed
     
    if(userId==channelUserId) {
        createError(403, "You cannot subscribe yourself")
    }
    else{
        try {
            const I_want_to_follow = await Usermodel.findById(userId) 
            // const Follow_me = await Usermodel.findById(channelUserId)

            if(!I_want_to_follow.subscribedUsers.includes(channelUserId)) {
                await I_want_to_follow.updateOne({$push : {subscribedUsers : channelUserId}} )
                // await Follow_me.updateOne({$pull : {subscribers: userId}})
                res.status(200).json("Channel Subscribed")
            }
            else{
                await I_want_to_follow.updateOne({$pull : {subscribedUsers: channelUserId}})
            }
        } catch (error) {
            next(error)
        }
    }
   
}

export const unsubscribe = (req, res, next) => {
   
}

export const like = async(req, res, next) => {
   const id = req.user.id;
   const videoId = req.user.videoId;

   try {
     await Videomodel.findByIdAndUpdate(videoId, {
        $addToSet: {likes:id},
        $pull: {dislikes:id}
     })
     res.status(200).json("video liked")

   } catch (error) {
    next(error)
   }
}

export const dislike = (req, res, next) => {
   
}