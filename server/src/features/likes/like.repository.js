import LikeModel from "./like.model.js";


export const liekPostRepo = async (postId, userId) => {
    try {
        const temp = await LikeModel.findOne({ postId, userId });

        if (!temp) {
            // If the record doesn't exist, create a new one with like set to true
            const tempNew = new LikeModel({ postId, userId, like: true });
            const result = await tempNew.save();
            if (!result) {
                return { "status": false, "message": "Something went wrong!" };
            }
            return { "status": true, "message": "Post Like successfull!" };
        } else {
            // If the record exists, toggle the value of 'like'
            temp.like = !temp.like;
            const result = await temp.save();
            if (!result) {

                return { "status": false, "message": "Something went wrong!" };
            }
            if (result.like) {
                return { "status": true, "message": "Post Like successfull!" };
            }
            return { "status": true, "message": "Like remove successfull!" };
        }
    } catch (err) {
        console.error(err.message);
        throw err; // Re-throw the error to be handled by the calling code
    }
};


export const getPostLikeByIdRepo = async (postId) => {
    try {
        const result = await LikeModel.find({ postId });
        console.log("rsult repo", result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

