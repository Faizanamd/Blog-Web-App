
import express from 'express';
import { likePost, getPostLikeByPostIdUserId } from './like.controller.js';
const likeRouter = express.Router();


likeRouter.get("/getLikePostByPostIdUserId/:postId", getPostLikeByPostIdUserId) ;
likeRouter.post("/toggleLike/:postId", likePost)

export default likeRouter;