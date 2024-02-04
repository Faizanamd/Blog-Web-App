import express from 'express';
import userRouter from './src/features/users/user.router.js';
import cors from 'cors';
import postRouter from './src/features/posts/post.routes.js';
const app = express();
app.use(express.static('public'))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}
));
app.use(express.json());
// Different routes
app.get("/", (req, res) => {
    res.send("Welcome to rbo");
})
// user related routes
app.use("/api/user", userRouter);
app.use("/api/post", postRouter)


export default app;
