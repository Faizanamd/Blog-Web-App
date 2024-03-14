import { newPostRepositpoy, getAllPostRepository, getPostByIdRepo } from "./post.repository.js";


export const newPostController = async (req, res) => {
    try {
        const newPost = { ...req.body, image: req.file.filename, views: 0, likes: 0, timestamp: getDateAndTime() };
        const result = await newPostRepositpoy(newPost);
        if (!result) {
            return res.send({ "status": false, 'message': "Something went wront!" });
        }
        return res.send({ "status": true, 'message': "Blog Posted Successfully" });
    } catch (err) {
        console.log(err.message);
    }
}
export const getAllPostController = async (req, res) => {
    try {
        const result = await getAllPostRepository();
        if (!result) {
            return res.send({ "status": false, 'message': "No post avaible!" });
        }
        return res.send({ "status": true, 'message': "Posts!", posts: result })
    } catch (err) {
        console.log(err.message);
    }
}

export const getPostById = async (req, res) => {
    try {
        const postId = req.params.postId;
        // console.log(postId);
        const result = await getPostByIdRepo(postId);
        if (!result) {
            return res.send({ "status": false, 'message': "Post is not available!" });
        }
        return res.send({ "status": true, 'message': "Posts!", posts: result })

    } catch (err) {
        console.log(err.message);
    }
}


function getDateAndTime() {
    // Get current date and time
    const currentDate = new Date();

    // Get hours and minutes
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    // Ensure hours and minutes are in two-digit format
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Get day, month, and year
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // Shortened month names
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Format the date and time string
    const formattedDateAndTime = `${hours}:${minutes} ${day}/${monthNames[monthIndex]}/${year}`;

    return formattedDateAndTime;
}