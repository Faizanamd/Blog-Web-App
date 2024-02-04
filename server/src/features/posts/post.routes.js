import express from 'express';
import { upload } from '../../middlewares/file.upload.js';
import { newPostController, getAllPostController , getPostById} from './post.controller.js';
const postRouter = express.Router();


postRouter.post("/newpost", upload.single("image"), newPostController)
postRouter.get("/getAllPost", getAllPostController);
postRouter.get("/getPostById/:postId", getPostById);



export default postRouter;