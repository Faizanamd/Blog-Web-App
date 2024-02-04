import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content: String,
    title: String,
    userId: String,
    image: String,
    views: Number,
    likes: Number,
    timestamp: String,

});

const PostModel = mongoose.model('post', postSchema);
export default PostModel;