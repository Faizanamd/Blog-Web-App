import PostModel from "./post.model.js"

export const newPostRepositpoy = async (post) => {
    try {
        const newpost = new PostModel(post);
        const result = await newpost.save();
        return result;
    } catch (error) {
        console.log(error.message);
    }
}
export const getAllPostRepository = async () => {
    try {
        const result = await PostModel.find()
        // console.log(result);
        return result;
    }
    catch (err) {
        console.log(err.message);

    }
}
export const getPostByIdRepo = async (postId) => {
    try {
        const result = await PostModel.findById({ _id: postId })
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(err.message);

    }
}

