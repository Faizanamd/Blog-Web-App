
import { liekPostRepo, getPostLikeByIdRepo} from "./like.repository.js";




export const likePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const userId = req.body.userId;
        const result = await liekPostRepo(String(postId), String(userId));
        return res.send(result);
    } catch (err) {
        console.log(err.message);
        return res.send({ "status": false, 'message': err.message});
    }
}

export const getPostLikeByPostIdUserId = async (req, res) => {
    try {
        const {postId} = req.params;
        // console.log(postId, userId);
        console.log("postId", postId);
        const result = await getPostLikeByIdRepo(postId);
        if(!result){
            return res.send({ "status": false, 'message': "No Likes found" })
        }
        return res.send({ "status": true, 'message': "Likes", result })
    } catch (error) {
        console.log(error.message);
        return res.send({ "status": false, 'message': err.message});
    }
}