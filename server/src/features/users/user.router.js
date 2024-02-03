import express from 'express';
import { registerController, loginController, getUser,deleteToken } from './user.controller.js';
import { upload } from '../../middlewares/file.upload.js';
import { cookieAutn, refreshToken } from '../../middlewares/auth.js';
const userRouter = express.Router();


userRouter.post("/register", upload.single("image"), registerController);
userRouter.post("/login", loginController);
userRouter.get("/verifyToken", cookieAutn, getUser);
userRouter.get("/refreshToken", refreshToken, cookieAutn,getUser)
userRouter.get("/deleteToken", cookieAutn, deleteToken);


export default userRouter;