import { createError } from "../error.js";
import Usermodel from "../models/Usermodel.js";
import Videomodel from "../models/Videomodel.js"


export const addVideo = async(req, res, next) => {
    // const userId = req.user.id;
     //req.user contains userId in middleware verifyToken.js
    const newVideo = await Videomodel({ userId: req.user.id, ...req.body });
    try {

        const saveVideo = await newVideo.save();
        res.status(200).json(saveVideo)
        
    } catch (error) {
        next(error);
    }
}

export const updateVideo = async(req, res, next) => {
    const videoId = req.params.id;
    try {
        if(videoId == userId) {
          const update = await Videomodel.findByIdAndUpdate(videoId, { $set: req.body }, {new: true})
          res.status(200).json("video updated")
        }  
        else{
          return createError(404, "Failed to update")
        }
    } catch (error) {
        next(error);
    }
}

export const deleteVideo = async(req, res, next) => {
    const videoId = req.params.id;
    try {
        const deleteit = await Videomodel.findByIdAndDelete(videoId)
        res.status(200).json("video deleted")
    } catch (error) {
        next(error)
    }
}

export const getVideo = async(req, res, next) => {
    const videoId = req.params.id;
    try {
        const myvideo = await Videomodel.findById(videoId)
        if(!myvideo) return next(createError(404, "Video not found")) 
        else return res.status(200).json("find");
        
    } catch (error) {
        next(error)
    }
}

export const viewVideo = async(req, res, next) => {
    const videoId= req.params.id;
    const userId = req.body.id;
   
    try {
        const view = await Videomodel.findById(videoId);
        if(!view.viewedBy.includes(userId)) {
            const myViews = await view.updateOne({$push:  {views: userId} })
        }
        const numview = view.views;
        numview = numview + 1;
    } catch (error) {
        next(error)
    }
}

export const trendingVideo = async(req, res, next) => {
    try {
        //views: -1 gives the most no of views
        const trending = await Videomodel.find().sort({ views: -1})
        res.status(200).json(trending)
    } catch (error) {
        next(error)
    }

}

export const randomVideo = async(req, res, next) => {
    try {
        //aggregate from mongoDB
        const random = await Videomodel.aggregate([{ $sample: { size: 40 } }])
        res.status(200).json(random)
    } catch (error) {
        next(error)
    }
}

export const subscribedVideo = async(req, res, next) => {
    const userId = req.user.id;
    try {
        const user = await Usermodel.findById(userId) //me
        const subscribedChannels = user.subscribedUsers;

        const list = Promise.all(subscribedChannels.map(channelId => {
            return Videomodel.find({userId: channelId})
        }))

        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}


export const getbytagVideo = async(req, res, next) => {

    const tags = req.query.tags.split(",");
    console.log(tags)

    try {
        const videos= await Videomodel.find({ tags:{$in: tags}}).limit(20);
        res.status(200).json(videos)
        
    } catch (error) {
        next(error);
    }
}


export const searchVideo = async(req, res, next) => {
    const query = req.query.q;
    try {
        const videos = await Videomodel.find({title: { $regex: query, $options: "i"},desc: { $regex: query, $options: "i"}, }).limit(40);
        res.status(200).json(videos)
    } catch (error) {
        
    }
}


