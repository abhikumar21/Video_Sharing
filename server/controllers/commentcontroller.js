import { createError } from "../error.js";
import Commentmodel from "../models/Commentmodel.js"

export const addComment = async(req, res, next) => {
    try {
        const newComment = new Commentmodel({...req.body, userId: req.user.id });
        await newComment.save();;
        res.status(200).send(newComment)
    } catch (error) {
        next(error)
    }
}

export const deleteComment = async(req, res, next) => {
    try {
        //req.params => from the path in url
     const comment = await Commentmodel.findById(req.params.id)
     const video = await Videomodel.findById(req.params.id)
     if(req.user.id == Commentmodel.userId || req.user.id == video.userId) {
        await Commentmodel.findByIdAndDelete(req.params.id)
        res.status(200).json("The comment has been deleted")
     }
     else{
        return next(createError(403, "You can delete only your comment"))
     }
    } catch (error) {
        next(error)
    }
}

export const getComment = async(req, res, next) => {
    try {
        const comments = await Commentmodel.find({videoId: req.params.videoId})
        res.status(200).send(comments);
    } catch (error) {
        next(error)
    }
}