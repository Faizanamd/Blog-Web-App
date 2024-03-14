

import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    postId: String,
    userId: String,
    like: Boolean,
});

const LikeModel = mongoose.model("likes", likeSchema);
export default LikeModel;