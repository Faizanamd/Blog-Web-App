import { checkEmailExist, registerRepository } from "./user.repository.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from "./user.model.js";

export const registerController = async (req, res) => {
    try {
        const user = req.body;
        const checkExist = await checkEmailExist(req.body.email);
        if (checkExist) {
            return res.send({ "status": false, 'message': "User already exist" });
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const result = await registerRepository({ ...user, password: hashPassword, image: req.file.filename, timestamp: "1263" });
        if (result) {
            return res.send({ "status": true, 'message': "Registeration successfull" })
        }else{
            return res.send({status:false, "message":"Something went wrong" });
        }
    } catch (error) {
        console.log("error in register controller: ", error.message);
        return res.send({ "status": false, 'message': err.message });
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await checkEmailExist(email);
        if (!userExist) {
            return res.send({ "status": false, 'message': "User doesn't exist" });
        }
        const validatePassword = await bcrypt.compare(password, userExist.password);
        console.log(validatePassword);
        if (!validatePassword) {
            return res.send({ "status": false, 'message': "Invalid Credentials" });
        }
        const token = jwt.sign({ id: userExist._id }, process.env.SECRET_KEY, {
            expiresIn: '45s',
        })
        res.cookie(String(userExist._id), token, {
            path: '/',
            expiresIn: new Date(Date.now() + 45 * 1000),
            httpOnly: true,
            sameSite: 'lax'
        })
        return res.send({ "status": true, 'message': "log in successfull" });
    } catch (error) {
        console.log(error.message);
        return res.send({ "status": false, 'message': err.message });
    }
}

export const getUser = async (req, res) => {
    console.log("get usr got hiteted")
    const userID = req.id;
    console.log("Usr id", userID);

    try {
        const user = await UserModel.findById({ _id: userID }, "-password");
        if (!user) {
            return res.send({
                result: false,
                message: "Token is invalid"
            });
        } else {
            res.send({
                result: true,
                message: "Token verify successful",
                user: user
            });
        }
    } catch (err) {
        console.log(err.message);
        // res.send({
        //     result: false,
        //     message: "Error getting user"
        // });
        return res.send({ "status": false, 'message': err.message });
    }
}

export const deleteToken = async (req, res) => {
    try {
        const userID = req.id;

        // Clear the cookie using clearCookie
        res.clearCookie(String(userID), {
            httpOnly: true,
            sameSite: 'lax'
        });

        res.send({
            result: true,
            message: "Token deleted successfully"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            result: false,
            message: "Error deleting token"
        });
        return res.send({ "status": false, 'message': err.message });
    }
}

